// // Boolean

// // Strings and numbers
// const two = 2;
// const name = 'Anthony';

// // Using another data
// // Best analogy to have in your mind
// // Flicking a light switch on = true, off = false
// // light switch can only have 2 states on or off - same with boolean

// const myExistence = true;
// const currentlyHungry = false; // have I had enough sleep today

// // Strict Equality
// const foodWanted = 'Big Mac';
// const mcdonaldsOffers = 'Big Mac';
// console.log(foodWanted === mcdonaldsOffers);
// console.log('Big Mac' === 'Big Mac');

// // Why use Strict Equality?
// const bigMacsAvailable = 3;
// const mcdonaldsBigMacs = '3';

// console.log(foodWanted == mcdonaldsOffers); // true
// console.log(3 == '3'); // true
// console.log(foodWanted === mcdonaldsOffers); // false
// console.log(3 === 3); // true

// More than
const burgers = 3;
const stillHungry = burgers > 2;
console.log(stillHungry);

// Extend hungry analogy
const needsFeeding = (hamburgerAmount) => {
	return hamburgerAmount >= 3; // more than or equal to
};

const feedAnthony = needsFeeding(2);

console.log(feedAnthony);

const question = 'Are you still hungry?';
const myAnswer = `It's ${needsFeeding}`;
console.log(question, myAnswer);
