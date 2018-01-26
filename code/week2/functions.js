// declaring a function
function square(number) {
  return number * number
}

// using a function expression instead
var cube = function(number) {
  return square(number)*number
}

// notice that the variable above can be used to call the function
console.log(cube(2))

// in the function below, operation is a string that will decide which function to call
function calc(number,operation) {
  if (operation == 'square') {
    return square(number)
  } else if (operation == 'cube') {
    return cube(number)
  }
}
console.log(calc(2,'square'))
console.log(calc(2,'cube'))

// in the function below, operation is a callback
function betterCalc(number,operation) {
    return operation(number)
}

// the decision of which operation to call is
// made by whoever is calling betterCalc
console.log(betterCalc(2,square))
console.log(betterCalc(2,cube))

// or we simply pass a callback using a function expression
console.log(betterCalc(3,function(number) {
  return number + number
}))



