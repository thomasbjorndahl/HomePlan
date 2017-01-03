(function() {
'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['familyService'];
    function mainController(familyService) {
        var vm = this;
        vm.tasks = tasks;

        activate();

        ////////////////

        function activate() { 
            getFamily();
        }

        function getFamily(){

            familyService.getFamily()
                .then(function (data) {
                    vm.family = data;
                });
        }

        function tasks() {
            return vm.family.people.filter(function (item) {
                return item.showTasks;
            })
        }
    }
})();