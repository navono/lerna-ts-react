module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'jest',
    'testing-library',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
};
