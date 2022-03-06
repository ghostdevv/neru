import { join, dirname, normalize, sep } from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';
import { test } from 'uvu';

import { readFiles } from '../../../src/utils/fs';

const __dirname = normalize(dirname(fileURLToPath(import.meta.url)));
const testfiles = join(__dirname, './testfiles');
const rawFiles = readFiles(testfiles);

const files = new Set(rawFiles.map((f) => f.replace(__dirname, '')));

/**
 * * We do this so that we can check rawFiles returns paths with system correct separator
 */
const $ = (path: string) => path.replace(/\$/g, sep);

test('files are correctly read', async () => {
    const p1 = $('$testfiles$index.js');
    const p2 = $('$testfiles$nested$more$hello.js');
    const p3 = $('$testfiles$nested$more$world.js');

    assert.ok(files.has(p1), `Doesn't have ${p1}`);
    assert.ok(files.has(p2), `Doesn't have ${p2}`);
    assert.ok(files.has(p3), `Doesn't have ${p3}`);
});

test.run();
