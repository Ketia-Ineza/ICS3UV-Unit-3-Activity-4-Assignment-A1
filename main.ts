// Constants
const BOLT_COST = 10;
const NUT_COST = 5;
const WASHER_COST = 3;

// User inputs
const bolts = Number(prompt("How many bolts would you like to purchase?"));
const nuts = Number(prompt("How many nuts would you like to purchase?"));
const washers = Number(prompt("How many washers would you like to purchase?"));

// Display quantities
console.log("Number of bolts:               " + bolts);
console.log("Number of nuts:                " + nuts);
console.log("Number of washers:         " + washers);

// Order checking
let orderOk = true;

if (nuts < bolts) {
  console.log("Check the Order - not enough nuts for the bolts you purchased.");
  orderOk = false;
}

if (washers < bolts) {
  console.log("Check the Order - not enough washers for the bolts you purchased.");
  orderOk = false;
}

if (orderOk) {
  console.log("Order is OK.");
}

// Total cost calculation
// Charge enough nuts and washers to match bolts if needed
const chargeNuts = nuts < bolts ? bolts : nuts;
const chargeWashers = washers < bolts ? bolts : washers;
const totalCost = (bolts * BOLT_COST) + (chargeNuts * NUT_COST) + (chargeWashers * WASHER_COST);

// Print total dynamically
console.log("Your total cost of the order is " + totalCost + " cents."); 