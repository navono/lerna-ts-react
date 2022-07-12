module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/extensions": 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "no-use-before-define": 0,
    "react/prop-types": [
      0,
      { ignore: ["ignore"], customValidators: ["customValidator"] },
    ],
    "react/no-unescaped-entities": 0,
    "import/no-extraneous-dependencies": [
      1,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "no-param-reassign": [2, { props: false }],
    "import/prefer-default-export": [0],
    "react/jsx-props-no-spreading": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
