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
                        id: 1,
                        name: 'Amund',
                        birthday: new Date(2008,5,24),
                        color: '#afd4ff',
                        showTasks: true
                    },
                    {
                        id: 2,
                        name: 'Eivind',
                        birthday: new Date(2008,5,24),
                        color: '#a5cc94',
                        showTasks: true
                    },
                    {
                        id: 3,
                        name: 'Elise',
                        birthday: new Date(2005, 11, 10),
                        color: '#d7c7ed',
                        showTasks: true
                    },
                    {
                        id: 4,
                        name: 'Mari',
                        birthday: new Date(1977, 0, 24),
                        color: '#efc6c6',
                        showTasks: false
                    },
                    {
                        id: 5,
                        name: 'Thomas',
                        birthday: new Date(1974, 1, 10),
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