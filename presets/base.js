const config = {
  root: true,
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9, // willbe dynamic cover
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {} // willbe dynamic cover
};

module.exports = config;