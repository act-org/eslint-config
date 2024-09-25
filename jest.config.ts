/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable filenames/match-exported */

import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  roots: ['<rootDir>/examples'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },
};

export default config;
