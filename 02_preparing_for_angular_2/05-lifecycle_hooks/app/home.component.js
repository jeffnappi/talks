(function () {
  angular
    .module('app')
    .component('home', {
      controller: HomeController,
      templateUrl: 'app/home.html'
    });

  function HomeController() {
    var ctrl = this;
    ctrl.title = 'Ultimate Team Manager';
  }
})();