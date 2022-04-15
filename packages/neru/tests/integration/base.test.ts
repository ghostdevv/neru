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
        base: '/api',
    });

    console.log(server);

    assert.ok(server.has('/api'), "Doesn't have '/api' route");

    assert.ok(
        server.has('/api/hello/world'),
        "Doesn't have '/api/hello/world' route",
    );
});

test.run();
