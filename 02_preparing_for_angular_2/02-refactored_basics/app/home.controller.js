(function () {
  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.title = 'Ultimate Team Manager';
  }
})();