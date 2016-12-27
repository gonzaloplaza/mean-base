'use strict';

angular.module('mean-base')
    .config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'MainController'
        })

        .when('/docs', {
            templateUrl : 'views/docs.html',
            controller  : 'DocsController'
        })

        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'AboutController'
        })

        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'ContactController'
        })

        .otherwise({redirectTo : '/'});
});