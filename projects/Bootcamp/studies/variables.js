/**
 * VARIABLES:
 * 
 * 0.   Variables are named containers for data in JavaScript. Variables are created using declarative keywords.
 *      Variables can point to values of any type, like a Number, String, Boolean, Array, Object, Function, etc.
 *      Majority of the time, the data stored in a variable can be rewritten and manipulated later in the code. 
 *      Unless you declare that variable with a const, then the variable can not be manipulated.
 * 
 */

// 1. Declaration and Assignment //
/* 
To create a variable in Javascript we must first declare it using one of three declarative keywords.
You can assign a value when creating the variable and also later in the program. When naming variables, you should be using
camelCase. Which is where the first word is lowercase and every word after the first letter is capital. There are no spaces
between words.
*/

//Declaration
var example;               //currently this an empty container named age the data is undefiend

//Assignment
example = 'Jon and Amanda play outside.';       //the name container now holds the string value Jon and Amanda play outside.

//Reassignment
example = 'Justin wants to play too.';         //the name container now holds the string value Justin wants to play too. and the other value is gone.

// 2. var, let, const //
/* 
var, let, and const are keywords for variable declaration. var is the original variable declaration in Javascript. var is globally scoped.
var can be reassigned out of its original scope. let and const were introduced to Javascript as a part of ES6. let is blocked scoped. 
let can be reassigned, but not outside its scope. const is block scoped as well. const can not be reassigned. 
*/

//var
var friends = [];       //the container friends has a blank array assigned to it

//let
let delivery = true;     //the container delivery is equal to the Boolean value true

//const
const printMessage = function(message){
        console.log(message);
};      //the container printMessage contains a function that prints a message to the console log (this is a function expression)


//let and const variables are block-scoped, var variables are function-scoped, accessible anywhere within the function they are declared in, regardless of block boundaries.
function blkScpEx() {
        if (true) {
                let letBlk = 'let in the for loop';
                const constBlk = 'const in the for loop';
                var varBlk = 'var in the for loop';
                console.log(letBlk); // prints 'let in the for loop' in the console
                console.log(constBlk); // prints 'const in the for loop' in the console
                console.log(varBlk); // prints 'var in the for loop' in the console
        }

        // letBlk and constBlk are not accessible here.
        console.log(varBlk); // prints 'var in the for loop' in the console
        console.log(letBlk); // returns ReferenceError: letVar is not defined
        console.log(constBlk); // returns ReferenceError: constBlk is not defined
}

blkScpEx();


// 3. Hoisting //
/* 
Hoisting is when variables and function declerations are moved to the top of their containing scope. Only the declerations are hoisted, not the initializations.
for varablies, this means the decleration is moved up to the top, but the asignmment stays in the same place. var get brought to top of the globe scope.
const and let are only hoisted to the top of their scope.
*/

//because of hoisting 'varHoist' returns undefined 
console.log(varHoist);
var varHoist = 'This is an example of hoisting'

//however, using let returns ReferenceError: Cannot access 'letHoist' before initialization
console.log(letHoist);
let letHoist = 'This is an example of hoisting'

//functions are hoisted to the top of the scope and can be used before the declaration. This will run the function as intended
functionExample('This is an example of hoisting');
function functionExample(message){
        console.log(message);
}; 

//however, this does not work the same with function expressions. This returns TypeError: functionExpressionExample is not a function
functionExpressionExample('This is an example of hoisting');
var functionExpressionExample = function (message){
        console.log(message);
}; 