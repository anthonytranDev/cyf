// map
// Inputs
// - Callback
// - Array

// Output
// - Array - of the same length as the original

// forEach
// Inputs
// - Callback
// - Array

// Output
// - undefined

// function givesBackElement(element) {
// 	return element;
// }

// const names = ['Anthony', 'Mitch', 'Alexandre'];

// const uppercaseNames = names.map(function (element) {
// 	return element.toUpperCase();
// });

// console.log(uppercaseNames);
// console.log(names);

//Q1. You can drive in the UK at the age of 17.

// Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
// Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
// console.log the answers

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// 1964 -> 'Yes this person can drive'
// 2008 -> "No isn't allowed to drive"
// 1999 -> 'Yes this person can drive'

let drivingValidity = [
	{
		name: 'Anthony',
		age: '17',
		phone: '01618338532',
	},
	{
		name: 'Humail',
		age: '24',
		phone: '01618338532',
	},
];

function canDrive(birthYear) {
	const appropriateYear = 2021 - birthYear;

	if (appropriateYear >= 17) {
		drivingValidity.push('Yes this person can drive');
	} else {
		drivingValidity.push("No isn't allowed to drive");
	}
}

birthYears.forEach(canDrive);

console.log(drivingValidity);
