
let data = 'Gonzalez'

let students = ['student A', 'student B', 'student C']

console.log("Just the first student: ", students[0])

data = {
  prof: 'Gonzalez',
  students: ['student A', 'student B', 'student C']
}

console.log("The next student: ", data.students[1])

data.course = 'CSC309'

let someKey = "address"
let someValue = "50 St. George"

data[someKey] = someValue

data.howMany = function () {
  return 96;
}

console.log("ALL OF IT: ", data)
console.log("How Many? ", data.howMany())

let courses = {
  csc309: data,
  csc209: 'some other stuff'
}

console.log(courses)
console.log("Prof of CSC309 ", courses.csc309.prof)
console.log("3rd student of CSC309 ", courses.csc309.students[2])
console.log("How many students in CSC309 ",courses.csc309.howMany())
