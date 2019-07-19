// base on import and jsx-a11y
const config = {
  extends: ['./import', './jsx-a11y', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {} // willbe dynamic cover
};

module.exports = config;