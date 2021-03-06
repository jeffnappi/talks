/**
 * MID-REFACTOR CODE EXAMPLE!!! DO NOT USE
 */

(function () {

  angular
    .module('app')
    .controller('TeamListController', TeamListController);

  TeamListController.$inject = ['TeamService'];

  function TeamListController(TeamService) {
    var ctrl = this;
    ctrl.teams = [];
    ctrl.newTeam = '';

    ctrl.deleteTeam = deleteTeam;
    ctrl.addTeam = addTeam;

    activate();

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