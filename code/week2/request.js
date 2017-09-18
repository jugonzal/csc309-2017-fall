//curl https://reqres.in/api/users?delay=3

let request = require('request')

function getUsers(foundUsers) {

  let query = "https://reqres.in/api/users?delay=3"
  request.get(query, function(error, response, body) {
    if (error) {
      return error;
    }

    if (response.statusCode === 200) {
      let fullData = JSON.parse(body);
      foundUsers(fullData.data);
    }

  });
 }

 getUsers(function(allUsers) {
  console.log("Found Users: ", allUsers)
 })

console.log("I'm done with everything!!!")