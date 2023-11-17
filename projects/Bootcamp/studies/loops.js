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

//For
// * Iterates until the expression evaluates to false
// * Better when it’s a know number of iterations

//For-In
// * Iterates over the properties of the object

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
