import assert from 'assert';
import { test } from 'uvu';

import { formatRoutePath } from '../../../src/routes/utils';
import type { Adapter } from '../../../src/index';

const adapter: Adapter<{}, {}> = {
    name: 'test',
    addRoute: () => {},

    formatParamRoute: (slug) => `(${slug})`,
    formatSpreadRoute: (slug) => `{${slug}}`,
};

test('formats a param route', () => {
    const route = formatRoutePath('/test/[id]', adapter);
    assert.equal(route, '/test/(id)');
});

test('formats a spread route', () => {
    const route = formatRoutePath('/test/[...id]', adapter);
    assert.equal(route, '/test/{id}');
});

test('formats multiple param routes', () => {
    const route = formatRoutePath('/test/[id]/[name]', adapter);
    assert.equal(route, '/test/(id)/(name)');
});

test('format a route with spread and param routes', () => {
    const route = formatRoutePath('/test/[...id]/[name]', adapter);
    assert.equal(route, '/test/{id}/(name)');
});

test.run();
