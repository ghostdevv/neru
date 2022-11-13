import { test } from 'uvu';

import { importRouteHandlers } from '../../../src/handlers/import';

test("imported handlers don't have incorrect properties", async () => {
    const { handlers } = await importRouteHandlers(
        'tests/unit/handlers/general.mjs',
    );

    if (handlers.get('test')) throw Error('Has test property');
});

test.run();
