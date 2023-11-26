// comparison operators "===", "higher >", "lower <", "lot equals !=="
// "==" equality of value and "===" equality of value and data type

// exmaple 1-
var age = 30 
age == 30 // true
age === 30 // true
age == "30" // true
age === "30" // false

// other examples 2- of comparison operators
var totalPrice = 19
totalPrice > 20 // false
totalPrice < 20 // true
totalPrice <= 20 // true

// other examples 3- to understand comparison using condition if statement

var totalPrice = 19;
var shippingCost;

if (totalPrice > 20) {
    shippingCost = 0
} else {
    shippingCost = 5
}

if (totalPrice <= 20) {
  shippingCost = 5
} else {
    shippingCost = 0
}

// examples 4-  continue ...
// below 10 euros => 5 euro shipping cost
// below 20 euros => 3 euro shipping cost
// otherwise => 0 euro

if (totalPrice <= 10) {
  shippingCost = 5
} else if (totalPrice <= 20)
  shippingCost = 3
} else {
    shippingCost = 0
}

// examples 5- continue ...
// todayDate === birthdayDate AND birthdayDisplayed === true

if (todayDate === birthdayDate && birthdayDisplayed === true) {
  // show notification
} else {
  // do nothing
}

// examples 6- continue
// if totalPrice over 20 euros or you have amazonPrime

if (totalPrice > 20 || amazonPrime === true) {
  // give free shipment
} else {
    // dont
}

// use negation would be

if (!(totalPrice > 20 || amazonPrime === true)) {
  // give free shipment
} else {
    // dont
}









  


