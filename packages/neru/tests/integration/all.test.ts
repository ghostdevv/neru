import assert from 'assert';
import { test } from 'uvu';

import { adapter, createMockServer } from './mock';
import { neru } from '../../src/index';

test('picks up routes correctly', async () => {
    const server = createMockServer();

    await neru({
        adapter,
        server,
        routes: 'tests/integration/routes',
    });

    const route = server.get('/all');

    assert.ok(route, 'Route was not found');
    assert.ok(route.all, 'Route did not have all prop');
});

test.run();
