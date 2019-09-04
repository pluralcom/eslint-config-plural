module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
