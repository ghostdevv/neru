function get(req, res) {
    res.end('/ (get)');
}

function post(req, res) {
    res.end('/ (post)');
}

module.exports = {
    get,
    post,
};
