"use strict";

var app = angular.module('main', [ 're0']);
app.controller('testctrl', ['$scope', '$http', 'recipes','$location',
    function ($scope, $http, recipes,$location) {
        $scope.login = function () {
            $http.post('/qwer', {
                name: $scope.User,
                pass: $scope.Pass
            }).success(function (data) {
                $scope.info = data;
            })
        };
        $scope.set = function () {
            $scope.User = 'admin';
            $scope.Pass = '123456';
        }
        $scope.recipes = [{"title": "7"}];
        $scope.recipes=recipes;
        $scope.info='1';
        $scope.info=$location.absUrl();
        $scope.test = function () {
            $http.get('/recipes').success(function (data) {
                $scope.recipes = data;
            })
        }
        $scope.add = function () {
            $location.hash('ssdsd');
            //$location.url('qq');
            $scope.info=location();
        }
    }]);
/*app.controller('addctrl', ['$scope', '$http', 'recipe',
 function ($scope, $http, recipe) {
 $scope.add= function () {
 var re=new
 recipe.save()
 }
 })
 */

app.config(['$routeProvider', function ($routeProvider, $scope) {
    $routeProvider.when('/', {
        controller: "testctrl",
        templateUrl: "views/main.login.html",
        resolve: {
            recipes: ["MultiRecipeLoader", function (MultiRecipeLoader) {
                return MultiRecipeLoader();
            }]
        }
    })
}]);