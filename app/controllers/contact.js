var mongoose      = require('mongoose');
var path          = require('path');
var nodemailer    = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var config        = require('config');
var ContactModel  = require('../models/contact');
var Contact       = mongoose.model('Contact');
var mailer        = config.get('mailer');
var app           = config.get('app');

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
        //console.log('dir: ' + path.join(__dirname, '../../views/email/contact'));
        var transporter = nodemailer.createTransport({
            host: mailer.host,
            port: mailer.port,
            secure: true,
            auth: {
                user: mailer.auth.user,
                pass: mailer.auth.password
            }
        });

        var sendContactNotification = transporter.templateSender(
            new EmailTemplate(path.join(__dirname, '../views/email/contact')), {
                from: mailer.sender
            }
        );

        sendContactNotification({
            to: app.email,
            subject: 'New message received from ' + contact.name
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