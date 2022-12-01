import { route } from '../../src/index';

export const ALL = route((req, res) => {
    res.json({
        message: 'Ok',
    });
});

export const GET = route((req, res) => {
    res.json({
        message: 'Ok GET',
    });
});
