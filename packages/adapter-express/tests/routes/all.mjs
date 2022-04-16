import { route } from '../../src/index';

export const all = route((req, res) => {
    res.json({
        message: 'Ok',
    });
});
