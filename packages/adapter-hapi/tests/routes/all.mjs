import { route } from '../../src/index';

export const all = route({
    handler() {
        return {
            message: 'Ok',
        };
    },
});
