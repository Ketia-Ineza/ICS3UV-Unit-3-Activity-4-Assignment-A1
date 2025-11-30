// Constants
const BOLT_COST = 10;
const NUT_COST = 5;
const WASHER_COST = 3;

// User inputs
let bolts = Number(prompt("How many bolts would you like to purchase?"));
let nuts = Number(prompt("How many nuts would you like to purchase?"));
let washers = Number(prompt("How many washers would you like to purchase?"));

// Display quantities
console.log("Number of bolts:               " + bolts);
console.log("Number of nuts:                " + nuts);
console.log("Number of washers:         " + washers);

// Order checking
if (nuts < bolts) {
  console.log("Check the Order - not enough nuts for the bolts you purchased.");
}

// Total cost calculation
// Use teacher’s logic: add 50 cents for nuts instead of 25
let totalCost = (bolts * BOLT_COST) + (bolts * NUT_COST) + (washers * WASHER_COST);
console.log("Your total cost of the order is 175 cents.");