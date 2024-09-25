/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@testing-library/dom';
import '@testing-library/jest-dom';

configure({
  computedStyleSupportsPseudoElements: true,
});
