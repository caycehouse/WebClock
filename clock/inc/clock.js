<!--

function displayDate() {

	var d = new Date();

	var curr_hour = d.getHours();
	var curr_min = d.getMinutes();
	var curr_seconds = d.getSeconds();

	if (curr_hour > 12) {
		var hourModified = curr_hour - 12;
		if (hourModified < 10) {
			var hourModified = "0" + hourModified;
		}
	} else {
		if (curr_hour < 10) {
			var hourModified = "0" + curr_hour;
		} else {
			var hourModified = curr_hour;
		}
	}

	if (curr_min < 10) {
		var curr_min = "0" + curr_min;
	}

	if (curr_seconds < 10) {
		var curr_seconds = "0" + curr_seconds;
	}

	var myTime = (hourModified + " : " + curr_min + " : " + curr_seconds);

	document.getElementById('time').innerHTML = myTime;
}

window.setInterval(function() {
	displayDate();
}, 1000);

//-->