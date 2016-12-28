var express = require('express');
var ContactController = require('../controllers/contact');
var MainController    = require('../controllers/main');
var router = express.Router();

//API Endpoint route
router.route('/')
    .get(MainController.getApiIndex);

//API Routes
router.route('/status')
    .get(MainController.getStatus);

router.route('/config')
    .get(MainController.getConfig);

router.route('/contact')
    .post(ContactController.postContact);

module.exports = router;
