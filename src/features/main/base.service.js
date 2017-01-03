(function() {
'use strict';

    angular
        .module('app')
        .service('baseService', baseService);

    baseService.$inject = ['$http'];
    function baseService(http) {
        return {};
    }
})();