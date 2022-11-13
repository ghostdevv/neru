import { route } from '../../src/index';

export const GET = route({
    handler() {
        return {
            message: 'Ok',
        };
    },
});
