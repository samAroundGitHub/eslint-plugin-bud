# eslint-plugin-bud

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-bud.svg?style=flat)](https://npmjs.org/package/eslint-plugin-bud)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-plugin-bud.svg?style=flat)](https://npmjs.org/package/eslint-plugin-bud)

# 工程结构
`
  -__tests__ [测试文件]
  -.vscode [断点调试配置]
  -bin [执行脚本]
  -lib [由 tools 根据 rules和presets 动态生成]
  -presets [eslint对应不同规则的基本配置]
  -rules [规则统计]
  -tools [处理工具]
`
- rules
  - 满足(/*eslint ...*/)或者(/*#eslint ...*/)的计入规则.
  - 符合规则的下一行若满足(// -> ...)格式，...的值会更新规则对应的value.
  - 符合规则的下一行若满足(// -> [pre]...)格式，...的值会更新规则对应的value并保留原代码格式.

- presets
  - base 最基本配置(使用babel-eslint替换parser, ecmaVersion会动态替换成最新版本支持).
  - import 基于base配置(附加import/recommended规则).
  - jsx-a11y 不基于其他配置.
  - react 基于import和jsx-a11y配置.
  - vue 基于import配置.
  
- lib
  - lib文件夹内均为动态生成(若想更新，执行npm run update即可).
  - npm publish会发布lib文件

- bin
  - global Usage
  `
    Usage: bud <command> [options]

    Options:
      -V, --version          output the version number
      -h, --help             output usage information

    Commands:
      init|create [options]  create a new eslint config file.
  `
  - init/create Usage
  `
    Usage: init|create [options]

    create a new eslint config file.

    Options:
      -f, --format <formatType>  Set the config file type(oneOf(["JavaScript", "JSON", "YAML"]) you want.(default javascript)
      -p, --preset <presetName>  Skip prompts and use <presetName> preset.
      --base                     Skip prompts and use base preset.
      --import                   Skip prompts and use import preset.
      --jsx                      Skip prompts and use jsx preset.
      --react                    Skip prompts and use react preset.
      --vue                      Skip prompts and use vue preset.
      -h, --help                 output usage information
  `

- tests
  - 开发完成，运行npm test测试规则可用性.

# 使用方法

## 安装.
  - npm i eslint-plugin-bud -D 或 yarn add eslint-plugin-bud -D
## 使用. 
  - 手动配置. 修改eslint配置项，添加extends: ["plugin:bud/..."]  (...可选base/import/jsx-a11y/react/vue)
  - bin脚本生成. ./node_modules/eslint-plugin-bud/bin/bud.js init/create [options]
