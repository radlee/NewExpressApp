exports.show = function(req, res, next){
  req.getConnection(function(err, connection){
    if(err) return next(err);
    connection.query('SELECT workout, duration from current', [], function(err, results){
      if(err) return next(err);
      res.render('current', {
        no_workouts : results.length ===0,
        workouts : results
      });
    });
  });
};

exports.showAdd = function(req, res){
	res.render('current');
};
