module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['**/*/*.test.js'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': 0,
    'react/prop-types': [
      0,
      { ignore: ['ignore'], customValidators: ['customValidator'] },
    ],
    'react/no-unescaped-entities': 0,
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'no-param-reassign': [2, { props: false }],
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': 0,
  },
};
