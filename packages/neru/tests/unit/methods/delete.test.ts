import assert from 'assert';
import { test } from 'uvu';

import { importMethods } from '../../../src/methods/import';

test('imported methods with del contain delete property', async () => {
    const methods = await importMethods('tests/unit/methods/delete.mjs');

    assert.ok(methods.delete, 'Has delete property');
});

test('imported methods with del do not have a del property', async () => {
    const methods = await importMethods('tests/unit/methods/delete.mjs');

    if (methods['del']) throw Error('Has del property');
});

test.run();
