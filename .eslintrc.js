module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    '@react-native',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react-native/no-color-literals': 'off',
  },
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};