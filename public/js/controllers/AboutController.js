'use strict';

(function () {
    angular.module('mean-base');

    function AboutController($scope, $sessionStorage) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
        })();

    }

    angular
        .module('mean-base')
        .controller('AboutController', AboutController);
})();