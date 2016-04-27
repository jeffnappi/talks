(function () {
  angular.module('app', [])
    .controller('HomeController', HomeController);

  function HomeController() {
    var ctrl = this;
    ctrl.title = 'Ultimate Team Manager';
  }
})();