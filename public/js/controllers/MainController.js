'use strict';

(function () {
    angular.module('mean-base');

    function MainController($scope, $sessionStorage, MainService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            getStatus();
        })();

        function getStatus() {
            MainService.getStatus().then(function(response) {
                if(response.success) $scope.status = response.success;
            }, function(err) {
                $scope.status = false;
                console.log('Error getting API status response');
            });
        }

    }

    angular
        .module('mean-base')
        .controller('MainController', MainController);
})();