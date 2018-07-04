module.exports = {
  plugins: ['jsx-a11y', 'react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link', 'Anchor'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
  },
};
