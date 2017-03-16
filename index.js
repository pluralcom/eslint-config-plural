'use strict';

module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "env": {
      "browser": false,
      "node": true
    },
    "globals": {
      "window": true
    },
    "plugins": [
      "react",
      "react-native"
    ],
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
          "modules": true
      },
      "sourceType": "module"
    },
    "rules": {
      "comma-dangle": 0,
      "import/extensions": 0,
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": [2],
      "react-native/no-unused-styles": 2,
      "react/jsx-closing-bracket-location": [2, "line-aligned"],
      "react/jsx-curly-spacing": [2, "never"],
      "react/jsx-equals-spacing": [2, "never"],
      "react/jsx-boolean-value": 1,
      "react/prop-types": 1,
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      "react/jsx-max-props-per-line": 1,
      "react/jsx-no-bind": 2,
      "react/jsx-space-before-closing": 2,
      "react/jsx-wrap-multilines": [2, {"declaration": true, "assignment": false, "return": true}],
      "react/jsx-key": 2,
      "import/no-unresolved": 0,
      "import/no-extraneous-dependencies": 1,
      "import/first": 1,
      "no-const-assign":"error",
      "indent": [2, 2, {"SwitchCase": 1}],
      "key-spacing": [2, {
        "singleLine": {
          "beforeColon": false,
          "afterColon": true
        },
        "multiLine": {
          "beforeColon": false,
          "afterColon": true
        }
      }],
      "no-console": 1,
      "no-multi-spaces": [1, {
        "exceptions": {
          "VariableDeclarator": true
        }
      }],
      "no-return-assign": 0,
      "no-use-before-define": 0,
      "array-bracket-spacing": 2,
      "object-curly-spacing": 2,
      "prefer-const": 2,
      "no-underscore-dangle": 0,
      "no-prototype-builtins": 0,
      "class-methods-use-this": 0
    }
};
