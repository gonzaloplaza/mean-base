'use strict';

(function () {
    angular.module('mean-base');

    function DocsController($scope, $sessionStorage) {
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
        .controller('DocsController', DocsController);
})();