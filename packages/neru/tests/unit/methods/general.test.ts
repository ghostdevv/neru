import { test } from 'uvu';

import { importMethods } from '../../../src/methods/import';

test("imported methods don't have incorrect properties", async () => {
    const methods = await importMethods('tests/unit/methods/general.mjs');
    if (methods['test']) throw Error('Has test property');
});

test.run();
