import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { RouteDir } from '../../src/index';

test('correctly normalise slash depending on the platform', () => {
    const dir = new RouteDir('/a\\b', false);

    assert.equal(dir.path, sep == '\\' ? '/a/b' : '/a\\b');

    /**
     * * On windows folders can't contain a slash, but on linux like systems they can so we only assume on windows
     * * that all back slash can be converted to forward but on linux we do not make this assumption
     */
});

test.run();
