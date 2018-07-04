module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
  ].map(require.resolve),
  rules: {}
};
