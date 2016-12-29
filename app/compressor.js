/*!
 * compressor
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var compression = require('compression');
var minify = require('express-minify');
var path = require('path');
var fs = require('fs');

/**
 * Module exports.
 */
module.exports = function(app, express){
    app.use(compression());
    app.use(function(req, res, next)
    {
        res._uglifyMangle = false;
        next();
    });
    app.use(minify({
        cache: path.join(__dirname, '../var/cache')
    }));
    app.use(express.static(path.join(__dirname, '../public')));
};



