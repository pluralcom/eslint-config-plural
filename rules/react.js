module.exports = {
  plugins: ['react', 'eslint-plugin-react-perf'],

  extends: ['plugin:react-perf/recommended'],

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
