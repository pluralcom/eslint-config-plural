# Plural's Javascript Styleguide {
  How Plural paints its code;

[![npm version](https://badge.fury.io/js/eslint-config-plural.svg)](https://badge.fury.io/js/eslint-config-plural) [![Build Status](https://travis-ci.org/pluralcom/eslint-config-plural.svg?branch=master)](https://travis-ci.org/pluralcom/eslint-config-plural)

## Getting Started

The linter requires eslint, and react, react-native eslint plugins, to install them run:
```
npm install eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native --save-dev
```

Then install eslint-config-plural by runnig:
```
npm install eslint-config-plural --save-dev
```

In your eslintrc (or its equivalent) add
```
...
"extends": "plural",
"plugins": [
  "react",
  "react-native"
],
...
```


## Parents:
eslint-config-plural extends airbnb-base style guide, appending our artistic rules


## Lints:
  - es6
  - react
  - react native

## Changelog
Check the [changelog](https://github.com/pluralcom/eslint-config-plural/releases) for version details.

<hr>

This Package is developed and maintained by [plural](https://plural.com)

Built with ❤️ in California

# };
