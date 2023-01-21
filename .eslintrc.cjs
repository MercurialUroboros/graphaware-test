module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/newline-after-import': ['warn', { count: 1 }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/no-ref-as-operand': 'warn',
    '@typescript-eslint/semi': ['error', 'never']
  },
  overrides: [
    {
      files: ['src/store/*.ts', 'src/types/*.ts', 'src/shims-vue.d.ts'],
      rules: {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        camelcase: 'off'
      }
    },
    {
      files: ['src/kitchen/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-var-requires': 'off'
      }
    },
    {
      files: ['tests/**/*.js'],
      rules: {
        'no-undef': 'off',
        'no-var-requires': 'off'
      }
    }
  ]
}
