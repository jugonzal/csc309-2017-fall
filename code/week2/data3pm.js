
let data = "Juan"

data = ['student 1', 'student 2', 'student 3']

console.log ("One of the students: ", data[0])

data = {
  prof: 'Gonzalez',
  students: ['student 1', 'student 2', 'student 3']
}

console.log("All students: ", data.students)

data.quantity = 100

let year = "year"

data[year] = 2017

data.do = function() { console.log("Hello World!")}

data.data = "Overiding?"

console.log(data)

data.do()

let complexData = {
  name: "Very complex",
  contents: data
}

console.log(complexData)

complexData.contents.do()

console.log("One of those students: ", complexData.contents.students[2])