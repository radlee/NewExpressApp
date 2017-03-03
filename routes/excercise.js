exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from excercises', [], function(err, results) {
        if (err) return next(err);
		res.render( 'current', {
				no_exercises : results.length === 0,
				excercises : results,
		});
      });
	});
};
