import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { normaliseDirectory } from '../../../src/utils/fs';

test('correctly normalise slash depending on the platform', () => {
    const dir = normaliseDirectory('/a\\b/c');
    assert.equal(sep == '\\' ? '/a/b/c' : '/a\\b/c', dir);
});

test.run();
