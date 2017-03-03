var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


var app = express();


//Configure bodyParser
app.use(bodyParser.json()); //Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //Support encoded bodies


//Configure ExpressJs to display content from static files
app.use(express.static('public'));

//Configure Handlebars as a view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Simple Routing
app.get('/', function(req, res){
  res.send('Hello World')
});

//Respond to a Post Request on the root route (/), the apps home page
app.post('/', function(req, res){
  res.send('Got a POST Request')
});

//Respond to a PUT request to the /user route
app.put('/user', function(req, res){
  res.send('Got a PUT request at /user')
});

//Respond to a DELETE request to the /user route
app.delete('/user', function(req, res){
  res.send('Got a DELETE request at /user')
});


var port = 3000;
app.listen(port, function(){
  console.log("Listening on port " + port);
})
