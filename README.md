# Plural's Javascript Styleguide {
🎨 How plural paints its code;

[![npm version](https://badge.fury.io/js/eslint-config-plural.svg)](https://badge.fury.io/js/eslint-config-plural) [![Test Release Publish](https://github.com/pluralcom/eslint-config-plural/actions/workflows/test-publish.yml/badge.svg)](https://github.com/pluralcom/eslint-config-plural/actions/workflows/test-publish.yml)

## Getting Started

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react-perf`. If you don't need React, see [base entry point](#base-entry-point).

If using yarn, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. Otherwise, run npm info "eslint-config-plural@latest" peerDependencies to list the peer dependencies and versions, then run yarn add --dev <dependency>@<version> for each listed peer dependency.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-plural@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-plural
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-plural;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-plural eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-plural
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-plural eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "plural"` to your .eslintrc

### Base entry point

Our default export contains all of our ESLint rules, including ECMAScript 6+ without React. It requires eslint and eslint-plugin-import.

1. follow the steps above
2. Add `"extends": "plural/base"` to your .eslintrc

## Typescript

To extend Typescript configuration you should extend the `.tsconfig.json` file in your `tsconfig.json`.
```json
{
  "extends": "./node_modules/eslint-config-plural/tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

## Parents:
eslint-config-plural extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) or [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) style guide, appending our rules.

## Changelog
Check the [changelog](https://github.com/pluralcom/eslint-config-plural/releases) for version details.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

<hr>

This Package is being maintained by [plural](https://plural.com)

Built with ❤️ in California

# };
