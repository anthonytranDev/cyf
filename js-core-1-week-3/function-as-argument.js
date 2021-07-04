// Idea of implementation
// Idea of abstraction
// Usefulness and utility

const numberList = [1, 2, 3];

// implementation example
function sum(numberArray) {
	let value = 0;

	for (let i = 0; i < numberArray.length; i++) {
		value += numberArray[i];
	}

	return value;
}

// Function as an argument

function plusOne(numberArray, callback) {
	let array = [];

	for (let i = 0; i < numberArray.length; i++) {
		array.push(numberArray[i] + 1);
	}

	return callback(array);
}

// function plusOne(numberArray, callback) {
// 	let array = [];

// 	for (let i = 0; i < numberArray.length; i++) {
// 		array.push(numberArray[i] + 1);
// 	}

// 	if (typeof callback === 'function') {
// 		array = callback(array);
// 	}

// 	return array;
// }

const numbers = [3, 1, 2];

function stringify(numberArray) {
	let stringArray = [];

	for (let i = 0; i < numberArray.length; i++) {
		stringArray.push(`${numberArray[i]}`);
	}

	return stringArray;
}
// ([1,2,3], function stringify)
// called a callback, as we calling the function after
const stringifyNumbers = plusOne(numbers, stringify);

console.log(stringifyNumbers);
