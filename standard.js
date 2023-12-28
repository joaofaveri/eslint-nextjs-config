module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:json/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': ["error", {
      'arrowParens': 'avoid',
      'bracketSpacing': true,
      'htmlWhitespaceSensitivity': 'css',
      'insertPragma': false,
      'bracketSameLine': true,
      'jsxSingleQuote': true,
      'printWidth': 80,
      'proseWrap': 'always',
      'quoteProps': 'as-needed',
      'requirePragma': false,
      'semi': false,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none',
      'useTabs': false
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}