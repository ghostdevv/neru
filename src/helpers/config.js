import { configent } from 'configent';
import defaults from '../config.defaults.js';

export default (inp) =>
    configent(defaults, inp, {
        name: 'neru',
    });
