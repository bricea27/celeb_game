// make sure that you npm install express --save
var express = require('express')
var app = express();

var celeb_object = {
  results: {
    "profession": " ",
    "known_for": " ",
    "gender": " ",
    "first letter of first name": " ",
    "extra hint": " "
  }
};

app.get('/', function(req, res){
  res.send(celeb_object);
});

app.get('/correct', function(req, res){
  res.send({msg: "Thayat Is Correyect"});
});

app.get('/:anything_else', function(req, res){
  res.send({msg: "Dust Yourself Off and Try Again"});
});

app.listen(3000);

console.log('listening on port 3000!');
