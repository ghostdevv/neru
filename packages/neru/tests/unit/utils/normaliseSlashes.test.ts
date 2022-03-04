import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { normaliseSlashes } from '../../../src/utils/fs';

test('correctly normalise slash depending on the platform', () => {
    const dir = normaliseSlashes('/a\\b');

    assert.equal(dir, sep == '\\' ? '/a/b' : '/a\\b');

    /**
     * * On windows folders can't contain a slash, but on linux like systems they can so we only assume on windows
     * * that all back slash can be converted to forward but on linux we do not make this assumption
     */
});

test.run();
