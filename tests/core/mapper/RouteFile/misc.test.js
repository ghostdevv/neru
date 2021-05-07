import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import RouteFile from '../../../../src/core/mapper/RouteFile.js';
import File from '../../../../src/core/mapper/File.js';

const misc = suite('misc');

misc("don't replace all occuences of routesdir", () => {
    const f = new File(
        '/home/ghost/Desktop/project/src/routes/src/routes/index.js',
    );

    const r = new RouteFile(f, 'src/routes');

    assert.is(r.route, '/src/routes/');
});

misc.run();
