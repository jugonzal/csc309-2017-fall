// Last week we worked with CURL to make calls to a given API:
//  curl https://reqres.in/api/users?delay=3

// This week we start with Javascript and learn how to accomplish
// the same in a programmatic way.

// In this case, we'll use 'request', which is a very simple
// library that implements HTTP methods.
// As with any libraries used in Node.js you should use NPM, its package
// manager to install it before attempting to run this program.
// 
//    npm init -y 
//    npm install request --save
//
// Full 'request' documentation: https://www.npmjs.com/package/request

let request = require('request')

// This function is being declared to issue a HTTP GET to the given API.
// The function will "return" the found users ONLY when the response is 
// received by calling the callback function: foundUsers
function getUsers(foundUsers) {

  let query = "https://reqres.in/api/users?delay=3"

  // Think of this as a "CURL".
  request.get(query, function(error, response, body) {
    if (error) {
      return error;
    }

    // The HTTP status code 200 means the response is good,
    // but perhaps we should be careful to check other potential
    // safe status codes.   Some RESTful APIs may return 201 under
    // certain conditions.
    if (response.statusCode === 200) {
      let fullData = JSON.parse(body);
      if (fullData.data) {
        console.log("Last Name of first user: ", fullData.data[0].last_name)
      }
      foundUsers(fullData.data);
    }

  });
 }

// when calling our previously declared function, we are passing
// our callback, which in this case will instruct getUsers to 
// simply display all the results on screen.
 getUsers(function(allUsers) {
  console.log("Found Users: ", allUsers)
 })

// this output was put here on purpose to demonstrate the asynchronous 
// nature of the code above.  Notice that when running it, this message
// will appear before anything else.
console.log("I'm done with everything!!!")