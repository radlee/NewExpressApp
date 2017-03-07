//Define a function that will display the data from the 'current' table--
//The 'current' table is automaticall populated when a user enters a workout from the form.--
// When this 'show' method is called by the server/ app.js it will get the relevant data from the 'add_workout' handlebar--
exports.show = function(req, res, next){
  //Create a connection to mysql--
  req.getConnection(function(err, connection){
    if(err) return next(err);
    //Only Select the data you want to render on the 'current' page from the 'current' table--
    connection.query('SELECT workout, duration from current', [], function(err, results){
      if(err) return next(err);
      //Render the 'cuurent' page with the relevant data--
      res.render('current', {
        no_workouts : results.length ===0,
        workouts : results
      });
    });
  });
};
//We need to see this page after the render is done--
exports.showAdd = function(req, res){
	res.render('current');
};
