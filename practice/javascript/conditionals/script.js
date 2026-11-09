/* 
  =================================================================================
  JS Comparison Operators Lesson
  =================================================================================
*/

// > more than


// >= more than or equal to


// < less than


// <= less than or equal to


// == equal to


// != not equal to


// === strict equality


// !== strict not equal to



// let x = 7;

// // > more than
// console.log (
//     x > 10,
//     x > 6
// );

// // >= more than or equal to
// console.log (
//     x >= 10,
//     x >= 7
// );

// // < less than
// console.log (
//     x > 10,
//     x > 6
// );

// // <= less than or equal to
// console.log (
//     x >= 10,
//     x >= 7
// );

// // ==equal to
// console.log (
//     x == 10,
//     x == 7
// );

// // !=equal to
// console.log (
//     x != 10,
//     x != 7
// );

// let y = "7";

// // === stictly (incluing type) equal to
// console.log (
//     x === y,
//     x === 7
// );

// // !== stictly not equal to (incluing type) 
// console.log (
//     x !== y,
//     x !== 7
// );

// // 
// console.log (
//     'A' < 'Z'
// );

// let a = 'time';
// let b = 'timing';
// // 
// console.log (
//     a > b, 'e' > 'i'
// );
// /*
// ### TASKS ###

// 1. Create two variables, called a and b. Assign the value 10 to a and 15 to b.
// Check to see if a is more than b, log the answer to the console.

// let a = 10;
// let b = 15;

// console.log (
//     a > b
// );

// 2. Use the relevant comparison operator to identify whether a is equal to "10".
// Log your answer to the console.

// console.log (
//     a == '10'
// );

// 3. Check once again to see if a is equal to "10", this time making sure to check
// against the type as well. Log your answer to the console.

// console.log(
//     a === '10'
// );

// 4. If x is equal to "5" and y is equal to 6, what would the result of the following
// be? x !== y?

// the result would be true as 5 does not equal 6

// */


/* 
  =================================================================================
  JS Logical Operators Lesson
  =================================================================================
*/

// truthy and falsey values


// && logical and operator


// || logical or operator

// let a = 1; // true
// a = !a;

// console.log (
//     typeof a, a
// );

// let b = 0;
// b = !b; // b = not false

// console.log (
//     typeof b, b
// );

let x = 1; // true
let y = 0; //false

// if(x) {
//     console.log("hello");
// }
// if(y) {
//     console.log("hello");
// }
// if(!y) {
//     console.log("hello");
// }
// if(x && y) {
//     console.log("hello");
// }

// x || alert("this is ignored since x is true");
// y || alert("this is not ignored since y is false");

/*
### TASKS ###

1. Will the result of the following be true or false? */

// let a = "Dev Dreamer"; true
// let b = ''; false

// if (a || b) {
//     console.log("hello"); 
// }
//true

// /* 2. Will the result of the following be true or false? */

// a = "Dev Dreamer";
// b = '';

// if (a && true && !b) {
//     console.log("hello")
// }
//true

/* 3. Create the following variables a = -1; b = 1; create an if statement using a 
logical && operator. Will the expression evaluate to true? */
// a = -1;
// b = 1;
// if (a && b){
//     console.log("hello");
// } evalutaes to true

/* 
  =================================================================================
  JS if else Statements Lesson
  =================================================================================
*/

// if statements

// if (true){
//     console.log("the condition is true");
// }

// // if else statements
// game = 'Sonic';

// if(game=='Sonic'){
//     console.log("the condition is true");
// } else {
//     //code to run if condition is false
// }

// if else if else statements
// let roll = 2;

// if (roll === 4) {
//     console.log('You rolled a four');
// } else if (roll === 5 ) {
//     console.log('You rolled a five');
// } else if (roll === 6 ) {
//     console.log('You rolled a 6');
// } else {
//     console.log('You rolled less than four');
// }

/*
### TASKS ###

1. What will the following code display in the console?

let num = 10 + 2;

if (num > 2 && num < 20) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
// this will display 'TRUE' as 12> 2 and <20

2. Create a variable called user and set its value to 'employee'. Create an else if
statement to first check if user is equal to guest, if this is true, console.log 
'Login Denied', then check if user is equal to employee and console.log 
'Successfully Logged in'.

let user = 'employee';

if (user === 'guest'){
   console.log('Login Denied');
} else if (user === 'employee'){
    console.log('Successfully Logged in');
}

3. Assign your first name to a variable called myName and create an if statement to
see if the number of letters in your name is more than 5, if it is alert "More than 
5", next check to see if it is exactly 5 letters, if it is alert "Exactly 5 letters",
if neither of these is true then alert "Less than 5 letters".

let myName = 'Teagan';
let nameLength = myName.length;

if (nameLength > 5){
    alert("More than 5");
} else if(nameLength == 5){
    alert("Exactly 5 letters");
} else {
    alert("Less than 5 letters");
    }


*/



