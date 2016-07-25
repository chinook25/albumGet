'use strict';

describe('Album', function() {
  var $httpBackend;
  var Album;
  var albumsData = [
    {name: 'Album X'},
    {name: 'Album Y'},
    {name: 'Album Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Album` service before each test
  beforeEach(module('core.album'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Album_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('albums/albums.json').respond(albumsData);

    Album = _Album_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the albums data from `/albums/albums.json`', function() {
    var albums = Album.query();

    expect(albums).toEqual([]);

    $httpBackend.flush();
    expect(albums).toEqual(albumsData);
  });

});
