exports.calculateDays = function(req, res, next) {
var interval = setInterval(function() {
var hundredthDay = new Date();
//Set the Hundredth Day--
hundredthDay.setDate(hundredthDay.getDate() + 100);
  var now = new Date();
  var distance = hundredthDay - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //Reset Current time to Zero and Start Countng Up to Day #100--
  var today = (100-days);
  var this_hour = (23-hours);
  var this_minute = (59-minutes);
  var this_second = (59-seconds);
  var results = [{
    dayNumber : today,
    toDay : now,
    this_minute : this_minute,
    this_hour : this_hour,
    endDay : hundredthDay
  }]
  console.log(results);
  res.render("home", {key : results})
  next();
}, 1000);
}
