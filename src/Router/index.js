const Router = require('./Router.js');
const config = require('../helpers/config.js');
const express = require('express');
const fs = require('fs');
const path = require('path');

module.exports = (options = {}) => {
    const cnf = config(options);

    if (!fs.existsSync(path.resolve(cnf.routesDir)))
        throw new Error(
            `The given routes dir ( ${cnf.routesDir} ) was unable to be found`,
        );

    const server = express(options);
    const router = new Router(server, cnf);

    return router;
};
