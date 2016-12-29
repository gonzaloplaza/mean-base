/*!
 * db
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var mongoose = require('mongoose');
var config = require('config');
var db = config.get('db');
var uri = db.host + ':' + db.port + '/' + db.name;

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: db.user,
  pass: db.password
};

mongoose.Promise = global.Promise;
mongoose.connect(uri, options);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open: ' + uri);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});