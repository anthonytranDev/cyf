const daysOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

function workingDay(day) {
	return day + ' is a working day';
}

function weekendDay(day) {
	return day + ' is at the weekend!';
}

for (let i = 0; i < daysOfWeek.length; i++) {
	// i = 5, daysOfWeek.length = 7
	if (i < 5) {
		let day = workingDay(daysOfWeek[i]);
		console.log(day);
	} else {
		let day = weekendDay(daysOfWeek[i]);
		console.log(day);
	}
}
