// base on base-config.js
const config = {
  extends: ['./base', 'plugin:import/recommended'],
  plugins: ['import'],
  settings: {
    'import/extensions': ['.js']
  },
  rules: {} // willbe dynamic cover
};

module.exports = config;
