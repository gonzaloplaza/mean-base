'use strict';

(function () {
    angular.module('mean-base');

    function MainController($scope, $rootScope, $sessionStorage, $location, ParametersApp, MainService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            MainService.getStatus().then(function(response) {
                $scope.status = true;
            }, function(error) {
                $scope.status = false;
                console.log('Error getting API status response');
            });

            console.log('Main Controller init... OK');
        })();

    }

    angular
        .module('mean-base')
        .controller('MainController', MainController);
})();