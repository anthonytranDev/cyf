// // Q1. Create a function called getWordLengths that takes an array of strings and returns an array of each string's length:
// // E.g.
// // getWordCounts(["hello","hey","a"]) should return [5,3,1]

// // input - string array
// function getWorkCounts(element) {
// 	return element.length;
// }

// // console.log(getWorkCounts(words)); // [5,3,1]
// // console.log(getWorkCounts(words));

// // const words = ['hello', 'hey', 'a'];

// const wordLengths = ['hello', 'hey', 'a'].map(function (element) {
// 	return element.length; // [5, 3, 1]
// }); // [5, 3, 1]

// console.log(wordLengths); // []

// Q2. Create a function called createNameTags that takes an array of strings and returns an array of name tags:
// E.g.
// createNameTags(['Mya','Dharma', 'Bimbola']) and returns [ 'Hello my name is Mya', 'Hello my name is Dharma', 'Hello my name is Bimbola' ];

// const array = ['Mya', 'Dharma', 'Bimbola'];
// const output = [
// 	'Hello my name is Mya',
// 	'Hello my name is Dharma',
// 	'Hello my name is Bimbola',
// ];

// // input `Mya` -> 'Hello my name is Mya',

// function helloMyName(name) {
// 	return `Hello my name is ${name}`;
// }

// const helloEveryone = array.map(helloMyName);

// console.log(helloEveryone);

// Q3. Create a function called stateItemAndIndex that takes an array of strings and returns an array of strings stating the name of the string and its position each time:
// E.g.
// stateItemAndIndex(['apple','banana','kiwi']) should return ['apple is at position 0','banana is at position 1, 'kiwi is at position 2']

// 'apple' -> 'apple is at position 0'

// function atPosition(fruit, index) {
// 	return `${fruit} is at position ${index}`;
// }

// const array = ['apple', 'banana', 'kiwi'];

// const fruitPositions = array.map(atPosition);
// console.log(fruitPositions);

// Q4. Create a function convertPricesToPounds that takes an array of numbers representing pence and returns an array of strings ( with the price in pounds to 2 decimal places )
// E.g.
// convertPricesToPounds([100,200,350,20]) should return ['£1.00','£2.00','£3.50','£0.20']

// 100 -> £1.00

// function convertPricesToPounds(price) {
// 	const pounds = price / 100;
// 	return `£${pounds.toFixed(3)}`;
// }

// const array = [100, 200, 350, 20];

// const conversions = array.map(convertPricesToPounds);

// console.log(conversions);

// convertPricesToPounds([100,200,350,20]) should return ['£1.00','£2.00','£3.50','£0.20']

// 100 -> '£1.00'

function convertPricesToPounds(price) {
	const pounds = price / 100;
	return `£${pounds.toFixed(2)}`; // string '£ number'
}

// console.log(convertPricesToPounds(100));

const prices = [100, 200, 350, 20];

const pounds = prices.map(convertPricesToPounds);

console.log(pounds);
