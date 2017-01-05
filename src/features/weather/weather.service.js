(function() {
'use strict';

    angular
        .module('app')
        .service('weatherService', weatherService);

    weatherService.$inject = ['$http'];

    function weatherService($http) {

        //http://www.yr.no/sted/Norge/Buskerud/Kongsberg/Gamlegrend%C3%A5sen/varsel.xml
        return {
            getWeatherInfo: getWeatherInfo
        }

        function getWeatherInfo() {
            var url = 'http://www.yr.no/sted/Norge/Buskerud/Kongsberg/Gamlegrend%C3%A5sen/varsel.xml';


            return $http.jsonp(url, { jsonpCallbackParam: 'callback' })
                .then(function (data) {
                    console.log(data.found);
                });


            //return http.get(url)
            //    .then(function (data) {
            //        console.log(data);
            //    });

            //x.parseString(testString)
        }
    }

})();