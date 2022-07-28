import { route } from '../../src/index';

export const get = route({
    handler() {
        return {
            message: 'Ok',
        };
    },
});
