import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { RouteFile, RouteDir } from '../../src/index';

// TODO look into if route file is the correct and simplest solution

test('correctly generates a routePath', () => {
    const dir = new RouteDir('/home/ghost/routes/', false);
    const file = new RouteFile('hello.js', dir);

    assert.equal(file.routePath, 'hello');
});

test('correctly removes the base directory', () => {
    const dir = new RouteDir('/home/ghost/routes/', false);
    const file = new RouteFile('/home/ghost/routes/hello.js', dir);

    assert.equal(file.routePath, '/hello');
});

test("doesn't remove more than needed", () => {
    const dir = new RouteDir('/home/ghost/routes/', false);

    const file = new RouteFile(
        '/home/ghost/routes/home/ghost/routes/hello.js',
        dir,
    );

    assert.equal(file.routePath, '/home/ghost/routes/hello');
});

test.run();
