
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
  burger.selectAll(function(data){
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function(req,res){
  burger.updateOne({ devoured: req.body.devoured}, function(result){
    if(result.changedRows == 0){
      return res.status(404).end();
    }else{
      res.status(200).end();
    }
  });
});

router.post("/api/burgers", function(req,res){
  burger.insertOne(["burger_name"],[req.body.burger_name], function(result){
    res.json({id:result.insertedId });
  });
});

module.exports = router;

