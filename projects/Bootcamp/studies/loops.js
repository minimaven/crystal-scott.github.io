/**
 * Loops:
 * 
 * 0.   A loop is a way to execute the same code on all items in an array or object. It saves you from writing the same code a bunch of times.
 * 
 */

// 1. Explain while, for, and for-in loops //

// While
// * Iterates until the expression evaluates to true
// * Better when it’s a unknown number of iterations
// * A While loop continues as long as the condition specified inside the parentheses () evaluates to true.
        var a = 0; //initialization
        while (a < 11) { //condidtion
        a++; //iteration
        }
//      - initialization: A while loop typically doesn't have a specific initialization step within the loop structure itself. Any necessary initializations should be done before the loop.
//      - condition: The exit condition is a single statement evaluated before each iteration of the loop. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop terminates.
//      - iteration: A while loop doesn't have a distinct update expression within the loop. Any changes to the variables involved in the condition are handled within the code block.

//For
// * Iterates until the expression evaluates to false
// * Better when it’s a know number of iterations
// * A For loop is comprised of 3 statements:
        for (let x = 0; x < 11; x++) {  
        //     start  ;  stop ; update
        }
//      - start: The statement is executed once, at the beginning of the loop. It is used to initialize the loop control variable.
//      - stop: The condition statement is evaluated before each iteration of the loop. If the condition evaluates to true, the loop continues; if false, the loop terminates.
//      - update: The iteration expression is executed at the end of each iteration. It is responsible for updating the loop control variable to progress the loop towards its termination.

//For-In
// * Iterates over the properties of the object
// * A For-in loop is used to iterate over the properties of an object. It utilizes a different structure compared to the traditional for or while loops.
        for (key in object) {
        }
//      - key:  A variable that represents each property key as the loop iterates through the object's properties.
//      - object: The object whose enumerable properties will be iterated over.

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //

//For loop printing the count forward from 0 to 10  
for (let x = 0; x < 11; x++) {
    console.log(x);
}

//For loop printing the count backwards from 11 to 1
for (let x = 11; x > 0; x--) {
    console.log(x);
}

//While loop printing the count forward from 0 to 10
var a = 0;
while (a < 11) {
    console.log(a);
    a++;
}

//While loop printing the count backwards from 11 to 1
var b = 11;
while (b > 0) {
    console.log(b);
    b--;
}

// 3. Loop over an Array, forwards and backwards //

let c = ['a','b', 'c', 'd', 'e', 'f', 'g']

//For loop printing the value in the index going forward 
for (let x = 0; x < c.length; x++) {
    console.log(c[x]);
}

//For loop printing the value in the index going forward 
for (let x = c.length -1 ; x > 0; x--) {
    console.log(c[x]);
}

//While loop printing the value in the index going forward 
var d = 0
while (d < c.length) {
    console.log(c[d]);
    d++;
}

//While loop printing the value in the index going forward 
var e = c.length - 1;
while (e > 0) {
    console.log(c[e]);;
    e--;
}


// 4. Loop over an Object //

var f = {
    firstName: 'Crystal',
    lastName: 'Scott',
    age: 37,
    hasKid: true
}

//For In loop prints each key and value to the console
for (let key in f) {
    console.log(`${key}: ${f[key]}`);
}
