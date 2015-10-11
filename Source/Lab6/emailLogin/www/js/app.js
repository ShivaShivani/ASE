angular.module('planb', ['ionic'])

  .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'googleplusLoginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/Home.html',
                controller: 'HomeCtrl'
            })
        $urlRouterProvider.otherwise('/login');
})
  .controller('googleplusLoginCtrl', function ($scope, $state){
    $scope.googlePlus = function(){
       $cordovaOauth.google("983864328688-du2bqmr5sa928fud85prebtqmmrvi6k8.apps.googleusercontent.com", ["gaddalashivani@gmail.com"])
         .then(function(result) {
            // results
        }, function(error) {
            // error
        });
      $state.go('home');
    }
});