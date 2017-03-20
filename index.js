module.exports = {
  extends: ['airbnb-base'].concat([
    './rules/plural',
    './rules/react/react',
    './rules/react/react-native',
  ]
  .map(require.resolve)),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
