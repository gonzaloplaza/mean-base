'use strict';

(function () {
    angular.module('mean-base');

    function SidebarController($scope, $rootScope, $sessionStorage, $location, ParametersApp) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            console.log('Sidebar Controller init... OK');
        })();

    }

    angular
        .module('mean-base')
        .controller('SidebarController', SidebarController);
})();