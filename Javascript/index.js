console.log("Hello, welcome to the introduction!");

console.log("I'm learning JavaScript");

console.log("Hello" + " and " + "Goodbye"); // No error: strings are defined

// Exercise

// Create an array named colors that include the 'red', 'green, and 'blue' colors.

// First, add a 'black' color after the last index of the array. Then print the array.

// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

// Finally, add the color 'yellow' on the first index of the array, then print the array.

let colors = ['red', 'green', 'blue'];

colors.push('black');
console.log(colors);

colors.splice(colors.indexOf('red'), 1);
let greenIndex = colors.indexOf('green');
let blueIndex = colors.indexOf('blue');
[colors[greenIndex], colors[blueIndex]] = [colors[blueIndex], colors[greenIndex]];
console.log(colors);

colors.unshift('yellow');
console.log(colors);



// control flows (cnditionals) in javascript



































// if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}