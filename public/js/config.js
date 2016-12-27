'use strict';

angular.module('mean-base')
    .constant('ConfigApp', {
    api_endpoint: window.location.protocol + '//' + window.location.host + '/api/v1'
});