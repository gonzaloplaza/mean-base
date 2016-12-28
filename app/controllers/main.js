var config = require('config');

exports.getApiIndex = function(req, res) {
    res.sendfile('./public/views/api/index.html');
};

exports.getStatus = function(req, res) {
    res.status(200).jsonp({
        'success': true,
        'message': 'API response received'
    });
};

exports.getConfig = function(req, res) {
    res.status(200).jsonp({
        'success': true,
        'data': config.app
    });
};

