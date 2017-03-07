// Connecting Sequel--
var mysql = require('mysql');
//Open Connection to mysql database to Start using it in javaScript--
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'my_db'
});
//Define all required filedls of this table and [insert] data--
//This table can Change Depending on the type of duty you give to it--
//This is the Master Table--
var sql = "INSERT INTO workouts (the_date, workout, duration) VALUES ?"
var workouts = [
  ["12-November-2017", "Running", "2.30"],
  ["13-November-2017", "Sit Ups", "1.45"],
  ["14-November-2017", "Push Ups", "0.30"],
  ["15-November-2017", "Dips", "0.45"]
];

// Insert Query, Populate Data into the 'workouts' table--
connection.query(sql, [workouts], function(err){
  if(err) throw err;
});
//Retun/Expose 'workouts' data for it to be ready to be used--
connection.query("SELECT * FROM workouts", function(err, results){
  if(err){
    console.log(err);
    return;
  }
  // console.log(results);
});
//Close mysql database connection--
connection.end();
