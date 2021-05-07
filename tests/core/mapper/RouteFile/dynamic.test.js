import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import RouteFile from '../../../../src/core/mapper/RouteFile.js';
import File from '../../../../src/core/mapper/File.js';

const [f1, f2, f3, f4] = [
    new File('/home/ghost/Desktop/project/src/routes/[slug].js'),
    new File('/home/ghost/Desktop/project/src/routes/foo/[slug].js'),
    new File(
        '/home/ghost/Desktop/project/src/routes/bar/[slug]/[...spread].js',
    ),
    new File('/home/ghost/Desktop/project/src/routes/baz/foo/[...spread].js'),
];

const [r1, r2, r3, r4] = [
    new RouteFile(f1, 'src/routes'),
    new RouteFile(f2, 'src/routes'),
    new RouteFile(f3, 'src/routes'),
    new RouteFile(f4, 'src/routes'),
];

const dynamic = suite('dynamic routes');

dynamic('routes are being parsed correctly', () => {
    assert.is(r1.route, '/[slug]');
    assert.is(r2.route, '/foo/[slug]');
    assert.is(r3.route, '/bar/[slug]/[...spread]');
    assert.is(r4.route, '/baz/foo/[...spread]');
});

dynamic('routes express paths are being parsed correctly', () => {
    assert.is(r1.expressPath, '/:slug');
    assert.is(r2.expressPath, '/foo/:slug');
    assert.is(r3.expressPath, '/bar/:slug/:spread([^]+)');
    assert.is(r4.expressPath, '/baz/foo/:spread([^]+)');
});

dynamic.run();
