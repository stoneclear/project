var myApp = angular.module('myApp', ['ngResource', 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'/angular_view/main.html',
            controller:'mainCtrl'
        })
})