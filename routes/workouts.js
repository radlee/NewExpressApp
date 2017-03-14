//Define a function that will display the data from the 'workouts' table--
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		//Connect to mysql database and SELECT data from 'workouts' table--
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

			//if there is no input for workout redirect with a flash message

			// if(data.workout === ''){
			// 		res.redirect('/add_workout/add')
			// 		next();
			// }
			// else {

				//Continue to INSERT the Data
				
			// }

			connection.query('INSERT INTO current set ?', data, function(err, results){
				if(err) return next(err);
				res.redirect('/current');
			});

			connection.query('INSERT INTO workouts set ?', data, function(err, results){
				if(err) return next(err);
				next();
			})
		})
	}
