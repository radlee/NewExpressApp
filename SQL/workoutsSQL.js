// Connecting Sequel
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'my_db'
});

// connection.connect
var sql = "INSERT INTO workouts (the_date, workout, duration) VALUES ?"
var workouts = [
  ["12-November-2017", "Running", "2.30"],
  ["13-November-2017", "Sit Ups", "1.45"],
  ["14-November-2017", "Push Ups", "0.30"],
  ["15-November-2017", "Dips", "0.45"]
];

// Insert Query
connection.query(sql, [workouts], function(err){
  if(err) throw err;
});

connection.query("SELECT * FROM workouts", function(err, results){
  if(err){
    console.log(err);
    return;
  }
  // console.log(results);
});
connection.end();
