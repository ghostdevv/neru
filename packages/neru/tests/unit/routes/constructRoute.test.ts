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

test('resolves complex route correctly', () => {
    const route = constructRoute({
        path: '/home/ghost/routes/test/[id]/[...slug].js',
        directory: '/home/ghost/routes',
        adapter,
    });

    assert.equal(route, '/test/(id)/{slug}');
});

test.run();
