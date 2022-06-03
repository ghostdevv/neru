import assert from 'assert';
import { test } from 'uvu';

import { constructRoute } from '../../../src/routes/routes';
import type { Adapter } from '../../../src/index';

const adapter: Adapter<{}, {}> = {
    name: 'test',
    addHandler: () => {},

    formatParamRoute: (slug) => `(${slug})`,
    formatSpreadRoute: (slug) => `{${slug}}`,
};

test('adds a base correctly', () => {
    const { route } = constructRoute({
        path: '/home/ghost/routes/test/[id]/[...slug].js',
        directory: '/home/ghost/routes',
        base: '/api',
        adapter,
    });

    assert.equal(route, '/api/test/(id)/{slug}');
});

test('fixes wonky base', () => {
    const { route } = constructRoute({
        path: '/home/ghost/routes/test/[id]/[...slug].js',
        directory: '/home/ghost/routes',
        base: 'api/',
        adapter,
    });

    assert.equal(route, '/api/test/(id)/{slug}');
});

test("doesn't format base", () => {
    const { route } = constructRoute({
        path: '/home/ghost/routes/test/[id]/[...slug].js',
        directory: '/home/ghost/routes',
        base: '/[...a]/index',
        adapter,
    });

    assert.equal(route, '/[...a]/index/test/(id)/{slug}');
});

test("doesn't break on / base", () => {
    const { route } = constructRoute({
        path: '/home/ghost/routes/test/[id]/[...slug].js',
        directory: '/home/ghost/routes',
        base: '/',
        adapter,
    });

    assert.equal(route, '/test/(id)/{slug}');
});

test("doesn't break on root", () => {
    const { route } = constructRoute({
        path: '/home/ghost/routes/',
        directory: '/home/ghost/routes',
        base: '/api',
        adapter,
    });

    assert.equal(route, '/api');
});

test.run();
