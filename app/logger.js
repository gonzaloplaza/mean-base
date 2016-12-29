/*!
 * logger
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var logType = 'combined';

/**
 * Module exports.
 */
module.exports = function(app) {
    if (app.get('env') == 'production') {logType = 'common';}
    app.use(morgan(logType, {
        stream: fs.createWriteStream(path.join(__dirname, '../var/logs/error.log'), {
            flags: 'a'
        }),
        skip: function (req, res) {
            return res.statusCode < 400
        }
    }));
};