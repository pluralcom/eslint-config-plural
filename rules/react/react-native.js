module.exports = {
  plugins: [
    'react-native',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'react-native/no-unused-styles': 2,
  }
};
