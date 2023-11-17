/**
 * String Manipulation:
 * 
 * 0.   String manipulation involves various operations to modify or manipulate strings, such as combining strings, extracting parts of strings, converting cases,
 *      replacing substrings, and more. String manipulation is essential for working with text data. These techniques allow developers to modify, extract, and 
 *      manipulate strings to suit their needs within applications or scripts.
 * 
 */

// 1. With Operators //
/* 
String manipulation with operators primarily involves concatenating strings, augmented assignment, and leveraging JavaScript's implicit type conversion 
when combining strings with other data types.
*/

//Concatenation Operator 
//The + operator is used to concatenate strings together
var a = 'Hello';
var b = 'World';
var concatOp = a + ' ' + b; 
console.log(concatOp); // prints 'Hello World' to the console


// Compound Assignment Operators
//The += operator can be used to concatenate strings and assign the result back to the variable.
var compoundOp = 'Hello';
compoundOp += ' World'; 
console.log(compoundOp); // prints 'Hello World' to the console

// Template Literals 
//Allows embedded expressions and multi-line strings using backticks (` `). They support placeholders ${} for variables or expressions.
var userName = 'Crystal';
var exclamation = `Hello World! I'm ${userName}!`;
console.log(exclamation); // prints 'Hello World! I'm Crystal' to the console

// 2. With String Methods //
/* 
String methods provide versatile ways to manipulate strings, from extracting substrings to changing cases and replacing parts of strings.
*/

//Concatenation
// Joins two or more strings and returns a new string.
var c = 'Hello';
var d = 'World';
var concatMeth = c.concat(' ', d);
console.log(concatMeth); // prints 'Hello World' to the console
//syntax
concat()
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)

//Slice
//Extracts a section of a string and returns a new string.
var e = 'Hello World'
console.log(e.slice(-5)) //prints 'World' to the console
//syntax
slice(indexStart)
slice(indexStart, indexEnd)

//toUpperCase
//Converts the string to uppercase.
var f = 'Hello World'
console.log(f.toUpperCase()) ///prints 'HELLO WORLD' to the console
//syntax
.toUpperCase()

//Length 
//Returns the length of a string.
var g =  'Hello World'
console.log(g.length) //prints 11 to the console
//syntax
.length