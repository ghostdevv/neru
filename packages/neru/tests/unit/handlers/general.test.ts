import { test } from 'uvu';

import { importRouteHandlers } from '../../../src/handlers/import';

test("imported handlers don't have incorrect properties", async () => {
    const { handlers } = await importRouteHandlers({
        path: 'tests/unit/handlers/general.mjs',
        restrictAllHandler: false,
    });

    if (handlers.get('test' as any)) {
        throw Error('Has test property');
    }
});

test.run();
