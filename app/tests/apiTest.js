var expect = require('chai').expect;
var request = require('request');
var server = require('../../bin/www');
var port = server.port;
var endpoint = "http://localhost:"+port+"/api/v1";

describe('ApiTest', function() {
    it('should get status 200', function() {
        request(endpoint+"/status", function(error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('should get 404', function() {
        request(endpoint+"/dummy-route", function(error, response) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});