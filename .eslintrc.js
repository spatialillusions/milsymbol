module.exports = {
  env: {
    "browser": true,
    //"node": true,
    "commonjs": true
  },
  extends: "eslint:recommended",
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": ["error", { allow: ["info","warn", "error"] }],
    //quotes: ["error", "double"],
    "no-unused-vars": ["error", { "vars": "all", "args": "none"}],
    semi: ["error", "always"]
  }
};
