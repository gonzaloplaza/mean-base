/*!
 * contact model
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var contactSchema = new Schema({
    name:    { type: String },
    email:   { type: String },
    subject: { type: String },
    message: { type: String },
    date:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
