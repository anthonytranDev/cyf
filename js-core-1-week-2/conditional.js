const messageAvailable = true;

// basic boolean value
if (messageAvailable) {
	console.log("I'm still hungry!");
	console.log('Arggghhhh...');
}

// What is actually going on
// evaluating to a boolean value - either true or false
if (false) {
	console.log("I'm still hungry!");
	console.log('Arggghhhh...');
}

// Mcdonald's cashier
// if statement
const orderWanted = true;

if (orderWanted === true) {
	console.log(`${orderWanted} are still available`);
}
// Break down: if statement
if ('French Fries' === 'Big Mac') {
	console.log(`${orderWanted} are still available`);
}
// if (false) {
// 	console.log(`${orderWanted} are still available`);
// }

// if ... else statements
const orderWanted = 'French Fries';

if (orderWanted === 'Big Mac') {
	console.log(`${orderWanted} are still available`);
} else {
	console.log(`We don't have any ${orderWanted} available. Sorry`);
}

// Conditional stacking
const chickenNuggets = 6;
if (chickenNuggets === 4) {
	console.log("So that's a small box");
}
if (chickenNuggets === 6) {
	console.log("So that's a medium box");
}
if (chickenNuggets === 12) {
	console.log("So that's a large box");
}
if (chickenNuggets === 20) {
	console.log("So that's a share box");
}

// Functions and Conditional stacking
const replySizes = (amount) => {
	let message;

	if (amount === 4) {
		message = "So that's a small box";
	} else if (amount === 6) {
		message = "So that's a medium box";
	} else if (amount === 12) {
		message = "So that's a large box";
	} else if (amount === 20) {
		message = "So that's a share box";
	} else {
		message = "Sorry we don't have that kind of size";
	}

	return message;
};

// Functions reusing conditional
const mitchWantedNuggets = 6;
const anthonyWantedNuggets = 20;
console.log(replySizes(mitchWantedNuggets));
console.log(replySizes(anthonyWantedNuggets));
