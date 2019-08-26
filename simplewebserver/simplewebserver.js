/*
var http = require('http');
http.createServer(function (req, res) {
  res.charset="UTF-8";
  //res.setDefaultEncoding('utf8');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('مرحبا');
  res.end();
}).listen(8080);
*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World مرحبا Marhaba');
});

app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

var server = app.listen(8080, () => {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at %s", port)
});

/*
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at %s", port)
}); */

//app.listen(8080, () => console.log("App listening at port ::" +  ));