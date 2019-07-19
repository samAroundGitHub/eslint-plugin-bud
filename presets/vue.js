// base on import
const config = {
  extends: ['./import', 'plugin:vue/recommended'],
  plugins: ['vue'],
  settings: {
    'import/extensions': ['.js', '.vue'],
  },
  rules: {} // willbe dynamic cover
};

module.exports = config;