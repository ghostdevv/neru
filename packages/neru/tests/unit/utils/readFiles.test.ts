import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';
import { test } from 'uvu';

import { readFiles } from '../../../src/utils/fs';

const testfiles = join(dirname(fileURLToPath(import.meta.url)), './testfiles');
const rawFiles = readFiles(testfiles);

const files = new Set(
    rawFiles.map((f) => f.replace(dirname(fileURLToPath(import.meta.url)), '')),
);

test('files are correctly read', async () => {
    assert.ok(files.has('/testfiles/index.js'));
    assert.ok(files.has('/testfiles/nested/more/hello.js'));
    assert.ok(files.has('/testfiles/nested/more/world.js'));
});

test.run();
