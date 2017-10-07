var express = require("express");

var app = express();

app.set("view engine", "jade");

var route = require("./routing/route.js");

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("index");
});

app.use("/page", route);

//
app.listen(8080,function(err){
	console.log("Servidor iniciado en el puerto 8080");
	
});

////
