'use strict';

(function () {
    angular.module('mean-base');

    function DocsController($scope, $rootScope, $sessionStorage, $location, ConfigApp) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            console.log('Docs Controller init... OK');
        })();

    }

    angular
        .module('mean-base')
        .controller('DocsController', DocsController);
})();