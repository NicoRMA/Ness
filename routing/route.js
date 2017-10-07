var express = require("express");

var route = express.Router();

route.get("/",function(req,res){
	res.render("index");
});

route.get("/home",function(req,res){
	res.render("pages/home")
});

module.exports = route;