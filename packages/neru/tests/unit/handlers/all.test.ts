import assert from 'assert';
import { test } from 'uvu';

import { importRouteHandlers } from '../../../src/handlers/import';

test('Has all handler', async () => {
    const { all } = await importRouteHandlers({
        path: 'tests/unit/handlers/all.mjs',
        restrictAllHandler: false,
    });

    assert.ok(all, 'Has ALL handler');
});

test('All handler is the only handler allowed in file when true', async () => {
    try {
        await importRouteHandlers({
            path: 'tests/unit/handlers/all2.mjs',
            restrictAllHandler: true,
        });

        throw new Error('Should have errored because all handler must be only one');
    } catch {}
});

test('All handler is NOT the only handler allowed in file when false', async () => {
    try {
        await importRouteHandlers({
            path: 'tests/unit/handlers/all2.mjs',
            restrictAllHandler: false,
        });
    } catch {
        throw new Error('Should have not errored');
    }
});

test.run();
