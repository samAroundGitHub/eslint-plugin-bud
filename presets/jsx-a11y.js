// base on nothing
const config = {
  extends: [], // jsx-a11y decide to use no presets.
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: ['jsx-a11y'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {} // willbe dynamic cover
};

module.exports = config;