// // // Rather than figuring how the functions internals inside the function
// // // We then of course focus on what the
// // // - the array method is giving to us
// // // - how we can manipulate this data using anonymous function
// // // -

// // const numbers = [1, 2, 3];

// // const numbersMapped = numbers.map(function (element) {
// // 	return element;
// // });

// // const indexes = numbers.map(function (element, index) {
// // 	return index;
// // });

// // const originalArrays = numbers.map(function (element, index, originalArray) {
// // 	return originalArray;
// // });

// // // Array map inputs
// // // - Array - attach map method
// // // - Callback - pass a callback function

// // // - Array map outputs
// // // - An array of the same size/length, i.e it should have the same amount of elements

// // // console.log(numbersMapped);

// // // Skip over `this`

// // // array map function
// // // url - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// // let sum = 0;

// // const numbersLooped = numbers.forEach(function (element) {
// // 	console.log(element);
// // 	sum += element;
// // });

// const indexesLooped = numbers.forEach(function (element, index) {
// 	console.log(index);
// });

// const indexes = numbers.map(function (element, index) {
// 	return index;
// });

// const originalArrays = numbers.map(function (element, index, originalArray) {
// 	return originalArray;
// });

// console.log(sum);

// // Array forEach inputs
// // - Array - attach forEach method
// // - Callback - pass a callback function

// // - Array map outputs
// // - undefined

const names = ['Terry', 'Mitch', 'Craig'];

function giveIndex(element, index) {
	return element;
}

function map(callback) {
	const element = 'Mitch';
	const index = 1;
	return callback(element, index);
}

const indices = names.map(giveIndex);

console.log(indices);
