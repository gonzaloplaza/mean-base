'use strict';

(function () {
    angular.module('mean-base');

    function AboutController($scope, $rootScope, $sessionStorage, $location, ConfigApp) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            console.log('About Controller init... OK');
        })();

    }

    angular
        .module('mean-base')
        .controller('AboutController', AboutController);
})();