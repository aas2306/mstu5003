// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

// var numPizzas;
// var subTotal;
// var total;
var hasDiscount = Boolean('false'); // Hint for prompts

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE = 0.8;
var FLATRATE = 8;
var TAXRATE = 1.15;
// Set the flat rate per pizza

var customerName = prompt('What is your name?');
var numPizzas = prompt("How many pizzas would you like?");
numPizzas = Number(numPizzas);
var hasDiscount = prompt("Do you have a discount code? Type yes or no.").toLowerCase();
if (hasDiscount === "yes") {
    var askDiscountCode = prompt("What is your discount code?");
    hasDiscount = true;
} else {
    hasDiscount = false;
}
/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */


/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.

function checkDiscountCode(discountCode) {
    while (hasDiscount) {
        if (DISCOUNTCODE === discountCode) {
            alert("Your discount code worked.");
        } else {
            alert("Your discount code did not work.");
            hasDiscount = false;
        }
    }
}

checkDiscountCode(askDiscountCode);

// // // Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.

function calculateSubTotal(numPizzas) {
    if (hasDiscount === "yes") {
        return FLATRATE * numPizzas * DISCOUNTRATE;
    } else {
        return FLATRATE * numPizzas;
    }
}

var subTotal = calculateSubTotal(numPizzas);
// console.log(subTotal);

// Function that calculates the total based on subtotal and tax rate. It should return a number;

// don't know why this function only worked when setting it as a variable, instead of foing "function calculateTotal(...)"
var calculateTotal = function(subTotal) {
    return (Math.floor(subTotal * TAXRATE * 100) / 100);
    // return subTotal*TAXRATE;
};

var total = calculateTotal(subTotal);
// console.log(total);

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.

function receipt(customerName, numPizzas, DISCOUNTRATE, subTotal, total) {
    console.log("Receipt:");
    console.log("Customer name: " + customerName);
    console.log("Number of pizzas ordered: " + numPizzas);
    if (hasDiscount === "yes") {
        console.log("Discount received: " + (1 - DISCOUNTRATE) * 100 + "%");
    } else {
        console.log("No discount");
    }
    console.log("Order subtotal: $" + subTotal);
    console.log("Order total: $" + total);
}

receipt(customerName, numPizzas, DISCOUNTRATE, subTotal, total);


/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */





// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
    document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);

// Can you transform your code so that instead of to the console, it writes to the webpage?
