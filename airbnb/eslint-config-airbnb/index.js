module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
    // 'eslint-config-airbnb',
    './rules/base',
  ].map(require.resolve),
  rules: {}
};
