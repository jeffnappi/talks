/**
 * SPAGHETTI CODE EXAMPLE!!! DO NOT USE
 */

angular
  .module('app', [])
  .controller('Home',
    ['$scope', function ($scope) {
      $scope.title = 'Ultimate Team Manager';
    }]);

angular
  .module('app')
  .controller('Teams',
    ['$scope', '$http', function ($scope, $http) {
      $scope.teams = [];
      $scope.newTeam = '';

      $scope.deleteTeam = function (index) {
        $scope.teams.splice(index, 1);
      };

      $scope.addTeam = function () {
        if (!$scope.newTeam) {
          alert('No name provided');
          return;
        }
        $scope.teams.push($scope.newTeam);
        $scope.newTeam = '';
        $scope.title = 'Ultimate Team Manager: ' +
          $scope.teams.length + ' Teams';
      };

      $http.get('api/teams.json').then(
        function (response) {
          $scope.teams = response.data.results;
        }
      )
    }]);
