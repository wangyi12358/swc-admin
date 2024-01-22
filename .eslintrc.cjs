module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [ 'react-refresh' ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'array-bracket-spacing': [ 'error','always' ],
    'object-curly-spacing': [ 'error','always' ],
    'quotes': [ 1, 'single' ], // 单引号
    'semi': [ 2, 'never' ], // 结尾不允许有分号
    'indent': [ 'warn', 2, { // 缩进空格
      'SwitchCase': 1
    } ]
  },
}
