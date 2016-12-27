var express = require('express');
var config  = require('config');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('welcome to the Application API Endpoint');
});

router.get('/config', function(req, res) {
    res.json({
        'success': true,
        'data': config.app
    });
});

router.get('/status', function(req, res) {
  res.json({
  	'success': true,
  	'message': 'API response received successfully'
  });
});

module.exports = router;
