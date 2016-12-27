'use strict';

(function () {
    angular.module('mean-base');

    function ContactController($scope, $rootScope, $sessionStorage, $location, ConfigApp) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            console.log('Contact Controller init... OK');
        })();

    }

    angular
        .module('mean-base')
        .controller('ContactController', ContactController);
})();