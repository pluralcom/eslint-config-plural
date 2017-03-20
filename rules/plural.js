module.exports = {
  rules: {
    'comma-dangle': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 1,
    'import/first': 1,
    'no-const-assign': 'error',
    indent: [
      2,
      2, {
        SwitchCase: 1
      }
    ],
    'key-spacing': [
      2, {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: false,
          afterColon: true
        }
      }
    ],
    'no-console': 1,
    'no-multi-spaces': [1, {
      exceptions: {
        VariableDeclarator: true
      }
    }],
    'no-return-assign': 0,
    'no-use-before-define': 0,
    'array-bracket-spacing': 2,
    'object-curly-spacing': 2,
    'prefer-const': 2,
    'no-underscore-dangle': 0,
    'no-prototype-builtins': 0,
    'class-methods-use-this': 0
  }
};
