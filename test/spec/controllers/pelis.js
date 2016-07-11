'use strict';

describe('Controller: PelisCtrl', function () {

  // load the controller's module
  beforeEach(module('maxmussutoApp'));

  var PelisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PelisCtrl = $controller('PelisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PelisCtrl.awesomeThings.length).toBe(3);
  });
});
