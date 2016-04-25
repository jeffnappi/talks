(function () {

  angular.module('app', [])
    .controller('HomeController',
      ['$scope', HomeController]);

  function HomeController($scope) {
    $scope.title = 'Ultimate Team Manager';
  }
})();