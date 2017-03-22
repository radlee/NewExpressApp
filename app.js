//Import node_modules and your routes/functions
var express = require('express');
var exphbs = require('express-handlebars');
var myConnection = require('express-myconnection')
var bodyParser = require('body-parser');
var mysql = require('mysql');
var workouts = require('./routes/workouts');
var current = require('./routes/current');
var moment = require('moment');
var count = require('./public/js/countDays');

//Start Express app

var app = express();
moment().format();

//My SQL --
var dbOptions ={
 host : 'localhost',
 user : 'root',
 password : 'password',
 port : 3306,
 database : 'my_db'
 };
// END MYSQL --

//Configure BodyParser to accept input from the browser--

app.use(bodyParser.json()); //Support json encoded bodies--
app.use(bodyParser.urlencoded({ extended: true }));

//Configure Handlebars as a view engine--

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configure ExpressJs to display content from static files--

app.use(express.static(__dirname + '/public'));
app.use(myConnection(mysql, dbOptions, 'single'));

//Define Error Handler to catch them and Display them on the browser--

function errorHandler(err, req, res, next){
    res.status(500);
    res.render('error', {error: err});
}
console.log("count----");
console.log(count);
console.log(workouts.show);

//Simple Routing 1.1--

app.get('/', function(req, res, next){
   res.render('home');
});
app.get('/events', function(req, res, next){
    res.render('events');
});

//Another Level routing--

app.get('/current',count.calculateDays);
app.get('/prev_workouts', workouts.show);
app.get('/add_workout/add', workouts.showAdd);
app.post('/add_workout/add', workouts.add);
app.get('/current', current.show);
app.get('/current', current.show);
app.get('/current/add', current.showAdd);

app.use(errorHandler);

// Start the server

var port = process.env.CRUD_PORT_NR || 3000;
app.listen(port, function(){
    console.log("http://localhost: " + port);
})
