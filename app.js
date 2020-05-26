var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function() {
  console.log("start! express server on port 3000");
});

app.use(express.static('public')) //퍼블릭 아래에 있는 파일들은 스테틱으로 구분된다
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //인코딩된(아스키 형태에 데이터만 전달) 유알엘을 처리


console.log('end of server code...') 
app.get('/', function(req,res) {
  res.sendFile(__dirname + "/public/main.html")
});

app.get('/main', function(req, res) {
  res.sendFile(__dirname + '/public/main.html')
});

app.post('/email_post', function(req,res) {
  //get : rew.param('eamil')
  console.log(req.body.email)
  res.send("<h1>welcome_" + req.body.email +  "</h1>")
})