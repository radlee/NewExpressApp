exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from workouts', [], function(err, results) {
        if (err) return next(err);
		res.render( 'prev_workouts', {
				no_workouts : results.length === 0,
				workouts : results,
		});
      });
	});
};

exports.showAdd = function(req, res){
	res.render('add_workout');
};

exports.add = function (req, res, next){
	req.getConnection(function(err, connection){
			if(err) return next(err);
			var input = req.body;
			var data = {
				the_date : input.the_date,
				workout : input.workout,
				duration : input.duration
			}

		connection.query('INSERT INTO current set ?', data, function(err, results){
			if(err) return next(err);
			res.redirect('/current');
		})
	})
}
