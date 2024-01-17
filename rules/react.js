module.exports = {
  plugins: ['react', 'eslint-plugin-react-perf', 'eslint-plugin-react-hooks-docs'],

  extends: ['plugin:react-perf/recommended', 'plugin:eslint-plugin-react-hooks-docs/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': [0],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
