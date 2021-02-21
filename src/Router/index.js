const Router = require('./Router.js');
const express = require('express');

module.exports = (options = {}) => {
    const server = express(options);
    const router = new Router(server, options);

    return router;
};
