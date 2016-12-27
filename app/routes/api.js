var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('welcome to the Application API Endpoint');
});

router.get('/status', function(req, res, next) {
  res.json({
  	'success': true,
  	'message': 'API response received successfully'
  });
});

module.exports = router;
