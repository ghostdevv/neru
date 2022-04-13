import { join, dirname, normalize, sep } from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';
import { test } from 'uvu';

import { readDirRecursive } from '../../../src/utils/fs';

const __dirname = normalize(dirname(fileURLToPath(import.meta.url)));
const testfiles = join(__dirname, './testfiles');

/**
 * * We do this so that we can check rawFiles returns paths with system correct separator
 */
const $ = (path: string) => path.replace(/\$/g, sep);

test('files are correctly read', async () => {
    const files = new Set(
        readDirRecursive(testfiles).map((f) => f.replace(__dirname, '')),
    );

    const p1 = $('$testfiles$index.js');
    const p2 = $('$testfiles$hello$test.js');
    const p3 = $('$testfiles$nested$more$hello.js');
    const p4 = $('$testfiles$nested$more$world.js');

    assert.ok(files.has(p1), `Doesn't have ${p1}`);
    assert.ok(files.has(p2), `Doesn't have ${p2}`);
    assert.ok(files.has(p3), `Doesn't have ${p3}`);
    assert.ok(files.has(p4), `Doesn't have ${p4}`);
});

test('ignore works', async () => {
    const files = new Set(
        readDirRecursive(testfiles, /hello/i).map((f) =>
            f.replace(__dirname, ''),
        ),
    );

    const p1 = $('$testfiles$index.js');
    const p2 = $('$testfiles$nested$more$world.js');

    const e1 = $('$testfiles$hello$test.js');
    const e2 = $('$testfiles$nested$more$hello.js');

    assert.ok(files.has(p2), `Doesn't have ${p1}`);
    assert.ok(files.has(p2), `Doesn't have ${p2}`);

    assert.equal(files.has(e1), false, `Should not have ${e1}`);
    assert.equal(files.has(e2), false, `Should not have ${e2}`);
});

test.run();
