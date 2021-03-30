module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*/*.test.js'],
};
