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
var minifier = require('node-minify');
var path = require('path');
var fs = require('fs');

/**
 * Module exports.
 */
module.exports = function(app, express){
    app.use(compression());
    minifier.minify({
        compressor: 'uglifyjs',
        input: [
            'public/js/*.js',
            'public/js/controllers/*.js',
            'public/js/services/*.js',
            'public/js/filters/*.js',
            'public/js/lib/*.js'
        ],
        output: 'public/js/dist/app.js',
        options: {
            warnings: false,
            mangle: false,
            compress: true
        },
        callback: function(err) {
            console.log('JS assets compiled .... OK');
            if(err) console.log('Error compiling JS assets: ' + err);
        }
    });
    minifier.minify({
        compressor: 'clean-css',
        input: 'public/css/*.css',
        output: 'public/css/dist/app.css',
        options: {
            advanced: true,
            aggressiveMerging: false
        },
        callback: function (err, min) {
            console.log('CSS assets compiled .... OK');
            if(err) console.log('Error compiling JS assets: ' + err);
        }
    });
    app.use(express.static(path.join(__dirname, '../public')));
};




