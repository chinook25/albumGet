'use strict';

// Register `albumDetail` component, along with its associated controller and template
angular.
  module('albumDetail').
  component('albumDetail', {
    templateUrl: 'album-detail/album-detail.template.html',
    controller: ['$routeParams', 'Album',
      function AlbumDetailController($routeParams, Album) {
        var self = this;
        self.album = Album.get({albumId: $routeParams.albumId}, function(album) {
          self.setImage(album.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
