# MEAN Base
![Logo of the project](http://ordermin.com/images/mean-logo.jpg)

[![Build Status](https://travis-ci.org/gonzaloplaza/mean-base.svg?branch=master)](https://travis-ci.org/gonzaloplaza/mean-base)

**MEAN Base** is an open source project designed and assembled to build simple web applications based in MEAN fullstack architecture: MongoDB, Express, AngularJS, Node.Js

  - (**M**)ongoDB is the leading NoSQL database, empowering businesses to be more agile and scalable.
  - (**E**)xpress is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
  - (**A**)ngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.
  - (**N**)ode.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

### Prerequisites
You'll need the following technologies and packages installed on your PC (Windows, Linux) or Mac. Please read the custom documentation for each platform.

- Node.js v4.x + npm: Check [documentation](https://nodejs.org/)
- MongoDB 3.4.x : Check [documentation](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)
- Bower 1.8.x : check [documentation](https://bower.io/#install-bower)

### Installation
```sh
$ git clone https://github.com/gonzaloplaza/mean-base.git my-project
$ cd my-project
$ npm install && bower install
$ npm start
```

Without closing your terminal, you can check the project running at **http://localhost:8080**

For production environments.. (pending)


### Configuration

You can configure the main App parameters such as database host, user, application name and others in **development.js** file. 
This file is auto-generated by ***setup*** script for the development environment by default. You can update it and add new config values.
> Note: Please don't edit the default.dist.json file.
```
{
    "app": {
      "version": "1.0.0",
      "name": "Application Name",
      "author": "Author Name",
      "email": "foo@bar.com"
    },
    "db": {
      "host": "127.0.0.1",
      "port": 27017,
      "user": "",
      "password": "",
      "name": "mean-test"
    },
    "mailer": {
      "host": "smtp.provider.com", 
      "port": 587,
      "transport": "smtp",
      "encryption": "ssl",
      "secure": true,
      "auth": {
        "user": "", 
        "password": ""
      },
      "sender": "foo@bar.com"
    }
}
```

### Troubleshooting
If you find any issue running the application, check if Node.js, Npm (Node Package Manager), Bower and Nodemon are installed in your system and updated.
> Note: This packages are compatible with many OS and architectures
> (Windows, Linux, Mac), please check the documentation related to your
> system and follow instructions.

```sh
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
$ sudo npm install bower -g
```

Check if your MongoDB service is installed and running.
```sh
$ sudo service mongod status|start|restart
```

Create and give write permission to cache/logs folders. Execute **setup** script:
```sh
$ mkdir var/cache var/logs
$ chmod -R 777 var/cache var/logs
$ node bin/setup
```

Without closing the terminal, check the application log messages. It should display the following message after starting (or error description):
```sh
$ nodemon bin/www
---- Mean Base Application version 1.0.0 ----
Server INITIALIZED listening on port: 8080
NODE_ENV Environment: development
Mongoose default connection open: localhost:27017/mean-test
```

### Changelog
You can follow the project Changelog, improvements, versions and releases in [CHANGELOG.md](CHANGELOG.md) file.

### Contributing
This project has been built using best practices acquired from other MEAN stacks like [mean.io](http://mean.io) or [MEAN.JS](https://meanjs.org/) projects. Also i've taken some good file organization techniques from [Symfony3 PHP Framework](https://symfony.com).

Feel free to contribute to this project, pull requests and other improvements are welcome. If you have any ideas, just open an issue and tell me what you think, or send me an email to hello (at) ordermin.com

### Licensing

The code in this project is licensed under [MIT LICENSE](https://github.com/gonzaloplaza/mean-base/blob/master/LICENSE). Read file for more information.










