var express = require('express');  
const path = require('path');
var app = express();  
var bodyParser = require('body-parser');
const port = 8081;

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(express.static('public'));  

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

app.get('/success', function(req, res) {
    res.sendFile(path.join(__dirname, '/success.html'));
  });
app.get('/error', function(req, res) {
    res.sendFile(path.join(__dirname, '/error.html'));
});
app.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, '/signin.html'));
});
app.get('/logo.png',function(req,res){
  res.sendFile(path.join(__dirname,'logo.png'));
})
app.post('/login', urlencodedParser, function (req, res) {  

  response = {  
       em:req.body.email,  
       pass:req.body.password,
       ///erro:req.body.error
   };  

   if (response.em == "email@gmail.com" && response.pass == "123") {
    res.redirect('/success');
  } else {
  
    res.redirect('/error');
  }
})  

