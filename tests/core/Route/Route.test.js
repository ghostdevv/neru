import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import Route from '../../../src/core/Route.js';

const routes = suite('routes');

routes('single router method should work', () => {
    const router = new Route();

    router.get(() => {
        return 'works';
    });

    const result = router.methods.get[0][0]();
    assert.is(result, 'works');
});

routes('providing non function throws error', () => {
    const router = new Route();

    try {
        router.get('test');
    } catch (error) {
        if (error.message != 'All middlewear provided should be a function')
            throw new Error('Failed');
    }
});

routes.run();
