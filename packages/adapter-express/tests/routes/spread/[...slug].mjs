import { route } from '../../../src/index';

export const GET = route((req, res) => {
    res.json({
        message: req.params.slug,
    });
});
