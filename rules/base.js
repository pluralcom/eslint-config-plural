module.exports = {
  rules: {
    'arrow-parens': 0,
    camelcase: 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
  },
};
