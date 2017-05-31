var computeLix = require('../readability.js')
var expect = require('chai').expect,
userText = 'This is a Test';

describe('lix-calculation', function() {
  it('should be a String', function () {
    expect(userText).to.be.a('String');
  });
  it('should output a Difficulty Level: Very easy', function () {
    expect(computeLix(userText)).to.equal('Difficulty: Very easy');
  });
});
