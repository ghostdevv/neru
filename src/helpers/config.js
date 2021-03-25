const { configent } = require('configent');
const defaults = require('../../config.defaults');

module.exports = (inp) =>
    configent(defaults, inp, {
        name: 'neru',
    });
