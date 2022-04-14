import assert from 'assert';
import { test } from 'uvu';

import { Route } from '../../../src/routes/Route';
import type { Adapter } from '../../../src/index';

const adapter: Adapter<{}, {}> = {
    name: 'test',
    addHandler: () => {},

    formatParamRoute: (slug) => `(${slug})`,
    formatSpreadRoute: (slug) => `{${slug}}`,
};

test('resolves complex route correctly', () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test/[id]/[...slug].js',
        routesDirectory: '/home/ghost/routes',
        adapter,
        methods: {},
    });

    assert.equal(route.route, '/test/(id)/{slug}');
});

test('has expected properties', () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test.js',
        routesDirectory: '/home/ghost/routes',
        adapter,
        methods: {},
    });

    assert.equal(route.filePath, '/home/ghost/routes/test.js');
    assert.equal(route.routesDirectory, '/home/ghost/routes');
    assert.deepEqual(route.methods, {});
});

test.run();
