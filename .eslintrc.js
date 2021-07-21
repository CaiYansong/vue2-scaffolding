module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'global-require': 0,
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
  },
  "globals": {
    "__webpack_public_path__": true
  }
};
