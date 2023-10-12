// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(input){
        //test if base is > input
        if (base < input ){
            return true;
        } else {
            return false;
        }
    }    
    
    
    
    // YOUR CODE ABOVE HERE //
}

var greaterThanFive = createGreaterThanFilter(5);
if (greaterThanFive(8)) {
    console.log('8 is more than 5');
}

var greaterThanTen = createGreaterThanFilter(10);
if (greaterThanTen(69)) {
    console.log('69 is the number of the gods');
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //

    //return a function that tests the base against the value
    return function (value) {
        //if statement to check to see if valuse is less than base
        if (value < base) {
            return true;
        } else {
            return false;
        }
    }   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //Change startsWith to lower case
    var newStart = startsWith.toLowerCase();

    //return a function
    return function (str) {
        //change str to lowercase
        var newStr = str.toLowerCase();
        //test if newStr starts with the same as newStart
        if (newStr[0] === newStart[0]) {
            return true;
        } else {
            return false;
        }
    }    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //change endsWith to lowercase
    var newEnd = endsWith.toLowerCase();    

    //return a function
    return function(str) {
        //change str to lowercase
        var newStr = str.toLowerCase();
        //test to see if the last letters are the same
        if (newEnd[newEnd.length - 1] === newStr[newStr.length - 1]) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * 
 * let uppercase = modifyStrings(['a', 'b', 'c']), function(string) {return string.toUpperCase() } ); ['A', 'B', 'C']
 * 
 */


function modifyStrings(strings, modify) {       //modify is a function
    // YOUR CODE BELOW HERE //
    

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
