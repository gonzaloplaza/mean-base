'use strict';

/**
 * @ngdoc service
 * @name  mean-base.ContactService
 * @description Service to handle Contact Form
 **/
(function () {
    angular.module('mean-base');

    function ContactService(Restangular) {
        this.addContact = function (contactObj) {
            return Restangular
                .one('contact')
                .customPOST(contactObj);
        };

    }

    angular
        .module('mean-base')
        .service('ContactService', ContactService);
})();