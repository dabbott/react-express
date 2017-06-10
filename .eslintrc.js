module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ["react", "import"],
  rules: {
    "react/prop-types": 0,
    "react/no-deprecated": 0,
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "react/no-string-refs": 0,
    "no-console": 0
  },
  globals: {
    System: true,
    isClient: true,
    isServer: true
  }
};
