import {build, BuildOptions} from 'esbuild';
import {isAbsolute, dirname} from "path";
import * as process from "process";
import {argv, cwd} from "process";
import {rimrafSync} from 'rimraf';

const target = ['chrome64', 'edge79', 'firefox67', 'node16', 'safari11'];
import {globSync} from 'glob';
import {copyFileSync, existsSync, mkdirSync, readFileSync} from 'fs'
import {resolve} from "path";

type Config = {
    outDir?: string
    paths: string[]
}
const filesToCopy = [

    'package.json',
    'LICENCE',
    'README.md'
] as const
export const builder = async (configPath: string, config: Config) => {
    const projectRoot = dirname(configPath)
    console.log(`Run builder. Project ${projectRoot}`)

    const outDir = resolve(projectRoot, config.outDir ?? './dist');
    rimrafSync(outDir);
    console.log('Clearing up output dir.')
    if (!existsSync(outDir)) {
        mkdirSync(outDir);
    }
    (filesToCopy.forEach(file => {
        const absPath = resolve(projectRoot, `./${file}`)
        if (existsSync(absPath)) {
            const targetPath = `${outDir}/${file}`
            console.log(`Copying ${file}`)
            copyFileSync(absPath, targetPath)
        }
    }))
    const entryPoints = globSync(config.paths, {
        root: projectRoot
    });

    console.log(`Found files`, entryPoints)


    const shared: BuildOptions = {
        entryPoints,
        // Treat all dependencies in package.json as externals to keep bundle size to a minimum
        //bundle: true,
        packages: 'external',
        logLevel: 'info',
        bundle: false,
        minify: true,
        platform: 'neutral',
        outdir: `${outDir}/lib/`,

        treeShaking: true,
        sourcemap: true,
    };
    const handleBuild = async () => {

        const esmBuild = build({
            ...shared,
            format: 'esm',
            //splitting: true,
            outExtension: {
                '.js': '.js',
            },
            target,
        });

        const cjsBuild = build({
            ...shared,
            format: 'cjs',
            outExtension: {
                '.js': '.cjs',
            },
            target,
        });

        await Promise.all([esmBuild, cjsBuild])
    };
    await handleBuild();

}

const runBundler = async (configPath: string): Promise<void> => {
    if (!isAbsolute(configPath)) {
        throw new Error(`Config path ${configPath} is not absolute`)
    }
    const fileContent = readFileSync(configPath, {
        encoding: 'utf8'
    })
    const config: Config = JSON.parse(fileContent)
    try {
        return await builder(configPath, config);
    } catch (err) {
        console.error(err)
        throw err;
    }
}
let [, , dir] = argv
if (!isAbsolute(dir)) {
    dir = resolve(cwd(), dir)
}
runBundler(resolve(dir, './build.config.json')).catch(err => {
    console.error(err)
    process.exit(1)
})
