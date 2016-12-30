#!/usr/bin/env node

var fs = require('fs');
var config = require('config');
var env = config.util.getEnv('NODE_ENV');

if (!fs.existsSync('config/' + env + '.json')) {
    fs.createReadStream('config/default.dist.json')
        .pipe(fs.createWriteStream('config/'+env+'.json'));
    console.log('INSTALLED: Enviroment file created into /config/'+env+'.json file');
} else {
    console.log('SKIPPED: Environment config files already created.')
}

if (!fs.existsSync('var/logs')) {
    fs.mkdirSync('var/logs');
    console.log('Created logs folder');
}
if (!fs.existsSync('var/logs/error.log')) {
    fs.createWriteStream('var/logs/error.log');
}

if (!fs.existsSync('var/cache')) {
    fs.mkdirSync('var/cache');
    console.log('Created cache folder');
}



