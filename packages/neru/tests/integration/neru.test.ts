import { resolve } from 'path';
import assert from 'assert';
import { test } from 'uvu';

import { adapter, createMockServer } from './mock';
import { neru } from '../../src/index';

test('picks up routes correctly', async () => {
    const server = createMockServer();
    await neru({ adapter, server, routes: 'tests/integration/routes' });

    assert.ok(server.has('/'));
    assert.ok(server.has('/hello/world'));
});

test.run();
