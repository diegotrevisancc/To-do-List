const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.get("/", function (req, res) {
    let day = date();    
    res.render('index', {currentDay: day, taskList: items}); 
    
})

app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(req, res) {
	console.log("Server started on port 3000");
})