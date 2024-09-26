import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import parserTs from '@typescript-eslint/parser';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import lodash from 'lodash';
import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import pluginLodash from 'eslint-plugin-lodash';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import pluginDisable from 'eslint-plugin-disable';
// import pluginFilenames from 'eslint-plugin-filenames';
// import pluginImport from 'eslint-plugin-import';
import pluginNewWithError from 'eslint-plugin-new-with-error';
import pluginNoLoops from 'eslint-plugin-no-loops';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
// import importPlugin from 'eslint-plugin-import';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  allConfig: pluginJs.configs.all,
  baseDirectory: dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

const oldPlugins = [
  ...fixupConfigRules(
    compat.extends(
      // 'airbnb',
      'plugin:@typescript-eslint/recommended',
      // 'plugin:import/errors',
      // 'plugin:import/warnings',
      // 'plugin:import/typescript',
      'plugin:lodash/recommended',
    ),
  ),
  {
    languageOptions: {
      parser: parserTs,
      sourceType: 'script',
    },
    plugins: {
      '@typescript-eslint': fixupPluginRules(pluginTs),
      disable: pluginDisable,
      // filenames: pluginFilenames,
      // import: pluginImport,
      lodash: fixupPluginRules(pluginLodash),
      'new-with-error': pluginNewWithError,
      'no-loops': pluginNoLoops,
      'react-hooks': fixupPluginRules(pluginReactHooks),
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
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
      'lodash/import-scope': 'off',
      'lodash/prefer-lodash-method': 'off',
      'new-with-error/new-with-error': 'error',
      'no-loops/no-loops': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
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
];

export default [
  {
    files: ['**/*.{cjs,js,jsx,mjs,ts,tsx}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  ...oldPlugins,
  lodash.merge(pluginJs.configs.recommended, {
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      'function-paren-newline': 'off',
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
      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: false,
        },
      ],
    },
  }),
  lodash.merge(pluginPrettierRecommended, {
    rules: {
      'prettier/prettier': 'error',
    },
  }),
  lodash.merge(pluginReact.configs.flat.recommended, {
    rules: {
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
    },
  }),
  lodash.merge(pluginJest.configs['flat/recommended'], {
    files: ['**/*.test.ts', '**/*.test.tsx'],
  }),
  lodash.merge(pluginJsxA11y.flatConfigs.recommended, {
    rules: {
      'jsx-a11y/href-no-hash': 'off',
    },
  }),
  lodash.merge(pluginPromise.configs['flat/recommended'], {
    rules: {
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
    },
  }),
  lodash.merge(pluginSecurity.configs.recommended, {
    rules: {
      'security/detect-non-literal-regexp': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-object-injection': 'off',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-unsafe-regex': 'error',
    },
  }),
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
