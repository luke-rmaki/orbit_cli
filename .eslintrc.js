module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["prettier", "airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "linebreak-style": "off",
    "no-console": "off",
    "prettier/prettier": "error"
  }
};
