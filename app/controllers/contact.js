var path          = require('path');
var nodemailer    = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var config        = require('config');
var Contact       = require('../models/contact');
var mailerConfig  = config.get('mailer');
var appConfig     = config.get('app');

exports.postContact = function(req, res) {
    var contactData = {
        name:    req.body.name,
        email:   req.body.email,
        subject: req.body.subject,
        message: req.body.message
    };

    Contact.create(contactData, {
        success: function(c){
            sendMail(c);
        },
        error: function(err){
            return res.status(500).send(err);
        }
    });

    function sendMail(contact) {
        var transporter = nodemailer.createTransport({
            host: mailerConfig.host,
            port: mailerConfig.port,
            secure: true,
            auth: {
                user: mailerConfig.auth.user,
                pass: mailerConfig.auth.password
            }
        });

        var sendContactNotification = transporter.templateSender(
            new EmailTemplate(path.join(__dirname, '../views/email/contact')), {
                from: mailerConfig.sender
            }
        );

        sendContactNotification({
            to: appConfig.email,
            subject: 'New message received from ' + contact.name
        }, {
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message
        }, function(err, info){
            if(err) {
                console.log('An error has occurred: ' + err);
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