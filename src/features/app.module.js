(function() {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig(rp) {
        rp
            .when('/add-quote', {
                templateUrl: 'views/add_quote.html',
                controller: 'QuoteCtrl'
            })
            .otherwise({
                templateUrl: 'features/main/index.html',
                controller: 'mainController',
                controllerAs: 'vm'
                
            });
    }
})();