'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
var myConnection = require('express-myconnection')
var bodyParser = require('body-parser');
var mysql = require('mysql');
var workouts = require('./routes/workouts');
var current = require('./routes/current');

var app = express();

//My SQL ------------------------------------
var dbOptions ={
  host : 'localhost',
  user : 'root',
  password : 'password',
 port : 3306,
  database : 'my_db'
};
// connection.connect();
// END MYSQL ----------------------------------

//Configure BodyParser
app.use(bodyParser.json()); //Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //Support encoded bodies


//Configure Handlebars as a view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configure ExpressJs to display content from static files
app.use(express.static(__dirname + '/public'));
app.use(myConnection(mysql, dbOptions, 'single'));

function errorHandler(err, req, res, next){
  res.status(500);
  res.render('error', {error: err});
}

//Simple Routing 1.1
app.get('/', function(req, res, next){
  res.render('home');
});

app.get('/prev_workouts', workouts.show);
app.get('/add_workout/add', workouts.showAdd);
app.post('/add_workout/add', workouts.add);

app.get('/current', current.show);
// app.get('/current/add', current.add);


// app.get('/workouts/current', function(req, res, next){
//   res.render('current');
// })


app.use(errorHandler);
var port = process.env.CRUD_PORT_NR || 3000;
app.listen(port, function(){
  console.log("Listening on port " + port);
})
