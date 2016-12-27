'use strict';

var app = angular.module('mean-base', [
    'ngAnimate',
    'ngStorage',
    'ngSanitize',
    'restangular'
])

/**
 * @function config
 * @desc Set baseUrl and set default init page to dashboard
 * @param RestangularProvider
 * @param ParametersApp
 */
.config(function (RestangularProvider, ParametersApp, $qProvider) {
        RestangularProvider.setBaseUrl(ParametersApp.api_endpoint);
        console.log('Setting API Endpoint ... ' + ParametersApp.api_endpoint);
        $qProvider.errorOnUnhandledRejections(false);
})

    /**
     * @function run app
     * @desc Init angularjs app
     */
.run(function ($rootScope, $sessionStorage, $localStorage, ParametersApp) {
        console.log('App init ... OK');
});