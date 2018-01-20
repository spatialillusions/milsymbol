module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    commonjs: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    semi: ["error", "always"]
  }
};
