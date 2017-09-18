
console.log("Getting ready!")
// var anotherVariable

function helloAll (greeting) {
  let newVariable
  anotherVariable = "Bad programmer"
  console.log("Hello " + greeting + " " + anotherVariable)
  newVariable = true
  return 
}

var newThingToDo = function doIt (something) {
  console.log("Found something: ", something)
}

var square = function (number) {
  return number * number
}

var test = function (callback) {
  var factor = 2;
  return callback() * factor
}


helloAll("World!")

console.log (square)

console.log (square(2))

newThingToDo("Word")
newThingToDo(3.1416)
newThingToDo([1,2,3,4])
newThingToDo(square)
newThingToDo([1,2,square,4])

console.log(test (function() { 
  return 6
}))

var willBeACallback =  function () {
  return 8
}

console.log(test(willBeACallback))
