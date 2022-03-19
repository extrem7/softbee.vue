/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const DENIED_PATH_GROUPS = [
  'app/**',
  'pages/*/**',
  'features/*/**',
  'entities/*/**',
  'shared/*/*/**',
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/entities',
  '../**/shared',
]

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: ['tailwindcss'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
  ],
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // base rules
    'no-console': 'warn',
    'no-debugger': 'warn',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-fallthrough': 'error',
    'consistent-return': 'error',
    'no-param-reassign': [
      'warn',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],

    // import rules
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      { groups: ['builtin', 'external'], warnOnUnassignedImports: true },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './.eslintrc.cjs',
          './vite.config.ts',
          '**/*.stories.ts',
          '**/*.test.ts',
          '**/mock.ts',
          './.storybook/**/*',
        ],
      },
    ],
    'no-restricted-imports': [2, { patterns: DENIED_PATH_GROUPS }],

    // vue rules
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/no-useless-v-bind': 'error',
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/custom-event-name-casing': ['error'],
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-restricted-call-after-await': 'error',

    // prettier
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
