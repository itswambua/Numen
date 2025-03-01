// .eslintrc.js
module.exports = {
    root: true,
    extends: ['next/core-web-vitals'],
    rules: {
      'react/no-unescaped-entities': 'off',
      'import/no-anonymous-default-export': 'off'
    },
    parserOptions: {
      babelOptions: {
        presets: [require.resolve('next/babel')],
      },
    },
  };