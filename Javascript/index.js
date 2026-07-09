// console.log("Hello, welcome to the introduction!");

// console.log("I'm learning JavaScript");

// console.log("Hello" + " and " + "Goodbye"); // No error: strings are defined

// Exercise

// Create an array named colors that include the 'red', 'green, and 'blue' colors.

// First, add a 'black' color after the last index of the array. Then print the array.

// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

// Finally, add the color 'yellow' on the first index of the array, then print the array.

// let colors = ['red', 'green', 'blue'];

// colors.push('black');
// console.log(colors);

// colors.splice(colors.indexOf('red'), 1);
// let greenIndex = colors.indexOf('green');
// let blueIndex = colors.indexOf('blue');
// [colors[greenIndex], colors[blueIndex]] = [colors[blueIndex], colors[greenIndex]];
// console.log(colors);

// colors.unshift('yellow');
// console.log(colors);



// control flows (cnditionals) in javascript

// Two types of control flow
// 1. Conditional statements (if, else if, else)
// 2. Loop statements (for, while, do-while)

// Coditional => if else andswitch case statement
// if (condition) {
    // execute this code if the condition is true
    // }
//  example
//   Suppose you want to go on a Vacation that requires 5000 dollars
//  Print "You have the money for this trip. let's go!" 
//  Balance = 7000

// let balance = 7000;
// if (balance >= 5000) {
//     console.log("You have the money for this trip. let's go!");
// } else {
//     console.log("You don't have enough money for this trip.");
// }

let balance = 4999;
if (balance >= 8000) {
    console.log("You have the money for this trip. let's go!");
} else if (balance >= 5000) {
    console.log("You dey manage");
} else if (balance > 3000) {
    console.log("You only have enough money for a staycation");
} else {
    console.log("Nobody poor pass you!");
}

console.log("The end!");

// switch case

let age = 15;
// switch example
switch (age) {
    case 10:
        console.log("Age is 10");
        break;
    case 20:
        console.log("Age is 20");
        break;
    default:
        console.log("Age is neither 10 nor 20");
}
// another switch example
switch (age) {
    case 10 + 10:
        console.log("Age is twenty");
        break;
}

    switch (0) {
        case 0:
            console.log("Value is one");
            break;
        case 1:
            console.log("Value is Zero");
            break;
        default:
            console.log("No matching case");
    }

    // || or &&     

    let myFood = "Banana";
    if (myFood === "Banana" || myFood === "Apple") {
        console.log("Eat fruits everday to keep you healthy");
    }

    if (myFood === "Chocolate Cake") {
        console.log("Eat Fruits everyday to keep you healthy");
    }
    