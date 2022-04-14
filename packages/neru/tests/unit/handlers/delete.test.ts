import assert from 'assert';
import { test } from 'uvu';

import { importHandlers } from '../../../src/handlers/import';

test('imported methods with del contain delete property', async () => {
    const methods = await importHandlers('tests/unit/handlers/delete.mjs');

    assert.ok(methods.delete, 'Has delete property');
});

test('imported methods with del do not have a del property', async () => {
    const methods = await importHandlers('tests/unit/handlers/delete.mjs');

    if (methods['del']) throw Error('Has del property');
});

test.run();