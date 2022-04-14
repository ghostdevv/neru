import assert from 'assert';
import { test } from 'uvu';

import { Route } from '../../../src/routes/Route';
import type { Adapter } from '../../../src/index';

const adapter: Adapter<{}, {}> = {
    name: 'test',
    addRoute: () => {},

    formatParamRoute: (slug) => `(${slug})`,
    formatSpreadRoute: (slug) => `{${slug}}`,
};

test('adds a base correctly', () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test/[id]/[...slug].js',
        routesDirectory: '/home/ghost/routes',
        base: '/api',
        adapter,
        methods: {},
    });

    assert.equal(route.route, '/api/test/(id)/{slug}');
});

test('fixes wonky base', () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test/[id]/[...slug].js',
        routesDirectory: '/home/ghost/routes',
        base: 'api/',
        adapter,
        methods: {},
    });

    assert.equal(route.route, '/api/test/(id)/{slug}');
});

test("doesn't format base", () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test/[id]/[...slug].js',
        routesDirectory: '/home/ghost/routes',
        base: '/[...a]/index',
        adapter,
        methods: {},
    });

    assert.equal(route.route, '/[...a]/index/test/(id)/{slug}');
});

test("doesn't break on / base", () => {
    const route = new Route({
        filePath: '/home/ghost/routes/test/[id]/[...slug].js',
        routesDirectory: '/home/ghost/routes',
        base: '/',
        adapter,
        methods: {},
    });

    console.log({ route });

    assert.equal(route.route, '/test/(id)/{slug}');
});

test.run();
