/**
 * Operators:
 * 
 * 0.   Operators act on the dat given to them. Operators are classed byt what the do an how many operands they require.
 *      Operands are the calues that operatirs act on.  They facilitate various computations, comparisons, assignments, and more.
 * 
 */

// 1. Assignment Operators //
/* 
Assignment operators are used to assign values to variables and perform operations simultaneously.
*/

//Assignment
var assignmentNum = 11

// Add and Assign
assignmentNum += 11  //assignmentNum equals 22

// Subtract and Assign
assignmentNum -= 11 //assignmentNum equals 11

// Multiply and Assign
assignmentNum *= 11 //assignmentNum equals 121

// Divide and Assign
assignmentNum /= 11 //assignmentNum equals 11 

// Modulus and Assign 
assignmentNum %= 2 // assignmentNum equals 1

// 2. Arithmetic Operators //
/* 
Arithmetic operators perform basic arithmetic operations.
*/

//Addition
var arithmeticNum = 11 + 11 //arithmeticNum equals 22

// Subtraction
arithmeticNum = 11 - 11 //arithmeticNum equals 0

// Multiplication
arithmeticNum = 11 * 11 //arithmeticNum equals 121

// Division 
arithmeticNum = 11 / 11 //arithmeticNum equals 1

// Modulus (returns the remainder left over when one operand is divided by a second operand)
arithmeticNum = 10 % 2 //arithmeticNum equals 0

// 3. Comparison Operators //
/* 
Comparison operators are used to compare values and return a boolean result (true or false).
*/


//Equality (attempts to convert and compare operands that are of different types)
11 == '11' //returns true

//Strictly Equal (will not convert and compares on the operands as they are)
11 ==+ '11' //returns true

// Inequality (attempts to convert and compare operands that are of different types)
11 != '11' //returns false

//Strictly Inqual (will not convert and compares on the operands as they are)
11 !== '11' //returns true

// Greater Than 
11 > 12 //returns false

// Less Than 
11 < 12 //returns true

// Greater Than or Equal To (>=)
11 >= 12 //returns false

// Less Than or Equal To (<=)
11 <= 12 //returns true

// 4. Logical Operators //
/* 
Logical operators perform logical operations and return boolean results.
*/

var a = true;
var b = false;

//AND (if both are true or both are false)
a && b //returns fale

// OR (if only one is true)
a || b //returns true

// NOT (if false)
!a //returns false

// 5. Unary Operators (!, typeOf, -) //
/* 
 Unary operators  are operators that act on a single operand.
*/

//Unary Plus (converts its operand to a number if it isn't already. If the operand cannot be converted to a number, it returns NaN.)
var unaryPlus = '11';
console.log(+unaryPlus) // prints the converted string 11 to number 11

//Unary Minus (negates its operand and returns the negated value.)
var unaryMinus = 11;
console.log(-unaryMinus) // prints -11 to the console

//Increment 
11++ // num equals 12

//Decrement 
11-- // num equals 10

//Logical NOT (converts the operand to a boolean value and returns the inverse.)
let isTrue = true;
console.log(!isTrue); //  prints false to the console

// Typeof Operator (returns a string representing the type of its operand.)
let number = 10;
console.log(typeof number); // prints "number" to the console


// 6. Ternary Operators (a ? b : c)//
/* 
Ternary operator is a way to write conditional statements. It takes three operands: a condition followed by a question mark (?), a statement
to execute if the condition is true, and a statement to execute if the condition is false. The ternary operator is often used in assignments and 
to return values based on conditions in a concise manner.
*/

let isStudent = true;
let currEducation = isStudent ? 'Good Luck on all your learning' : 'Time to get a job';
console.log(currEducation); // prints Good Luck on all your learning to the console