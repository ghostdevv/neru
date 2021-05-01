import { test } from 'uvu';

import methods from '../../src/helpers/methods.js';

test('is array', () => {
    if (!Array.isArray(methods)) throw new TypeError('Expected Array');
});

test.run();
