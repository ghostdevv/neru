const readdir = require('recursive-readdir-async');
const path = require('path');

module.exports = (routesDir) => readdir.list(path.resolve(routesDir));
