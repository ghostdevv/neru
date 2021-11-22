import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { RouteDir } from '../../src/index';

const inverseSeperator = sep == '/' ? '\\' : '/';

test('correctly formats a wonky path', () => {
    const path = '\\home/ghost/Desktop/hello.js\\routes';
    const dir = new RouteDir(path, false);

    assert.equal(dir.path, '/home/ghost/Desktop/hello.js/routes');
});

// Should be moved to RouteFile testing

// test('don\'t assume system incorrect slash is a seperator', () => {
//     const path = `${sep}/a${inverseSeperator}/b`;
//     const dir = new RouteDir(path);

//     assert.equal(dir.path, path);
// })

test.run();
