/**
 * DATA Types:
 * 
 * 0.   Data types are different kinds of data that are used in Javascript. There are primitive and complex data types. 
 * 
 */

// 1. Number //
/* 
This data type represents a number that can be used as a numeral. A number is considered a Primitive Data Type.
*/

//This is an example of a number data type
var number = 11;

//this is not a number data type
var notANumber = '11';

//Numbers can be used for math. Returns 2
var math = 1 + 1; 

// 2. String //
/* 
This data type represents a string of characters that can be manipulated. Strings are represented by surrounding the characters with
'' or "". You can also us `` to make a string. A string is considered a Primitive Data Type.
*/

//This is an example of a string data type
var string = 'This is a string that has 1 sentence in it.'

//This is another example of a string data type
var string2 = "This is a string that has 1 sentence in it."

//This is another example of a string data type. with the `` you can add variables inside. This returns "This is a string that has 1 sentence in it."
let variable = 'string'
var string3 = `This is a ${variable} that has 1 sentence in it.`

// 3. Boolean
/* 
This data type represents a truth value: true or false. False, undefined, null, 0, -0, NaN, & '' will all return false. Any other number than 0, 
strings with characters in them, symbols, and objects return true. A boolean is considered a Primitive Data Type.
*/

//This would be a true statement. 11 the number is strictly equal to the number 11
11 === 11

//This is a false statement. The number 11 is not strictly equal to the string 11
11 === '11'


// 4. Array //
/* 
Arrays are a data structure used to store a collection of elements. Arrays can hold other data types inside them. The data is stored
in an indexed list with the index starting at 0. Arrays are considered a Complex Data Type
*/

//creating a empty Array
var arrExample = [];

//Createing a list of multiple data types
var exampleList = [true, 'String', 11,]
//index numbers     0       1       2

//This is an array of arrays
var arrOfArr = [[11, 'minutes'],[50, 'seconds']]
//index numbers  00      01      10     11

// 5. Object //
/* 
Objects are a data structure used to store a collectiong of elements. Objects can hold other data types inside them. The data is stored
in key-value pairs. Objects are considered a Complex Data Type.
*/

//creating a empty object
var objExample = {};

//Createing a object with multiple data types
var objExample2 = {
    name: 'Crystal',
    age: 37,
    inSchool: true
}


//This is an object of arrays
var objExample2 = {
    lap1: [11, 'minutes'],
    lap2: [50, 'seconds']
}


// 6. Function //
/* 
A function is a set of statements that perform a task or calculate a value. A function takes in an imput called a parameter and
returns an output. A function is consided a Complex Data Type
*/

//This is a function that takes in two numbers and adds them, returning the result
function add(num1, num2){
    return num1 + num2;
}; 


//This is a function that takes a message and then prints it in the console log
function functionExample(message){
    console.log(message);
}; 

//function decleration that returns the square root of a number
const square = function(number){
    return number * number;
}

//To call a function you use the function name plus(). Inside the () you place the parameter you want the function to use
add(1,1); // returns 2
functionExample('Hello World');  //Hello World prints in the console
square(11); // returns 121

// 7. undefined //
/* 
undefined is when something returns no value or is not intialized. undefined is a Primative Data Type.
*/

//This function will print undefined into the console because we are not giving the function a something to say.
function saySomething (something){
    console.log(something);
}

saySomething();



// 8. null //
/* 
Null represenst no value or the intential absence of value. null is a Primative Data Type.
*/

//When a variable is assigned the value null, it means that it has been explicitly set to lack a value or to be empty.
var thisIsNull = null;

//null can be used to clear or restt a object referance
var someObject = { name: 'Crystal' };
someObject = null; // Clears the reference to the object

// 9. NaN //
/* 
NaN stands for Not a Number. NaN is a Primative Data Type.
*/

// Produces NaN
var notANumber = 0 / 0; 

//can be used to find numbers or strings
console.log(isNaN('Hello')); // eturns true to the console
console.log(isNaN(11)); // returns false to the console

// 10. Infinity and -Infinity //
/* 
//Infinity and -Infinity are special numeric values representing positive infinity and negative infinity, respectively. They are used
to represent mathematical concepts of infinitely large positive and negative numbers.
*/

//Infinity: Represents a value greater than any other numeric value. It's the result of dividing a positive number 
//by zero or by exceeding the upper limit of the floating-point representation.
var infinite = 1 / 0; // produces Infinity
console.log(Infinity > 1000); // prints true in the console.log

//-Infinity: Represents a value smaller (more negative) than any other numeric value. It's the result of dividing a negative number 
//by zero or by exceeding the lower limit of the floating-point representation.
var negIninite = -1 / 0; // produces -Infinity
console.log(-Infinity < -1000); // prints true in the console.log

// 11. What is the difference between primitive/simple and complex data types //
/* 
Data types are broadly categorized as primitive and complex types. 
*/

//Primitive Data Types:
// Stored by Value: Primitive data types directly store their values in the variable's memory location.
// Immutable: Once a primitive value is assigned, its value cannot be changed. Operations on primitives return new values rather than altering the original value.
// Examples: number, string, boolean, null, undefined

//Complex (Reference) Data Types:
// Stored by Reference: Complex data types store references or addresses to their values in memory.
// Mutable: Values can be changed by accessing and modifying their properties or elements.
// Examples: object, array, function

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does it mean and how are they different //
/* 
When a primitive value (like a number, string, boolean, etc.) is passed to a function, a copy of that value is created and passed into the function. 
Any changes made to this copy inside the function do not affect the original value outside the function.

When a complex value (like an object or an array) is passed to a function, a reference to the original value's memory location is passed, 
not a copy of the entire object. Any modifications made to the referenced object inside the function affect the original object outside the 
function because they point to the same memory location.
*/

// Primitive by Copy: The function works with a copy of the value; changes inside the function do not affect the original.

// Complex by Reference: The function works with the actual object in memory; changes inside the function affect the original object outside.
