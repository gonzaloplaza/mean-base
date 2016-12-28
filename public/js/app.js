'use strict';

var app = angular.module('mean-base', [
    'ngAnimate',
    'ngStorage',
    'ngSanitize',
    'ngRoute',
    'angularSpinner',
    'restangular'
])

/**
 * @function config
 * @desc Set baseUrl and set default init page to dashboard
 * @param RestangularProvider
 * @param ParametersApp
 */
.config(function (RestangularProvider, ConfigApp, $qProvider) {
        RestangularProvider.setBaseUrl(ConfigApp.api_endpoint);
        console.log('Setting API Endpoint ... ' + ConfigApp.api_endpoint);
        $qProvider.errorOnUnhandledRejections(false);
})

/**
 * @function run app
 * @desc Init angularjs app
 */
.run(function ($rootScope, $sessionStorage, $localStorage, ConfigApp) {
        console.log('App init ... OK');
});