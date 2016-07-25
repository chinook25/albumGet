'use strict';

angular.
  module('albumApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/albums', {
          template: '<album-list></album-list>'
        }).
        when('/albums/:albumId', {
          template: '<album-detail></album-detail>'
        }).
        otherwise('/albums');
    }
  ]);
