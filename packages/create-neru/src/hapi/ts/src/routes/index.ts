import { route } from '@nerujs/hapi';

export const get = route({
    handler() {
        return 'Hello world!';
    },
});
