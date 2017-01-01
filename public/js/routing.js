'use strict';

angular.module('mean-base')
    .config(function($routeProvider) {
    $routeProvider
        .when('/', {
            name : 'homepage',
            templateUrl : 'views/main.html',
            controller  : 'MainController'
        })

        .when('/docs', {
            name : 'docs',
            templateUrl : 'views/docs.html',
            controller  : 'DocsController'
        })

        .when('/about', {
            name: 'about',
            templateUrl : 'views/about.html',
            controller  : 'AboutController'
        })

        .when('/contact', {
            name: 'contact',
            templateUrl : 'views/contact.html',
            controller  : 'ContactController'
        })

        .otherwise({redirectTo : '/'});
});