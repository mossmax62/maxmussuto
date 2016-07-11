'use strict';

describe('Controller: BiCtrl', function () {

  // load the controller's module
  beforeEach(module('maxmussutoApp'));

  var BiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BiCtrl = $controller('BiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BiCtrl.awesomeThings.length).toBe(3);
  });
});
