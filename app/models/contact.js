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
    name:    { type: String, required: true },
    email:   { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date:    { type: Date, default: Date.now }
});

var Contact = mongoose.model('Contact', contactSchema);

function createContact(contact, callbacks){
    var c = new Contact({
        name:    contact.name,
        email:   contact.email,
        subject: contact.subject,
        message: contact.message
    });

    c.save(function(err) {
        if(err) {
            callbacks.error(err);
        } else {
            callbacks.success(c);
        }
    });
}

function deleteContact(id, callbacks){
    return Contact.findById(id, function (err, c) {
        if (!err) {
            return c.remove(function (err) {
                if (!err) {
                    callbacks.success(c);
                } else {
                    callbacks.error(err);
                }
            });
        } else {
            callbacks.error(err);
        }
    });
}

module.exports.create = createContact;
module.exports.delete = deleteContact;
