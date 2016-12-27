var mongoose   = require('mongoose');
var nodemailer = require('nodemailer');
require('../models/contact');
var Contact     = mongoose.model('Contact');

exports.postContact = function(req, res) {
    var contact = new Contact({
        name:    req.body.name,
        email:   req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    contact.save(function(err, contact) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp({
            "success": true,
            "data": contact
        });
    });

    //@TODO: Configure NodeMailer to send email message
    //Check docs: https://nodemailer.com/2-0-0-beta/setup-smtp/
};