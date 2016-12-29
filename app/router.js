/*!
 * router
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var path = require('path');
var index = require('./routes/index');
var api = require('./routes/api');

/**
 * Module exports.
 */
module.exports = function(app){
    app.use('/', index);
    app.use('/api/v1', api);

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        var options = {
            root: path.join(__dirname, '../public'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        console.log(err.status + ' - ' + err.message);
        res.status(err.status || 500).sendFile('404.html', options);
    });
};
