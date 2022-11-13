import { route } from '../../src/index';

export const ALL = route({
    handler() {
        return {
            message: 'Ok',
        };
    },
});
