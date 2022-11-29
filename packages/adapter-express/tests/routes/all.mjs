import { route } from '../../src/index';

export const ALL = route((req, res) => {
    res.json({
        message: 'Ok',
    });
});
