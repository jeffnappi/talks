/**
 * MID-REFACTOR CODE EXAMPLE!!! DO NOT USE
 */
(function () {
  angular
    .module('app')
    .component('teamList', {
      controller: TeamListController,
      controllerAs: 'ctrl',
      templateUrl: 'app/team-list.html',
      bindings: {
        homeTitle: '<'
      }
    });

  TeamListController.$inject = ['TeamService'];

  function TeamListController(TeamService) {
    var ctrl = this;
    ctrl.teams = [];
    ctrl.newTeam = '';

    ctrl.deleteTeam = deleteTeam;
    ctrl.addTeam = addTeam;

    ctrl.$onInit = activate;

    function deleteTeam(index) {
      ctrl.teams.splice(index, 1);
    }

    function addTeam() {
      if (!ctrl.newTeam) {
        alert('No name provided');
        return;
      }
      ctrl.teams.push(ctrl.newTeam);
      ctrl.newTeam = '';
    }

    function getTeams() {
      TeamService.getTeams().then(function (teams) {
        ctrl.teams = teams;
      });
    }

    function activate() {
      getTeams();
    }
  }
})();