
function square(number ) {
  return number * number
}

var squareOfTwo = square(2)

 squareOf = "whatever"

var cubeOf = function(number) {
  var squareOf = square
  return number * squareOf(number)
}

function print (something) {
  console.log(something)
}

function doThis (todo) {
  todo()
}

console.log("It should be whatever ",squareOf)
console.log(squareOfTwo)
// console.log(squareOf)
console.log(cubeOf)
console.log(cubeOf(3))
console.log("It should be whatever ",squareOf)

print("Boss")
print(12345)
print([1,2,3,4,5])
print(cubeOf(3))
print(cubeOf)
var fancyArray = [cubeOf, square, print]
print(fancyArray)
console.log(fancyArray[0](4))

doThis (function() {
  console.log("Happy again")
})

var myCallback = function() {
  console.log("Running the callback")
}

doThis (myCallback)


