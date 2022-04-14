import { test } from 'uvu';

import { importHandlers } from '../../../src/handlers/import';

test("imported methods don't have incorrect properties", async () => {
    const methods = await importHandlers('tests/unit/handlers/general.mjs');
    if (methods['test']) throw Error('Has test property');
});

test.run();
