import { resolve } from 'path';
import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { normaliseDirectory, normaliseSlashes } from '../../../src/utils/fs';

test('correctly normalise slash depending on the platform', () => {
    const dir = normaliseDirectory('/a\\b/c');

    assert.equal(
        dir,
        normaliseSlashes(resolve(sep == '\\' ? '/a/b/c' : '/a\\b/c')),
    );
});

test.run();
