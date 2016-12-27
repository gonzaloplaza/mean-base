var mongoose = require('mongoose');
var config = require('../app/config/config');

var uri = config.db.host + ':' + config.db.port + '/' + config.db.name;

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: '',
  pass: ''
}

mongoose.connect(uri, options);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + uri);
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