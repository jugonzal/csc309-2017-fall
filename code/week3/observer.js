var subject = (function() {
  let observers = [];

  return {
    subscribeObserver: function (observer) {
      observers.push(observer)
      return this
    },

    unsubscribeObserver: function(observer) {
      let index = this.observers.indexOf(observer)
      if (index > -1) {
        // delete one item at the position found
        observers.splice(index,1)
      }
      return this
    },

    notifyAllObservers: function() {
      observers.forEach(function(element) {
        element()
      })
      return this
    }
  }
})()

subject
  .subscribeObserver(function() {
    console.log("First observer notified")
  })
  .subscribeObserver(function() {
    console.log("Second observer notified")
  })
  .notifyAllObservers()

