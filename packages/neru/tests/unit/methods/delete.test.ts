import { createLogger } from 'consolite';
import assert from 'assert';
import { test } from 'uvu';

import { importMethods } from '../../../src/methods/import';

const logger = createLogger('[TEST]');

test('imported methods with del contain delete property', async () => {
    const methods = await importMethods(
        'tests/unit/methods/delete.mjs',
        logger,
    );

    assert.ok(methods.delete, 'Has delete property');
});

test('imported methods with del do not have a del property', async () => {
    const methods = await importMethods(
        'tests/unit/methods/delete.mjs',
        logger,
    );

    if (methods['del']) throw Error('Has del property');
});

test.run();
