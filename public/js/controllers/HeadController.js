'use strict';

(function () {
    angular.module('mean-base');

    function HeadController($scope, $sessionStorage, MainService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            getConfig();
        })();

        function getConfig() {
            MainService.getConfig().then(function(response) {
                if(response.success) {
                    $scope.app = response.data;
                } else {
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