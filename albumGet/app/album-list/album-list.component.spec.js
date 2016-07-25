'use strict';

describe('albumList', function() {

  // Load the module that contains the `albumList` component before each test
  beforeEach(module('albumList'));

  // Test the controller
  describe('AlbumListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('albums/albums.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('albumList');
    }));

    it('should create a `albums` property with 2 albums fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.albums).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.albums).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
