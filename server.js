var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(config.port,process.env.IP,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("listing on port "+config.port + process.env.PORT + "and IP : " + process.env.IP);
        
    }
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/pizza', function (req, res) {
  res.send('Hello Pizza!');
});