"use strict";
var express = require('express');
var app = express();
var path= __dirname;
var viewsDir = path + "/views";
app.use(express.static('public'));

app.get('/', function(req,res){
    //res.send('Hello World!<br/> Testing new location!');
    res.sendFile(viewsDir + '/index.html');
});


app.listen(3000,function(){
console.log("Server is listening on 3000");
});
