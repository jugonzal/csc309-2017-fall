var assert = require('assert');
describe('Classes', function() {
  describe('Rectangle', function() {
    it('should be able to move', function() {
      Rectangle = require('../src/main')
      const testRectangle = new Rectangle('test', 5, 5, 50, 50);
      testRectangle.move(10, 10);
      assert.equal(10, testRectangle.xCoord);
      assert.equal(10, testRectangle.yCoord);
    });
    // it('should initialize')
  });
});