
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
//app.use(bodyParser.text());
//app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(express.static("./public"));

var routes = require("./controllers/burgers_controller.js")
app.use("/", routes);

app.listen(PORT, function() {
  console.log("EXPRESS: listening on port: " + PORT);
});

