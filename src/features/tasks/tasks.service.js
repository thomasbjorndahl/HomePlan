(function() {
'use strict';

    angular
        .module('app')
        .service('taskService', taskService);

    taskService.$inject = ['baseService', '$q'];

    function taskService(baseService,q) {
        return {
            getTaskTypes: getTaskTypesMock,
            getTasks: getTasksMock
        };

        function getTaskTypesMock(){
            var def = q.defer();
            var taskTypes = [
                { id: 1, name: 'Skole', cl: 'school', icon: 'fa fa-graduation-cap' },
                { id: 2, name: 'Lek', cl: 'play' },
                { id: 3, name: 'Fritid', cl: 'hobby', icon: 'fa fa-music' },
                { id: 4, name: 'Underholdning', cl: 'fun', icon: 'fa fa-film' },
                { id: 5, name: 'Mat', cl: 'food', icon: 'fa fa-cutlery' },
                { id: 6, name: 'Hvile', cl: 'rest' }

            ];
            def.resolve(taskTypes);
            return def.promise;
        }

        function getTasksMock(){
            var def = q.defer();
            def.resolve([{
                persons: [1,2],
                title: 'Skole og SFO',
                type: 1
            },{
                persons: [3],
                title: 'Skole',
                type: 1
            },
            {
                persons: [1, 2, 3],
                title: 'Lekser',
                type: 1

            }, {
                persons: [1, 2, 3, 4, 5],
                title: 'Middag',
                type: 5
            },
            {
                persons: [1, 2, 3],
                title: 'iPad',
                comment: 'Ferdig senest kl. 17:00',
                type: 4
            },
            {
                persons: [3],
                title: 'Spilletime hos Geir',
                type: 3
            },
            {
                persons: [1, 2],
                title: 'Bibliotek',
                type: 4
            },
            {
                persons: [1, 2, 3],
                title: 'Guttemusikken',
                type: 3
            },
            {
                persons: [1, 2, 3],
                title: 'Kvelsmat og sengetid',
                type: 5
            }]);
            return def.promise;
        }
    }
})();