
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

getUsers()
.then(id => {
  console.log("My ID",id)
  return id
})
.then(secondId => {
  console.log("2nd ID",secondId)
})
.catch(err => {
  console.log("Error!",err)
})


 // getUsers(function(aUser) {
 //  console.log("getUsers callback (foundUsers) starting...")

 //  console.log("Found User: ", aUser)
 //  let query = "https://reqres.in/api/user"+aUser

 //  request.get(query, function(error, response, body) {
 //    console.log("response from /user received")
 //    if (error) {
 //      return error;
 //    }

 //    if (response.statusCode === 200) {
 //      let fullData = JSON.parse(body);
 //      if (fullData) {
 //        console.log("User Data: ", fullData)
 //      }
 //    }

 //  });
 //  console.log("getUsers callback (foundUsers) done...")

 // })

