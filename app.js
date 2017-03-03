'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
// var mysql = require('mysql');
var previous = require('./routes/previous');

var app = express();

//My SQL ------------------------------------
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user : 'lee',
//   password : 'password',
//   database : 'my_db'
// });
//
// connection.connect();
// END MYSQL ----------------------------------

//Configure BodyParser
app.use(bodyParser.json()); //Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //Support encoded bodies

//Configure ExpressJs to display content from static files
app.use(express.static(__dirname + '/public'));

//Configure Handlebars as a view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Simple Routing 1.1
app.get('/', function(req, res, next){
  res.render('home', {layout: false});
});

app.get('/previous', function(req, res, next){
  res.render('previous', {layout: false});
})

var port = process.env.CRUD_PORT_NR || 3000;
app.listen(port, function(){
  console.log("Listening on port " + port);
})
