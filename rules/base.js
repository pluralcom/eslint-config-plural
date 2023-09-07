module.exports = {
  plugins: ['jsdoc'],
  rules: {
    'arrow-parens': 0,
    camelcase: 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
    /** Enforces documentation */
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          //   'ArrowFunctionExpression': true,
          //   'ClassDeclaration': true,
          //   'ClassExpression': true,
          FunctionDeclaration: false,
          //   'FunctionExpression': true,
          //   'MethodDefinition': true
        },
        contexts: [
          // 'ArrowFunctionExpression',
          // 'FunctionDeclaration',
          // 'FunctionExpression',
          // 'MethodDefinition',
          // 'Property',
          // 'TSDeclareFunction',
          'TSEnumDeclaration',
          // 'TSInterfaceDeclaration',
          // 'TSMethodSignature',
          'TSPropertySignature'
          // 'TSTypeAliasDeclaration',
          // 'VariableDeclaration'
        ],
      },
    ],
  },
};
