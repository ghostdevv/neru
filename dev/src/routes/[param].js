import { route } from '@nerujs/hapi';

export const get = route({
    handler: (req, h) => {
        return `Param: ${req.params.param}`;
    },
});
