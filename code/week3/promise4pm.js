
let request = require('request')

function getUsers() {
  return new Promise((resolve, reject) => {
   console.log("getUsers starting...")
    let query = "https://reqres.in/api/users?delay=3"

    request.get(query, function(error, response, body) {
      console.log("response from /users received")
      if (error) {
        reject(error);
      }
      if (response.statusCode === 200) {
        let fullData = JSON.parse(body);
        if (fullData.data) {
          console.log("ID: ", fullData.data[0].id)
        }
        resolve(fullData.data[0].id);
      }
    });
    console.log("getUsers done...")
  })
}

function nextStep(aUser) {
  return new Promise((resolve, reject) => {

    console.log("nextStep starting...")

    let query = "https://reqres.in/api/user"+aUser

    request.get(query, function(error, response, body) {
      console.log("response from /user received")
      if (error) {
        reject(error);
      }

      if (response.statusCode === 200) {
        let fullData = JSON.parse(body);
        if (fullData) {
          resolve(fullData.page)
        }
      }
    });
    console.log("nextStep done...")
  })
 }

// getUsers()
// .then(function(someId) {
//   console.log("promise fulfilled...", someId)
//   nextStep(someId)
//   .then (allData => {
//     console.log("ALL DATA", allData)
//   })
// })
// .catch(error => {
//   console.log("something went wrong", error)
// })

Promise.all([getUsers(), nextStep(1)])
.then(allResolves => {
  console.log(allResolves)
})

console.log("Done with everything")

 

