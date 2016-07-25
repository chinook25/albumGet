'use strict';

angular.
  module('core.album').
  factory('Album', ['$resource',
    function($resource) {
      return $resource('albums/:albumId.json', {}, {
        query: {
          method: 'GET',
          params: {albumId: 'albums'},
          isArray: true
        }
      });
    }
  ]);
