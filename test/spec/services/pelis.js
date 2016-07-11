'use strict';

describe('Service: pelis', function () {

  // load the service's module
  beforeEach(module('maxmussutoApp'));

  // instantiate service
  var pelis;
  beforeEach(inject(function (_pelis_) {
    pelis = _pelis_;
  }));

  it('should do something', function () {
    expect(!!pelis).toBe(true);
  });

});
