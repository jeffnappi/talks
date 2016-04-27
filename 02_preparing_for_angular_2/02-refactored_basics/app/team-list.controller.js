/**
 * MID-REFACTOR CODE EXAMPLE!!! DO NOT USE
 */

(function () {

  angular
    .module('app')
    .controller('TeamListController', TeamListController);

  TeamListController.$inject = ['$scope', 'TeamService'];

  function TeamListController($scope, TeamService) {
    $scope.teams = [];
    $scope.newTeam = '';

    $scope.deleteTeam = deleteTeam;
    $scope.addTeam = addTeam;

    activate();

    function deleteTeam(index) {
      $scope.teams.splice(index, 1);
    }

    function addTeam() {
      if (!$scope.newTeam) {
        alert('No name provided');
        return;
      }
      $scope.teams.push($scope.newTeam);
      $scope.newTeam = '';
      $scope.title = 'Ultimate Team Manager: ' +
        $scope.teams.length + ' Teams';
    }

    function getTeams() {
      TeamService.getTeams().then(function (teams) {
        $scope.teams = teams;
      });
    }

    function activate() {
      getTeams();
    }
  }

})();