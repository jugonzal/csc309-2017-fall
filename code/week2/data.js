

var prof = 'Gonzalez'

var students = ['student 1', 'student 2', 'student 3']

var course = {
  prof: 'Gonzalez',
  students: ['student 1', 'student 2', 'student 3']
}

var university = {
  csc309: course
}

console.log(course.prof)

course.capacity = 110

course.test = function () {
  console.log('Running Test')
}

console.log(university)
university.csc309.test()

console.log(course['prof'])


course['quiz1'] = 'Jan 22'
console.log(university)
