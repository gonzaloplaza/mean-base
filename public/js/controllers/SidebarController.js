'use strict';

(function () {
    angular.module('mean-base');

    function SidebarController($scope, $route, $sessionStorage) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
        })();

        $scope.isActive = function (name) {
            if ($route.current && $route.current.name) {
                return ($route.current.name == name);
            } else {
                return false;
            }
        };

    }

    angular
        .module('mean-base')
        .controller('SidebarController', SidebarController);
})();