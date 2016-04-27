/**
 * MID-REFACTOR CODE EXAMPLE!!! DO NOT USE
 */

(function () {
  angular
    .module('app')
    .service('TeamService', TeamService);

  TeamService.$inject = ['$http'];

  function TeamService($http) {
    this.getTeams = getTeams;

    function getTeams() {
      return $http.get('api/teams.json')
        .then(getTeamsComplete)
        .catch(getTeamsFailed);

      function getTeamsComplete(response) {
        return response.data.results;
      }

      function getTeamsFailed(error) {
        console.log('XHR Failed for getTeams.' + error.data);
      }
    }
  }
})();