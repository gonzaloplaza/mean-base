var expect = require('chai').expect;
var request = require('request');
var app = require('../app');
var Contact  = require('../models/contact');

describe('DbTest', function() {
    var testContactData = {
        name:    'Test name',
        email:   'test@email.com',
        subject: 'this is a test subject',
        message: 'this is a test message text'
    };

    var testContactDataWrong = {
        name:    'Test name',
        email:   'test@email.com',
        subject: 'this is a test subject'
    };

    after(function(done){
        this.timeout(5000);
        Contact.delete(testContactData._id ,{
            success: function(){
                done();
            },
            error: function(err){
            }
        });
    });

    it('should save contact', function(done) {
        Contact.create(testContactData, {
            success: function(c){
                expect(c.name).to.eql(testContactData.name);
                expect(c.email).to.eql(testContactData.email);
                expect(c.subject).to.eql(testContactData.subject);
                expect(c.message).to.eql(testContactData.message);
                testContactData._id = c._id;
                done();
            },
            error: function(err){
                expect(err).to.be.null;
                done(err);
            }
        });
    });

    it('should not save contact with empty value', function(done) {
        Contact.create(testContactDataWrong, {
            success: function(c) {

            },
            error: function(err){
                expect(err).to.not.be.null;
                done();
            }
        });
    });
});