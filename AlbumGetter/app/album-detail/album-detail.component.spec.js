'use strict';

describe('albumDetail', function() {

  // Load the module that contains the `albumDetail` component before each test
  beforeEach(module('albumDetail'));

  // Test the controller
  describe('AlbumDetailController', function() {
    var $httpBackend, ctrl;
    var xyzAlbumData = {
      name: 'album xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('albums/xyz.json').respond(xyzAlbumData);

      $routeParams.albumId = 'xyz';

      ctrl = $componentController('albumDetail');
    }));

    it('should fetch the album details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.album).toEqual({});

      $httpBackend.flush();
      expect(ctrl.album).toEqual(xyzAlbumData);
    });

  });

});
