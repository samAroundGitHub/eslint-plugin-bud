module.exports = {
  "extends": [
    "plugin:bud/react"
  ],
  "rules": {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unreachable": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  }
};
