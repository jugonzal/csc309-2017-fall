const express = require("express");

const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

function myLogger(req, res, next) {
  console.log('LOG:',req.method,req.url,req.body)
  next()
}

app.use(myLogger)

// Generate Apache Common Log format
app.use(morgan('common'));



// Support Routes
app.get('/', function (req, res) {
  // res.send ("Welcome to our Server")
  res.redirect('/courses');
});

app.get("/courses/create", (req, res) => {
  res.render("courses/create");
});

app.get("/courses/:id/edit", (req, res) => {
  res.render("courses/edit", {
    course: db.findOne(req.params.id)
  });
});

// RESTful Routes
app.get("/courses", (req, res) => {
  res.render("courses/index", {
    courses: db.findAll()
  });
});

app.post("/courses", (req, res) => {
  db.add({
    id: req.body.code,
    when: new Date(),
    what: req.body.what,
    who: req.body.who
  });
  res.redirect("/courses")
});


app.put("/courses/:id", (req, res) => {
  db.add({
    id: req.params.id,
    when: new Date(),
    what: req.body.what,
    who: req.body.who
  });  
  res.redirect("/courses");
});

app.delete("/courses/:id", (req, res) => {
  db.remove(req.params.id)
  res.redirect("/courses");
});3

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const db = (function() {
  let database = {
    'CSC309': { 
      id: 'CSC309',
      when: new Date(),
      what: 'Programming on the Web',
      who: 'Gonzalez'
    }
  };

  return { // public interface to the DB layer

    findAll: function () {
      return database
    },
    findOne: function (i) {
      return database[i]
    },
    add: function(r) {
      database[r.id] = r
    },
    remove: function(i) {
      delete database[i]
    }
  };
})();




  


