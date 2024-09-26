import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import disable from 'eslint-plugin-disable';
// import filenames from 'eslint-plugin-filenames';
import jest from 'eslint-plugin-jest';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import lodash from 'eslint-plugin-lodash';
import newWithError from 'eslint-plugin-new-with-error';
import noLoops from 'eslint-plugin-no-loops';
// import prettier from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import security from 'eslint-plugin-security';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      // 'plugin:import/errors',
      // 'plugin:import/warnings',
      // 'plugin:import/typescript',
      'plugin:jest/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:lodash/recommended',
      // 'plugin:prettier/recommended',
      'plugin:react/recommended',
    ),
  ),
  {
    languageOptions: {
      ecmaVersion: 2017,
      globals: {
        ...globals.browser,
        ...jest.environments.globals.globals,
      },
      parser: tsParser,
      sourceType: 'script',
    },
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      disable,
      // filenames,
      jest: fixupPluginRules(jest),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      lodash: fixupPluginRules(lodash),
      'new-with-error': newWithError,
      'no-loops': noLoops,
      //  prettier: fixupPluginRules(prettier),
      promise,
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      security,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'comma-dangle': ['error', 'only-multiline'],
      /*
      'filenames/match-exported': [
        'error',
        {
          conventions: ['camelCase', 'PascalCase'],
          suffixes: ['android', 'config', 'ios', 'test'],
        },
      ],
      'filenames/match-regex': 'off',
      */
      'function-paren-newline': 'off',
      /*
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
      */
      //'import/no-extraneous-dependencies': [
      // 'error',
      //{
      // devDependencies: [
      // '**/*.config.*',
      // '**/*.stories.*',
      //'**/*.test.*',
      //'**/test/**/*.*',
      //],
      //},
      //],
      /*
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'warn',
      'import/order': 'off',
      */
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
      // 'prettier/prettier': 'error',
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
      'react/no-multi-comp': [
        'error',
        {
          ignoreStateless: true,
        },
      ],
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
  },
  {
    files: ['**/*.test.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['node_modules'],
  },
];
