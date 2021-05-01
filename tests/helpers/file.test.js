import { test } from 'uvu';
import { type, is } from 'uvu/assert';

import { clean } from '../../src/helpers/file.js';

test('clean', () => {
    type(clean, 'function');

    is(clean('\\a\\b.js'), '/a/b.js');
    is(clean('\\a/b.js'), '/a/b.js');
});

test.run();
