'use strict';

// Register `albumList` component, along with its associated controller and template
angular.
  module('albumList').
  component('albumList', {
    templateUrl: 'album-list/album-list.template.html',
    controller: ['Album',
      function AlbumListController(Album) {
        this.albums = Album.query();
        this.orderProp = 'age';
      }
    ]
  });
