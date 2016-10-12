var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");


var app = express();

app.listen(process.env.PORT,process.env.IP,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("listing on port " + process.env.PORT + "and IP : " + process.env.IP);
        
    }
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/pizza', function (req, res) {
  res.send('Hello Pizza!');
});