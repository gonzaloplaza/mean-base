'use strict';

var fs = require('fs');
var config = require('config');

var env = config.util.getEnv('NODE_ENV');

fs.createReadStream('config/default.json')
    .pipe(fs.createWriteStream('config/'+env+'.json'));


console.log('Mean Base Setup: Enviroment file created into /config/'+env+'.json file');

