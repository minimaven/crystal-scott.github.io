/**
 * Functions:
 * 
 * 0.   A function is a reusable block of code that performs a specific task or calculates a value. Functions allow developers to encapsulate a piece of 
 *      code and execute it whenever needed, enabling modularity, code reusability, and abstraction. Functions play a crucial role, enabling 
 *      developers to organize and structure their code effectively while promoting reusability and maintainability.
 * 
 */

// 1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? //

//First, we must define the function
//write the function block, setting up its parameters (if any), and specifying its behavior or tasks it should perform
//This function will print the message that the user inputs
function printThis(message) {
    console.log(message)
}

//Next we can execute (call or invoke) a function
//This will run the code to print 'Hello World' in the console
printThis('Hello World')

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //

//Parameters
//Parameters are the placeholders or variables listed in the function definition.
function add(a, b) {
    return a + b
}
//a and b are the parameters

//Arguments
//Arguments are the actual values passed to a function when it is called.
add(11, 12)
//11 and 12 are the arguements

// 3. What’s the syntax for a NAMED function? //

function exampleFunc(parameters) {
    // Code block or statements that uses the parameters to perform a task
    return; // functions can return a value, but don't have too
}

// 4. How do we assign a function to a variable? //

//A function can be assigned to a variable by using a function expression.
var subtract = function (c, d) {
    return c - d
}

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs? //

// Parameters are how we specify inputs. 
//e and f are the parameters
function multiple(e, f){
    return e * f
}

//Return statements are used to specify the output
//Returning g divided by h
function divide(g, h){
    return g / h
}

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true. //

// Functions have access to variables defined in their parent or global scopes, but the inverse is not true by default. This is known as closure.
var globalVar = 'I am global';

function outerFunction() {
    var outerVar = 'I am from outerFunction';

    function innerFunction() {
        console.log(globalVar); // accessing globalVar
        console.log(outerVar); // accessing outerVar
    }

    innerFunction();
}

outerFunction();

//Variables declared within a function using var, let, or const are function-scoped. This means they are accessible only within the function in which they are declared and not accessible outside that function's scope, including the global scope.

function myFunction() {
    var varFuncScoped = 'I am a var declared function-scoped variable';
    let letFuncScoped = 'I am a let declared function-scoped variable';
    const constFuncScoped = 'I am a const declared function-scoped variable';
}

myFunction();

console.log(varFuncScoped); // Error: functionScopedVar is not defined
console.log(letFuncScoped); // Error: anotherFunctionScopedVar is not defined
console.log(constFuncScoped); // Error: constFunctionScopedVar is not defined


// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
//    that closure stays ALIVE, and data can continue to exist in these closures!  //

//Function closures when an inner function has access to its outer function's variables, even after the outer function has finished executing. 

function outerFunc() {
    let outerVar = 'I am from outerFunction'; // Variable defined in outerFunction

    function innerFunc() {
        console.log(outerVar); // Accessing outerVar from the outerFunction's scope
    }

    return innerFunc; // Returning the inner function
}

let thisIsAClosure = outerFunc(); // Closure now holds a reference to innerFunction along with its closure

thisIsAClosure(); // Executing the innerFunction
//outerFunc defines outerVar within its scope.
//innerFunc is defined within outerFunc and has access to outerVar due to closure.
//outerFunc returns innerFunc, and it's assigned to the variable closure.
//After outerFunc has finished executing, thisIsAClosure() still has access to outerVar due to closure, allowing innerFunc to access and log outerVar when called.