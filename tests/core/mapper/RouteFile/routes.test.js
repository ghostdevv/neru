import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import RouteFile from '../../../../src/core/mapper/RouteFile.js';
import File from '../../../../src/core/mapper/File.js';

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
