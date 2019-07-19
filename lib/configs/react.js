/* !!IMPORTANT 
   This file has been automatically generated 
*/

module.exports = {
  "extends": [
    require.resolve("./import"),
    require.resolve("./jsx-a11y"),
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": require("../rules/react")
};