const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var todoItem = [];

var options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}

var todayDate = new Date();

var today = todayDate.toLocaleDateString("en-US", options);

app.get("/", function (req, res) {
  res.render('list', {
    date:today,
    newItem: todoItem
  })
});

app.post("/", function(req, res){
  if (req.body.todo !== "") todoItem.push(req.body.todo);
  console.log(todoItem);
  res.redirect("/");

})

app.listen(3000, function (req, res) {
  console.log("server started on port 3000");
});
