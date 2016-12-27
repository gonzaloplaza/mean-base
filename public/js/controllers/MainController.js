'use strict';

(function () {
    angular.module('mean-base');

    function MainController($scope, $rootScope, $sessionStorage, $location, ConfigApp, MainService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            getStatus();
            console.log('Main Controller init... OK');
        })();

        function getStatus() {
            MainService.getStatus().then(function(response) {
                if(response.success) {
                    $scope.status = response.success;
                } else {
                    $scope.status = false;
                }
            }, function(error) {
                $scope.status = false;
                console.log('Error getting API status response');
            });
        }

    }

    angular
        .module('mean-base')
        .controller('MainController', MainController);
})();