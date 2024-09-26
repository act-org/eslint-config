# [4.11.0](https://github.com/act-org/eslint-config/compare/v4.10.0...v4.11.0) (2024-09-26)


### Features

* Added eslint-import-resolver-typescript to the core config ([8ffdf0a](https://github.com/act-org/eslint-config/commit/8ffdf0af3c65a71524c7d654987fd1837e828dac))

# [4.10.0](https://github.com/act-org/eslint-config/compare/v4.9.0...v4.10.0) (2024-09-25)


### Features

* Bumped all eslint packages to their latest eslint@8 compatible releases ([c9b61a1](https://github.com/act-org/eslint-config/commit/c9b61a15b50f64d6a10b90d578438c49974514ee))

# [4.9.0](https://github.com/act-org/eslint-config/compare/v4.8.0...v4.9.0) (2024-09-25)


### Features

* Upgraded prettier to 3.3.3, as well as associated eslint packages ([8d4fd34](https://github.com/act-org/eslint-config/commit/8d4fd34b6bb9c1556ce232809afd91fed4388a56))

# [4.8.0](https://github.com/act-org/eslint-config/compare/v4.7.0...v4.8.0) (2024-09-25)


### Features

* Set tsconfig > compilerOptions.incremental to false by default ([66874c3](https://github.com/act-org/eslint-config/commit/66874c365ec54f4c8aa7afd24e3b2b8bb98f6c91))

# [4.7.0](https://github.com/act-org/eslint-config/compare/v4.6.0...v4.7.0) (2024-09-25)


### Features

* Bump commitlint to v19 ([#12](https://github.com/act-org/eslint-config/issues/12)) ([7b40fbc](https://github.com/act-org/eslint-config/commit/7b40fbc73bd5bcca0fad08e915c7bd0d27a5027b))

# [4.6.0](https://github.com/act-org/eslint-config/compare/v4.5.0...v4.6.0) (2024-09-25)


### Features

* Bump eslint-plugin-jest from 27.9.0 to 28.8.3 ([#15](https://github.com/act-org/eslint-config/issues/15)) ([84692ae](https://github.com/act-org/eslint-config/commit/84692ae9c34a8b4e3895672e6d6537ccb58ee2df))

# [4.5.0](https://github.com/act-org/eslint-config/compare/v4.4.0...v4.5.0) (2024-09-25)


### Features

* Do not require react to be in scope for *.test.tsx files ([2297f2c](https://github.com/act-org/eslint-config/commit/2297f2c820aa1eaedb7900e49b8836a7f14fa8fe))
* Switch default typescript.compilerOptions.jsx to 'react-jsx' ([aa9e5d1](https://github.com/act-org/eslint-config/commit/aa9e5d1c43e213be8614ae36a0ae7708dfb896d0))

# [4.4.0](https://github.com/act-org/eslint-config/compare/v4.3.0...v4.4.0) (2024-09-25)


### Features

* Bump eslint-plugin-new-with-error from 4.0.0 to 5.0.0 ([#16](https://github.com/act-org/eslint-config/issues/16)) ([5839ffb](https://github.com/act-org/eslint-config/commit/5839ffbbb8bcb4120e54f1e4dba47f8c6ff1d2b9))

# [4.3.0](https://github.com/act-org/eslint-config/compare/v4.2.0...v4.3.0) (2024-09-25)


### Features

* No longer require pragmas for prettier to work on a file ([f2f7919](https://github.com/act-org/eslint-config/commit/f2f79199d0318b6ee9bea62f26d72b805060a5c9))

# [4.2.0](https://github.com/act-org/eslint-config/compare/v4.1.1...v4.2.0) (2024-09-25)


### Features

* Added new documentation on release process; test release process ([c74d66c](https://github.com/act-org/eslint-config/commit/c74d66cfbbc01f2ed3b80a498cd78d49a48356ba))

## [4.1.1](https://github.com/act-org/eslint-config/compare/v4.1.0...v4.1.1) (2024-09-25)


### Bug Fixes

* Use husky to validate commit messages match format ([57b3ca5](https://github.com/act-org/eslint-config/commit/57b3ca548edb3aa160eee5817513cb56ae1e163d))

# [4.1.0](https://github.com/act-org/eslint-config/compare/v4.0.0...v4.1.0) (2024-09-25)


### Features

* Transition the project to automated releases using semantic-release ([42f7515](https://github.com/act-org/eslint-config/commit/42f7515315bf990acc56fd762f4f70594c9c777f))

# Changelog

Chronological history of changes to the ESLint config.

## [v3.5.0] - April 10, 2022

* Updated NPM packages to their latest compatible releases.
* Opened up dependency versions with `^`. Dev-dependencies remain pinned.

## [v3.4.2] - February 28, 2022

* Turned off `react/function-component-definition` rule to allow React function
components to be defined using `const` and arrow functions.

## [v3.4.1] - February 8, 2022

* Upgraded `markdownlint-cli` to `0.31.0` to eliminate some audit warnings.
* Upgraded `eslint-plugin-promise` to `6.0.0` to be fully compatible with
ESLint 8+.

## [v3.4.0] - November 24, 2021

* Updated `eslint` to `v8.3.0` and other NPM packages to their latest
compatible releases.
* Removed deprecated `jsxBracketSameLine` option from `prettier.config.js`

## [v3.3.0] - March 19, 2021

* Updated `eslint` to `v7.22.0` and other NPM packages to their latest
compatible releases

## [v3.2.6] - March 5, 2021

* This package is now open source! Available on NPM at `@actinc/eslint-config`
* Updated NPM package dependencies to their latest compatible releases

## [v3.1.0] - February 26, 2021

* No longer specify a [parser](https://prettier.io/docs/en/options.html#parser)
in the Prettier config
* Updated NPM package dependencies to their latest compatible releases

## [v3.0.0] - February 19, 2021

* Added MIT License; added license docblock to all files
* Removed
[`eslint-plugin-immutable`](https://github.com/jhusain/eslint-plugin-immutable)
from the ESLint config
* Updated NPM package dependencies to their latest compatible releases
