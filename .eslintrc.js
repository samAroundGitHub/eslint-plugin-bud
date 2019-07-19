const path = require('path');

module.exports = {
  extends: [path.join(__dirname, './lib/configs/base.js')],
  rules: {
    "quotes": "off",
    "max-len": "off"
  },
  env: {
    jest: true
  }
};