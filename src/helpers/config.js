import { configent } from 'configent';
import defaults from '../config.defaults.js';

export const createConfig = (inp) =>
    configent(defaults, inp, {
        name: 'neru',
    });
