import { route } from '../../src/index';

export const ALL = route({
    handler() {
        return {
            message: 'Ok',
        };
    },
});

export const GET = route({
    handler() {
        return {
            message: 'Ok GET',
        };
    },
});
