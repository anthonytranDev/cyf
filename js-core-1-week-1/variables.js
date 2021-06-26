// Declaring
var takeaways;

console.log(takeaways);

// Assigning
takeaways = 7;

console.log(takeaways);

// Reassigning
takeaways = 2;

console.log(takeaways);

// `typeof` - you can do type checks
console.log(typeof takeaways);

// reasons for variables
// 1) reuse
// 2) changability
var distance = 2;
var units = "metres";

// What if one day my walking distance becomes my
var walkingDistance = "Today I've walked " + distance + " " + units;
var hikingDistance = "The most I've ever hiked is " + distance + " " + units;

console.log(walkingDistance);
console.log(hikingDistance);

// String Templates - simpler way to include
walkingDistance = `Today I've walked ${distance} ${units}`;
hikingDistance = `The most I've ever hiked is ${distance} ${units}`;

console.log(walkingDistance);
console.log(hikingDistance);

// var, const, let
// industry standard to use const & let

let supermarketItems = ""
const firstName = "Anthony"

const lastName; // need to declare and assign a constant

// Hoisting
// Won't go into this, will be part of your cheatsheet
var fullName; // <-- you don't want to use this

// In terms of how to name your variables
// Quick Cheatsheet if you guys want


