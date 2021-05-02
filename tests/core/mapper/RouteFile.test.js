import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import RouteFile from '../../../src/core/mapper/RouteFile.js';
import File from '../../../src/core/mapper/File.js';

const [f1, f2, f3, f4] = [
    new File('/home/ghost/Desktop/project/src/routes/index.js'),
    new File('/home/ghost/Desktop/project/src/routes/foo.js'),
    new File('/home/ghost/Desktop/project/src/routes/bar/index.js'),
    new File('/home/ghost/Desktop/project/src/routes/baz/foo/index.js'),
];

const [r1, r2, r3, r4] = [
    new RouteFile(f1, 'src/routes'),
    new RouteFile(f2, 'src/routes'),
    new RouteFile(f3, 'src/routes'),
    new RouteFile(f4, 'src/routes'),
];

const routes = suite('routes');

routes('being parsed correctly', () => {
    assert.is(r1.route, '/');
    assert.is(r2.route, '/foo');
    assert.is(r3.route, '/bar/');
    assert.is(r4.route, '/baz/foo/');
});

routes('express paths are being parsed correctly', () => {
    assert.is(r1.expressPath, '/');
    assert.is(r2.expressPath, '/foo');
    assert.is(r3.expressPath, '/bar/');
    assert.is(r4.expressPath, '/baz/foo/');
});

routes.run();

const [f5, f6, f7, f8] = [
    new File('/home/ghost/Desktop/project/src/routes/[slug].js'),
    new File('/home/ghost/Desktop/project/src/routes/foo/[slug].js'),
    new File(
        '/home/ghost/Desktop/project/src/routes/bar/[slug]/[...spread].js',
    ),
    new File('/home/ghost/Desktop/project/src/routes/baz/foo/[...spread].js'),
];

const [r5, r6, r7, r8] = [
    new RouteFile(f5, 'src/routes'),
    new RouteFile(f6, 'src/routes'),
    new RouteFile(f7, 'src/routes'),
    new RouteFile(f8, 'src/routes'),
];

const dynamic = suite('dynamic routes');

dynamic('routes are being parsed correctly', () => {
    assert.is(r5.route, '/[slug]');
    assert.is(r6.route, '/foo/[slug]');
    assert.is(r7.route, '/bar/[slug]/[...spread]');
    assert.is(r8.route, '/baz/foo/[...spread]');
});

dynamic('routes express paths are being parsed correctly', () => {
    assert.is(r5.expressPath, '/:slug');
    assert.is(r6.expressPath, '/foo/:slug');
    assert.is(r7.expressPath, '/bar/:slug/:spread([^]+)');
    assert.is(r8.expressPath, '/baz/foo/:spread([^]+)');
});

dynamic.run();
