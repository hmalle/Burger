
var connection = require("./connection");

function qnMarks(num){
  var arr=[];
  for(var i=0; i<num; i++){
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob){
  var arr=[];
  for(var key in ob){
    var value = ob[key];
    if(Object.hasOwnProperty.call(ob,key)){
      if(typeof val ==="string" && value.indexOf(" ") >=0){
        value = "'"+value+"'";
      }
      arr.push(key+"="+value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table ,callback){ 
    var dbQuery = "SELECT * FROM "+table+";";
    connection.query(dbQuery ,function(error,result){
      if(error){
        console.error("Error queying the database " +error.stack);
        return;
      }
      callback(result);
    });
  },

  insertOne: function(table, cols, vals, callback){
    var dbQuery = "INSERT INTO "+ table+ "("+cols.toString()+") VALUES("+qnMarks(vals.length)+")";
    connection.query(dbQuery,vals,function(error,result){
      if(error){
        throw error;
      }
      callback(result);
    });
  },

  updateOne: function(table,objColVals, condition, callback){
    var dbQuery = "UPDATE "+table+" SET "+objToSql(objColVals)+" WHERE "+condition;
    console.log("mysql_query_str: " + dbQuery);
    console.log("queryStr: "+dbQuery);
    connection.query(dbQuery ,function(error,result){ 
      if(error){ 
        throw error;
      }
      callback(result);
    }); 
  }
};

module.exports = orm;

