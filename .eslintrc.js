module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "no-underscore-dangle": "off",
    "react/sort-comp": "off",
    "jsx-a11y/alt-text": "off",
    "prettier/prettier": "error",
    "linebreak-style": 0,
    "react/jsx-filename-extension": [
      "warn",
      {extensions: [".jsx", ".js"]}
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
  },
};
