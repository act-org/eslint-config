/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: [
    '@typescript-eslint',
    'disable',
    'filenames',
    'import',
    'jest',
    'jsx-a11y',
    'lodash',
    'new-with-error',
    'no-loops',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'security',
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'filenames/match-exported': [
      'error',
      ['camel', 'pascal'],
      '\\.(android|config|ios|test)$',
    ],
    'filenames/match-regex': 'off',
    'function-paren-newline': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
      },
    ],
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.stories.*',
          '**/*.test.*',
          '**/test/**/*.*',
        ],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/order': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-method': 'off',
    'new-with-error/new-with-error': 'error',
    'no-loops/no-loops': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__DEV__',
          '__ENV__',
          '__typename',
          '_cachedRowCount',
          '_dataBlob',
          '_ensureIndex',
          '_id',
          '_typename',
        ],
        allowAfterThis: true,
      },
    ],
    'no-use-before-define': 'off',
    'prefer-destructuring': [
      'off',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'prettier/prettier': 'error',
    'promise/always-return': 'error',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-deprecated': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'childContextTypes',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          'static-methods': [
            'displayName',
            'props',
            'state',
            'contextType',
            'contextTypes',
            'defaultProps',
            'getInitialProps',
            'navigationOptions',
          ],
        },
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-unsafe-regex': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
  settings: {
    'eslint-plugin-disable': {
      paths: {
        '@typescript-eslint': ['*.js', '**/*.js'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
};
