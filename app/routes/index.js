var express = require('express');
var router = express.Router();

//Starting route
router.get('/', function(req, res) {
  res.sendfile('./public/index.html'); 
});

module.exports = router;
