module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: { 'react/prop-types': ['off'] },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
};
