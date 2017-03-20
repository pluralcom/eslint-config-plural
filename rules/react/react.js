module.exports = {
  plugins: [
    'react',
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
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': [2],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-boolean-value': 1,
    'react/prop-types': 1,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': 2,
    'react/jsx-space-before-closing': 2,
    'react/jsx-wrap-multilines': [2, { declaration: true, assignment: false, return: true }],
    'react/jsx-key': 2,
  }
};
