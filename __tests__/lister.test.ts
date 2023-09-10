import {ESLint} from 'eslint'
import {resolve} from "path";
import typescriptConfig from '../packages/typescript'
describe("General test",()=>{
    const lint = new ESLint(
        {
            cwd:resolve(__dirname, '../'),
            baseConfig:typescriptConfig

        }
    )
    const getFile = async (path:string)=>await lint.lintFiles(resolve(__dirname, path))
    test("typescript nice file",async ()=>{
       const result =await getFile("./sources/example_1.ts")
        expect(result).toHaveLength(1)
        const [item] =result
        expect(item.errorCount).toBe(0)
        expect(item.warningCount).toBe(0)
    })
    test("typescript nice file",async ()=>{
        const result =await getFile("./sources/bad_example.ts")
        expect(result).toHaveLength(1)
        const [item] =result
        expect(item.errorCount).toBe(1)
        expect(item.warningCount).toBe(0)
    })
})
