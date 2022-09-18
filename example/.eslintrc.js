module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@quramy/tutorial"],
  rules: {
    "@quramy/tutorial/no-literal": 2,
  },
};
