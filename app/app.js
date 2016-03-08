'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html"
            })
            .state('http', {
                url: "/http",
                templateUrl: "partials/http.html"
            })
    });
