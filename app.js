var express = require('express')
var app = express()
app.listen(3000, function() {
  console.log("start! express server on port 3000");
});

console.log('end of server code...') 
app.get('/', function(req,res) {
  res.sendfile(__dirname + "/public/main.html")
}) 