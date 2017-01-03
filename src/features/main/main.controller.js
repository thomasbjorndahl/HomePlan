(function(_,m) {
'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['familyService','taskService'];
    function mainController(familyService, taskService) {
        var vm = this;
        vm.peopleTasks = peopleTasks;

        activate();

        ////////////////

        function activate() { 
            getFamily();
            
        }

        function getFamily(){

            familyService.getFamily()
                .then(function (data) {
                    vm.family = data;
                    getTaskTypes();
                    getBirthdays();
                });
        }

        function getBirthdays() {
            _.each(vm.family.people, function (person) {
                if (person.birthday) {
                    var nextBirthDay = new Date(new Date().getFullYear(), person.birthday.getMonth(), person.birthday.getDate());
                    //console.log(new Date(person.birthday.getFullYear, person.birthday.getMonth, person.birthday.getDate));
                    person.birthdayMoment = m(person.birthday);
                    person.nextBirthdayMoment = m(nextBirthDay);
                    person.timeToBirthday = person.nextBirthdayMoment.fromNow();
                }
            });
            console.log(vm.family.people)
        }

        function getTaskTypes() {
            taskService.getTaskTypes()
                .then(function (data) {
                    vm.taskTypes = data;
                    getTasks();
                });
        }

        function getTasks() {
            taskService.getTasks()
                .then(function (data) {
                    vm.tasks = mapTasks(data);
                    
                });
        }

        function mapType(task) {
            if (task.type) {
                var type = _.findWhere(vm.taskTypes, { id: task.type });
                if (type) {
                    task.taskType = type;
                }
            }
        }

        function mapTasks(data) {
            return data.map(function (task) {

                mapType(task);

                _.each(vm.family.people, function (person) {
                    if (!person.tasks) {
                        person.tasks = [];
                    }
                    if (_.contains(task.persons, person.id)) {
                        person.tasks.push(task);
                    }
                });
                
               

                return task;
            });
        }

        function peopleTasks() {
            return vm.family.people.filter(function (item) {
                return item.showTasks;
            })
        }
    }
})(_,moment);