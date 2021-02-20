const readdir = require('recursive-readdir-async');
const path = require('path');

module.exports = () => readdir.list(path.resolve('routes'));
