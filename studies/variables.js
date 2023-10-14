/**
 * VARIABLES:
 * 
 * 0.   Variables are named containers for data in JavaScript. We create variables using declarative keywords.
 *      Variables can point to values of a particular type, like a Number, String, Boolean, Array, Object, or another data type.
 *      Majority of the time, the data stored in a variable can be rewritten and manipulated later in the code. 
 *      Unless you declare that variable with a const, then the variable can not be manipulated.
 * 
 * 1.   Declaration and Assignment: to create a variable in Javascript we must first declare it using one of three declarative keywords.
 *      You can assign a value when creating the variable and also later in the program. When naming variables, you should be using
 *      camelCase. Which is where the first word is lower case and every word after the first letter is capital. There are not spaces
 *      between words.
 * 
 * 2.   var, let, and const are the three declarative keywords.
 * 
 * 3.   Hoisting: (describe hoisting)
 *  
 */

// 1 Declaration and Assignment //

        //Declaration
var example;               //currently this an empty container named age the data is undefiend

        //Assignment
example = 'Jon and George play outside.';       //the name container now holds the string value Jon and George play outside.

        //Reassignment
example = 'Justin wants to play too.';         //the name container now holds the string value Justin wants to play too. and the other value is gone.

// 2 var, let, const

        //var and let
        //using var and let make malleable containers that can be manipulated during the program
var friends = [];       //the container friends has a blank array assigned to it
let delivery = true;     //the container delivery is equal to the Boolean value true

        //const
        //once a const variable is declared, it can not be changed
const developerName = 'Crystal Scott';      //the container developerName contains the string Crystal Scott