// filter
// input
// - Array
// - Callback

// - output
// - Array of either same size or smaller
// - Gives back exact same values, and doesn't mutate them

// const booleans = ['Anthony', 'Mitch', 'Alexandre'];

// const valuesGivenBack = booleans.filter(function (element) {
// 	if (element.length > 5) {
// 		return true;
// 	}
// });

// console.log(valuesGivenBack);

// Takes an array of birthYears
// Uses console.log to print the message These are the birth years of people who can drive: [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
// Returns an array of people who can drive (remember, you can drive if you are 17 years or older)

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateValidYears(year) {
	const validYear = 2021 - year;
	if (validYear >= 17) {
		return year;
	}
}

const birthYearsDrivers = birthYears.map(calculateValidYears);

console.log(birthYearsDrivers);
