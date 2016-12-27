'use strict';

(function () {
    angular.module('mean-base');

    function HeadController($scope, $rootScope, $sessionStorage, $location, ConfigApp, MainService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            getConfig();
            console.log('Head Controller init... OK');
        })();

        function getConfig() {
            MainService.getConfig().then(function(response) {
                if(response.success) {
                    $scope.app = response.data;
                } else {
                    //handle error
                    console.log('Error getting config response');
                }
            }, function(error) {
                console.log('Error getting config response');
            });
        }

    }

    angular
        .module('mean-base')
        .controller('HeadController', HeadController);
})();