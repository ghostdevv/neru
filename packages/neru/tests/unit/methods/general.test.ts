import { createLogger } from 'consolite';
import assert from 'assert';
import { test } from 'uvu';

import { importMethods } from '../../../src/methods/import';

const logger = createLogger('[TEST]');

test("imported methods don't have incorrect properties", async () => {
    const methods = await importMethods(
        'tests/unit/methods/general.mjs',
        logger,
    );

    if (methods['test']) throw Error('Has test property');
});

test.run();
