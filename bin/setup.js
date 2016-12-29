#!/usr/bin/env node

var fs = require('fs');
var config = require('config');
var env = config.util.getEnv('NODE_ENV');

if (!fs.existsSync('config/' + env + '.json')) {
    fs.createReadStream('config/default.dist.json')
        .pipe(fs.createWriteStream('config/'+env+'.json'));
    console.log('Enviroment file created into /config/'+env+'.json file');
}

if (!fs.existsSync('var/logs')) {
    fs.mkdirSync('var/logs',777);
    fs.createWriteStream('var/logs/error.log');
    console.log('Created error logger');
}

if (!fs.existsSync('var/cache')) {
    fs.mkdirSync('var/cache',777);
    console.log('Created cache folder');
}



