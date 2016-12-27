'use strict';

/**
 * @ngdoc service
 * @name  mean-base.MainService
 * @description Service to get Main Data
 **/
(function () {
    angular.module('mean-base');

    function MainService(Restangular) {
        this.getStatus = function () {
            return Restangular
                .one('status')
                .get();
        };
    }

    angular
        .module('mean-base')
        .service('MainService', MainService);
})();