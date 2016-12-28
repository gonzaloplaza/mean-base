var mongoose     = require('mongoose');
var nodemailer   = require('nodemailer');
var config       = require('config');
var ContactModel = require('../models/contact');
var Contact      = mongoose.model('Contact');
var mailer       = config.get('mailer');
var app          = config.get('app');

exports.postContact = function(req, res) {
    var contact = new Contact({
        name:    req.body.name,
        email:   req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    contact.save(function(err) {
        if(err) return res.status(500).send(err.message);
        sendMail(contact);
    });

    function sendMail(contact) {
        var transporter = nodemailer.createTransport({
            host: mailer.host,
            port: mailer.port,
            secure: true,
            auth: {
                user: mailer.auth.user,
                pass: mailer.auth.password
            }
        });

        //@TODO: Use templating https://nodemailer.com/2-0-0-beta/templating/
        var contactEmailTemplate = '<p>Hello, you have received a new message from ' + '<strong>{{name}} ({{email}})</strong></p>' +
            '<br />' +
            '<strong>Subject: </strong> {{subject}}' +
            '<br />' +
            '<strong>Message: </strong> {{message}}';

        var sendContactMail = transporter.templateSender({
            subject: 'New message received from {{name}}',
            text: 'Hello, you have received a new message from {{name}} : {{email}}: {{message}}',
            html: contactEmailTemplate
        }, {
            from: mailer.sender
        });

        sendContactMail({
            to: app.email
        }, {
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message
        }, function(err, info){
            if(err) {
                console.log('Error' + err);
                return res.status(500).send(err);
            } else{
                res.status(200).jsonp({
                    "success": true,
                    "data": contact
                });
                console.log('Message sent: ' + info.response);
            }
        });
    }
};