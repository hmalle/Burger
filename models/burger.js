
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback){
    //selectAll(table, callback)
    orm.selectAll("burgers", function(res){
      console.log("Response: "+JSON.stringify(res)); //TODO:delete this
      callback(res);
    });
  },

  createOne: function(cols, vals, callback){
    orm.insertOne( "burgers", cols, vals , function(res){
      console.log("Response: "+JSON.stringify(res)); //TODO:delete this
      callback(res);
    });
  },

  updateOne: function(objColVals, condition ,callback ){
    orm.updateOne("burgers", objCoVals, condition, function(res){
      console.log("Response: "+JSON.stringify(res)); //TODO:delete this
      callback(res);
    });
  }
}

module.exports = burger;

