'use strict';

(function () {
    angular.module('mean-base');

    function SidebarController($scope, $rootScope, $route, $sessionStorage, $location, ConfigApp) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            console.log('Sidebar Controller init... OK');
        })();

        $scope.isActive = function (path) {
            if ($route.current && $route.current.regexp) {
                return $route.current.regexp.test(path);
            }
            return false;
        };

    }

    angular
        .module('mean-base')
        .controller('SidebarController', SidebarController);
})();