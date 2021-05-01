import { test } from 'uvu';
import * as assert from 'uvu/assert';

import defaultConfig from '../../src/config.defaults.js';
import { createConfig } from '../../src/helpers/config.js';

test('is function', () => {
    assert.type(createConfig, 'function');
});

test('works', () => {
    assert.equal(createConfig({ routesDir: 'abc' }), {
        ...defaultConfig,
        routesDir: 'abc',
    });

    assert.equal(createConfig(), defaultConfig);
});

test.run();
