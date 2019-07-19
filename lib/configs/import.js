/* !!IMPORTANT 
   This file has been automatically generated 
*/

module.exports = {
  "extends": [
    require.resolve("./base"),
    "plugin:import/recommended"
  ],
  "plugins": [
    "import"
  ],
  "settings": {
    "import/extensions": [
      ".js"
    ]
  },
  "rules": require("../rules/import")
};