import { join, dirname, normalize } from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';
import { test } from 'uvu';

import { readFiles } from '../../../src/utils/fs';

const __dirname = normalize(dirname(fileURLToPath(import.meta.url)));
const testfiles = join(__dirname, './testfiles');
const rawFiles = readFiles(testfiles);

const files = new Set(rawFiles.map((f) => f.replace(__dirname, '')));

test('files are correctly read', async () => {
    assert.ok(
        files.has('/testfiles/index.js'),
        "Doesn't have '/testfiles/index.js'",
    );

    assert.ok(
        files.has('/testfiles/nested/more/hello.js'),
        "Doesn't have '/testfiles/nested/more/hello.js'",
    );

    assert.ok(
        files.has('/testfiles/nested/more/world.js'),
        "Doesn't have '/testfiles/nested/more/world.js'",
    );
});

test.run();
