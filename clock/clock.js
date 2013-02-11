function displayDate() {

var d = new Date();

var curr_hour = d.getHours();
var curr_min = d.getMinutes();
var curr_seconds = d.getSeconds();

if (curr_hour > 12) {
	var hourModified = curr_hour - 12;
} else {
	var hourModified = curr_hour;
}

var myTime = (hourModified + " : " + curr_min + " : " + curr_seconds);
	document.getElementById('time').innerHTML = myTime;
}

window.setInterval(function() {
displayDate();
}, 1000);