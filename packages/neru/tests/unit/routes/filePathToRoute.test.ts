import assert from 'assert';
import { test } from 'uvu';
import { sep } from 'path';

import { filePathToRoute } from '../../../src/routes/utils';

test('correctly resolves index file name', () => {
    const routeString = filePathToRoute('/hello/world/index', '');
    assert.equal(routeString, '/hello/world');
});

test("doesn't remove valid index", () => {
    const routeString = filePathToRoute('/hello/world/index', '');
    assert.equal(routeString, '/hello/world');
});

test('correctly removes the base directory', () => {
    const route = filePathToRoute(
        '/home/ghost/routes/hello.js',
        '/home/ghost/routes/',
    );

    assert.equal(route, '/hello');
});

test("doesn't remove more than needed", () => {
    const route = filePathToRoute(
        '/home/ghost/routes/home/ghost/routes/hello.js',
        '/home/ghost/routes/',
    );

    assert.equal(route, '/home/ghost/routes/hello');
});

test('removes trailing slash', () => {
    const route = filePathToRoute('/test/', '');
    assert.equal(route, '/test');
});

test('removes file extension', () => {
    const route = filePathToRoute('/test.js', '');
    assert.equal(route, '/test');
});

test('adds a leading slash if not present', () => {
    const route = filePathToRoute('test', '');
    assert.equal(route, '/test');
});

// Windows Test
test('normalises slashes', () => {
    const route = filePathToRoute(sep == '\\' ? '\\a\\b\\c' : '/a/b/c', '');
    assert.equal(route, '/a/b/c');
});

// Windows Test
test('normalises directory', () => {
    const route = filePathToRoute(
        sep == '\\' ? '\\a\\b\\c' : '/a/b/c',
        sep == '\\' ? '\\a\\b' : '/a/b',
    );

    assert.equal(route, '/c');
});

test.run();
