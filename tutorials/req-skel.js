var request = require('request')

request.get('URL-HERE', function (err,res, body) {
  if(err) {
    console.log(err)
  } else {
    data = JSON.parse(body) 

		//Modify this to access different JSON fields
    console.log(data) 
  }
});

