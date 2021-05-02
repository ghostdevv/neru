import { test } from 'uvu';
import * as assert from 'uvu/assert';

import File from '../../../src/core/mapper/File.js';

test('expect file to be accurate', () => {
    const f = new File('/home/ghost/Desktop/neru/src/index.js');

    assert.is(f.path, '/home/ghost/Desktop/neru/src/index.js');
    assert.is(f.dir, '/home/ghost/Desktop/neru/src');
    assert.is(f.base, 'index.js');
    assert.is(f.ext, '.js');
    assert.is(f.name, 'index');
});

test('check that it will clean up directories', () => {
    const f = new File('C:\\Users\\GHOST\\Desktop\\neru\\src\\index.js');

    assert.is(f.path, 'C:/Users/GHOST/Desktop/neru/src/index.js');
    assert.is(f.dir, 'C:/Users/GHOST/Desktop/neru/src');
    assert.is(f.base, 'index.js');
    assert.is(f.ext, '.js');
    assert.is(f.name, 'index');
});

test.run();
