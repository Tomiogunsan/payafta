module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "react", "prettier"],
  rules: {
    quotes: [
      "error",
      "single",
      { avoidEscape: false, allowTemplateLiterals: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
