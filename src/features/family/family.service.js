(function() {
'use strict';

    angular
        .module('app')
        .service('familyService', familyService);

    familyService.$inject = ['baseService','$q'];

    function familyService(baseService,q) {
       
        return {
             getFamily: getFamilyMock   
        };

        function getFamilyMock(){
            var def = q.defer();
            var family = {
                name: 'Bjørndahl',
                people:[
                    {
                        name: 'Amund',
                        birthday: new Date(2008,6,24),
                        color: '#afd4ff',
                        showTasks: true
                    },
                    {
                        name: 'Eivind',
                        birthday: new Date(2008,6,24),
                        color: '#a5cc94',
                        showTasks: true
                    },
                    {
                        name: 'Elise',
                        birthday: new Date(2005,12,10),
                        color: '#d7c7ed',
                        showTasks: true
                    },
                    {
                        name: 'Mari',
                        birthday: new Date(1977, 1, 24),
                        color: '#efc6c6',
                        showTasks: false
                    },
                    {
                        name: 'Thomas',
                        birthday: new Date(1974, 2, 10),
                        color: '#c6e8ef',
                        showTasks: false
                    }
                ]
            };
            def.resolve(family);
            return  def.promise;
        }
    }
})();