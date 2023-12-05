import { ESLint } from 'eslint'
import { resolve } from 'path'
import * as typescriptConfig from '../packages/eslint-typescript/src'
describe('General test', () => {
  const lint = new ESLint(
    {
      cwd: resolve(__dirname, './sources'),
      baseConfig: {
        parserOptions: {
          project: './tsconfig.json'
        }

      },
      overrideConfig: typescriptConfig,
      useEslintrc: false

    }
  )
  const getFile = async (path:string) => await lint.lintFiles(resolve(__dirname, path))
  test('typescript nice file', async () => {
    const result = await getFile('./sources/example_1.ts')
    expect(result).toHaveLength(1)
    const [item] = result
    expect(item.errorCount).toBe(0)
    expect(item.warningCount).toBe(0)
  })
  test('typescript bad file', async () => {
    const result = await getFile('./sources/bad_example_again.ts')
    expect(result).toHaveLength(1)
    const [item] = result
    expect(item.messages.map(message => message.message)).toStrictEqual(['Expected a function expression.', 'Extra semicolon.'])
    expect(item.errorCount).toBe(2)
    expect(item.warningCount).toBe(0)
  })
})
