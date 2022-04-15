import { test } from 'uvu';

import { importRouteHandlers } from '../../../src/handlers/import';

test("imported handlers don't have incorrect properties", async () => {
    const methods = await importRouteHandlers('tests/unit/handlers/general.mjs');
    if (methods['test']) throw Error('Has test property');
});

test.run();
