module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-underscore-dangle'
  },
};