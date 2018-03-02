
var mysql=require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(error){
  if(error){
    return console.log("Error connecting "+error.stack);
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;

