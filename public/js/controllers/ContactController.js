'use strict';

(function () {
    angular.module('mean-base');

    function ContactController($scope, $sessionStorage, ContactService) {
        /**
         * @ngdoc function
         * @name init
         * @desc Constructor controller
         */
        (function init() {
            $scope.$session = $sessionStorage;
            $scope.data    = {};
            $scope.content = {};
            $scope.content.subjects = getSubjects();
            $scope.sent    = false;
            $scope.error   = false;
            console.log('Contact Controller init... OK');
        })();

        $scope.sendContact = function(data) {
            ContactService.addContact(data).then(function(response) {
                if(response.success) {
                    $scope.sent = response.success;
                    clearData();
                } else {
                    $scope.error = true;
                }
            }, function (error) {
                $scope.error = true;
                console.log('Error sending contact form');
            });
        };

        function getSubjects() {
            return [
                {'id': 1, 'label': 'Select option'},
                {'id': 2, 'label': 'Product Request'},
                {'id': 3, 'label': 'Technical issue'},
                {'id': 4, 'label': 'Customer Support'},
                {'id': 5, 'label': 'Other'}
            ];
        }

        $scope.isValid = function(data) {
            if(!data.name || !data.email || !data.message) {
                return false;
            } else {
                return true;
            }
        };

        function clearData() {
            $scope.data = {};
        }

    }

    angular
        .module('mean-base')
        .controller('ContactController', ContactController);
})();