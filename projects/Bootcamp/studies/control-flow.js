/**
 * Control Flow:
 * 
 * 0.   Control flow refers to the order in which statements and instructions are executed in the script. It dictates how the program flows from one piece
 *      of code to another based on conditions, loops, and function calls. It ensures that instructions are executed in a specific sequence. Control flow statements 
 *      and structures allow developers to create dynamic and responsive scripts by controlling how the code executes based on conditions and iterations, providing 
 *      flexibility and control in programs.
 * 
 */

// 1. If //
/* 
If statements executes a block of code if a specified condition is true.
*/

//this will print '11 is greater than 10' in the console
var a = 11;
if (a > 10) {
    console.log(`${a} is greater than 10`);
} 

// 2. Else-If //
/* 
Else-If executes multiple blocks of code if a specified condition is true; otherwise, executes the default block of code.
*/

//this will print '11 is not greater than 20' in the console
var b = 11;
if (b > 20) {
    console.log(`${b} is greater than 20`);
} else if (a === 20) {
    console.log(`${b} is 20`);
} else {
    console.log(`${b} is not greater than 20`);
}


// 3. Else //
/* 
If statements executes a block of code if a specified condition is true; otherwise, executes another block of code.
*/

//this will print '8 is not greater than 10' in the console
var c = 8;
if (c > 10) {
    console.log(`${c} is greater than 10`);
} else {
    console.log(`${c} is not greater than 10`);
}

// 4. Switch //
/* 
Provides a way to perform multiple branching based on the value of an expression.
*/

//This prints 'That is my favorite color.' to the console
var d = 'Violet'
switch (d){
    case 'Red':
    case 'Orange':
    case 'Yellow':
    case 'Green':
    case 'Blue':
    case 'Indigo':
        console.log('Guess again.');
            break;
    case 'Violet':
        console.log('That is my favorite color.');
        break;
    default:
        console.log('That is not a color of the rainbow')
}