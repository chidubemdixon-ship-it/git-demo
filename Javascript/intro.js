// This is a simple JavaScript program that prints "Hello, World!" to the console.
console.log("Hello, World!");

console.log("Hello, welcome to the introduction!"); 
// let president = "George Washington";
// let message =   "Hello, welcome to the introduction!"
// console.log(message);
// message ="Nice weather!";
// console.log(message);

// This is a simple JavaScript program that prints "Hello, World!" to the console.
console.log("Hello, World!");
// declare a var that can change
// let president = "George washington";
// let message = "Hello World!";

// how to name a var
//  the code below is a valid way to name a var
// message_2,  _message3 but you cant start with a number and you cant use a symbol or hyohen to name a var

// camelCase is a common way to name a var in JavaScript. For example: myVariableName

// let accountNumber = "1234567890";
// let myAwesomeVariable;
// let my_variable_awesome;

// Const is a variable that cannot be changed
if (true) {
    const PI = 3.142;
}

//let area = PI * R * R;

//algorithm to calculate the area of a circle
// VAR
//   Radius, AREA:FLOAT
//   PI:FLOAT
//   BEGIN
//   AREA = PI * R * R
//   PRINT (AREA)
// END

// DIFF var, let, const
// var is function scoped, let and const are block scoped
// var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared

// if (true) {
//     var name = "Ejiekpe Chidubem";
//     let phone_Number = "08053322926";
//     const email = "ejiekpe.chidubemdikson123@gmail.com";
    
// }

//  if (true) {
//       let name = "John";
// }
// cnsole.log(name); // Error: name is not defined

let F_name = "Ejiekpe Chidubem";
let topic = "JavaScript today";
console.log("The message is: " + F_name + " is learning " + topic); // No error: strings are defined

// template literals
let senator_1 = "Abiodun";
let topic_1 = "Baking";

console.log(`${senator_1} is learning ${topic_1} today`);

let score = "10" + "30";
console.log(score);

// Boolean
let on = true;
let off = false;

// undefined
// null 
// 0
// let perimeter = null;
// let area = 0;
// console.log(area);

let n1 = 1;
let n2= 2;

// console.log(n1 + n2);

let f = 1.2;
let z = 2.35;

// console.log(f + z);
// type coercion
// convert number from string to integer
let t = "7";
let v = 5;
let y;
// Convert t to integer
t = Number(t);
y = t + v;
// console.log(typeof y); 
// console.log(y); // 12

1 + "1" // "11"
// let a = [1 ,2] + "1"
// console.log(a); // "1,21"
// console.log(typeof(a)); // "1,21"
// true + "1" // "true1"


var i = { a: 1 } + "1" // 1
var j= "1" + { a: 1 } // "1[object Object]"
var k= true + { a: 1 } // "true[object Object]"
var l= { a: 1 } + 1 // 1

// console.log(i); // 
// console.log(j); // 
// console.log(k);
// console.log(l); //"

true + 1 // 1+1 = 2
false + 1 // 0+1 = 1

// arithmetic operators
// assigment operators
// comparison operators

// console.log(9 == 9);
// console.log(9 != 20);
// console.log(2 > 10);
// console.log(2 < 10);
// console.log(5 >= 10);
// console.log(5 <= 10);
// console.log(10 <= 10)

// console.log("ABC" == "ABC");
// console.log("ABC" == "abc");
console.log("9" == 9);
console.log("9" === 9); 


// Assingnment Read about logical operators
// logical operators

// Arrays
let bird = [];
let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];
let mixedArray = ['Bird', true, 10, 5.17]

// console.log(birds[0]);
// console.log(birds[3]);

// console.log(mixedArray[3]);
console.log(birds);

// special methods for array manipulation
birds[2] = "Underbird";
// console.log(birds)

// push() add element to the end of an array
bird.push('Turkey','Sparrow');
bird.push('Pigeon');
console.log(bird);

// console.log(bird[1])
// console.log(mixedArray)

// pop to remove the last element of an array
bird.pop();
console.log(bird);

// unshift() add element to the beginning of an array
let fishes = ['Salmon', 'Goldfish', 'Tuna'];

fishes.unshift('Sardine');

console.log(fishes);

// to remove in the beginning of an array we use shift()
fishes.shift();

console.log(fishes);


let pos = fishes.indexOf('Tuna');

console.log(pos)

// Exercise
// Create an array named colors that include the 'red', 'green, and 'blue' colors.

// First, add a 'black' color after the last index of the array. Then print the array.

// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

// Finally, add the color 'yellow' on the first index of the array, then print the array.