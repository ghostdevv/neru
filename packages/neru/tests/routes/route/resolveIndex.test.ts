import assert from 'assert';
import { test } from 'uvu';

import { Route } from '../../../src/index';

test('correctly resolves index file name', () => {
    const routeString = Route.resolveIndex('/hello/world/index');
    assert.equal(routeString, '/hello/world/');
});

test("doesn't remove valid index", () => {
    const routeString = Route.resolveIndex('/hello/world/index/');
    assert.equal(routeString, '/hello/world/index/');
});

test.run();
