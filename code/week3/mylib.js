
(function() {

  // Take advantage of the fact that variables declared 
  // within a function scope are private

  return {
    // Return an object literal which has access to only 
    // desired parts of the function.
  }

  // notice this function is self-executing which implies
  // some initialization is possible 
})();


// For example

module.exports  = (function() {

  var _isActive = false
  var _total = 0

  function init() {
    _isActive = true
  }

  function set(total) {
    if (_isActive)
      _total = total
  }

  function get() {
    return _total
  }

  function inc(steps) {
    if (_isActive)
      _total += steps
  }

  init()

  return {
    set: set,
    get: get,
    inc: inc
  }

// notice this function is self-executing which implies
// some initialization is possible 
})();

