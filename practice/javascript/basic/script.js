// create variables
const  myName = "Teagan"; // const variables do not change (will error if u try to replace)
let myAge = 17; //let variables can have changing values

//print variables in the console
console.log(myName);
console.log(myAge);
console.log("My name is " + myName + " and my age is " + myAge + "."); 

//js reads left to right and will convert type as necessary
//ints will be added together if they are first or in parentheses
console.log("The sum of my age + my age is " + myAge + myAge);
console.log(myAge + myAge + " is the sum of my age + my age"); 
console.log("The sum of my age + my age is " + (myAge + myAge)); //js uses order of operations. it will read left to right but will also do parenthesis 1st


function reveal() {
    // alert("Hi! Hope you are having a good day :)") //this makes a webpage popup
    const mySpan = document.getElementById("name");  //retrieves element based on id
    console.log(mySpan);
    mySpan.textContent = " Teagan";
}