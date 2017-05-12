//Import node_modules and your routes/functions
var express = require('express');
var cool = require('cool-ascii-faces');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

//Start Express app
var app = express();


//Configure BodyParser to accept input from the browser--

app.use(bodyParser.json()); //Support json encoded bodies--
app.use(bodyParser.urlencoded({ extended: true }));

//Configure Handlebars as a view engine--

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configure ExpressJs to display content from static files--

app.use(express.static(__dirname + '/public'));

//Define Error Handler to catch them and Display them on the browser--

function errorHandler(err, req, res, next){
    res.status(500);
    res.render('error', {error: err});
}

//Simple Routing 1.1--

app.get('/', function(req, res, next){
   res.render('home');
});
app.get('/blog', function(req, res, next){
    res.render('blog');
});

//Another Level routing--



app.use(errorHandler);

// Start the server

var port = process.env.CRUD_PORT_NR || 3000;
app.listen(port, function(){
    console.log("http://localhost: " + port);
})
