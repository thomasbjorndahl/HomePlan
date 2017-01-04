(function() {
'use strict';

    angular
        .module('app')
        .service('weatherService', weatherService);

    weatherService.$inject = [];
    function weatherService() {

        //http://www.yr.no/sted/Norge/Buskerud/Kongsberg/Gamlegrend%C3%A5sen/varsel.xml
        return {
        }
    }

})();