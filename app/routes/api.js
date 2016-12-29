/*!
 * api routes
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var app = require('express');
var ContactController = require('../controllers/contact');
var MainController    = require('../controllers/main');
var router = app.Router();

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
