// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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
                controller: 'LoginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/Home.html',
                controller: 'HomeCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'views/newsearch.html',
                controller: 'NewSearchCtrl'
            });

        $urlRouterProvider.otherwise('/login');
    })
    .controller('NewSearchCtrl', function ($scope, $ionicModal, $http) {
        $scope.auth = {
            //
            // Update with your auth tokens.
            //
            consumerKey: "jt0oPdDr63AG2Wt_CUVzmw",
            consumerSecret: "-VYw0JDITsgueWYbC05BqxIm8Xk",
            accessToken: "PM8nbipEhf0ACqDAPQONbY5DsfAISfv3",
            accessTokenSecret: "PP1pf35vXJ9jBwNuZiCohbW-xFQ",
            serviceProvider: {
                signatureMethod: "HMAC-SHA1"
            }
        };

        $scope.items = []

        $scope.search = function (searchKeyword) {
            console.log(searchKeyword);
            var url = 'https://api.foursquare.com/v2/venues/search'
            var near = 'Kansas+City'
            var oauth_token = 'YYJC3AWR124SJA124L1RBYS0IJV1SYBR0DY5ZPXQN51PDZCI&v=20151002'

            $http.get(url + "?near=" + near + "&oauth_token=" + oauth_token + "&v=20151002&query=" + searchKeyword).then(function (resp) {
                console.log(resp);
                // For JSON responses, resp.data contains the result
                $scope.items = resp.data.response.venues;
            }, function (err) {
                console.error(err);
                // err.status will contain the status code
            })
        }
    })
    .controller('LoginCtrl', function ($scope, $state) {

        $scope.login = function (username, password) {
            console.log(username);
            $state.go('home');
        }
    })
    .controller('HomeCtrl', function ($scope, $state) {
        console.log("Welcome home");
        $scope.plan = function () {

            $state.go('search');
        }
    });