import assert from 'assert';
import { test } from 'uvu';

import { importRouteHandlers } from '../../../src/handlers/import';

test('Has all handler', async () => {
    const { all } = await importRouteHandlers('tests/unit/handlers/all.mjs');
    assert.ok(all, 'Has ALL handler');
});

test('All handler is the only handler allowed in file', async () => {
    try {
        await importRouteHandlers('tests/unit/handlers/all2.mjs');
        throw new Error('Should have errored because all handler must be only one');
    } catch {}
});

test.run();
