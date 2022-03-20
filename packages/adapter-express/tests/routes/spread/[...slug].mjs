import { route } from '../../../src/index';

export const get = route((req, res) => {
    res.json({
        message: req.params.slug,
    });
});
