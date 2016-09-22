//Declare the App with its dependencies
angular.module("myNav", ['ngRoute'])

//Declare a controller
//myNav.controller('myCntrl', ['$scope', function ($scope) { }]);

//Config the routes
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "main.htm"
    })
    .when('/red', {
        templateUrl: "red.htm"
    })
    .when('/blue', {
        templateUrl: "blue.htm"
    })
    .when('/green', {
        templateUrl: "green.htm"
   /* })

    .otherwise({
        redirectTo: '/'*/
        });
}]);
