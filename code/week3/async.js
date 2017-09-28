
let request = require('request')

function getUsers(foundUsers) {

  console.log("getUsers starting...")
  let query = "https://reqres.in/api/users?delay=3"

  request.get(query, function(error, response, body) {
    console.log("response from /users received")
    if (error) {
      return error;
    }

    if (response.statusCode === 200) {
      let fullData = JSON.parse(body);
      if (fullData.data) {
        console.log("ID: ", fullData.data[0].id)
      }
      foundUsers(fullData.data[0].id);
    }

  });
  console.log("getUsers done...")

 }

// assuming we only need to make one call, things are simple...
// 
// getUsers(function(aUser) {
//   console.log("getUsers callback (foundUsers) starting...")
// })

// but if we need to wait for the response in order to 
// do something else, then we start nesting callbacks
// and code readibility gets thougher.
 getUsers(function(aUser) {
  console.log("getUsers callback (foundUsers) starting...")

  console.log("Found User: ", aUser)
  let query = "https://reqres.in/api/user"+aUser

  request.get(query, function(error, response, body) {
    console.log("response from /user received")
    if (error) {
      return error;
    }

    if (response.statusCode === 200) {
      let fullData = JSON.parse(body);
      if (fullData) {
        // this is the inner-most are of the code
        // or the one executed at the very end.
        console.log("User Data: ", fullData)
      }
    }

  });
  console.log("getUsers callback (foundUsers) done...")

 })

console.log("Done with everything")