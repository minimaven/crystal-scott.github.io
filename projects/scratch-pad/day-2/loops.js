// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //create a for loop to run through array 
  for (var f = 0; f <= array.length -1; f++) {
    //print all the values in the console
    console.log(array[f]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
   //create a for loop to run through array backwards 
   for (var r = array.length -1; r >= 0; r--) {
    //print all the values in the console
    console.log(array[r]);
   }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create a storage array for the object keys
  var storage = [];
  //create a for in loop
  for (var key in object){
    //store the keys in the storage array
    storage.push(key);
  }
  // return the storage array
  return storage;
  
  
  // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over the object using a for loop
  for (var key in object) {
    //print the keys in the console
    console.log(key);
  }

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // create a storage array for the object's values
  var storage = [];
  //create a for in loop
  for (var key in object){
    //store the values in the storage array
    storage.push(object[key]);
  }
  // return the storage array
  return storage;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over the object using a for loop
  for (var key in object) {
    //print the values in the console
    console.log(object[key]);
  }

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // create a storage array for the object keys
  var storage = [];
  //create a for in loop
  for (var key in object){
    //store the keys in the storage array
    storage.push(key);
  }
  // return the storage array length
  return storage.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

  

  
  // // create a storage array for the object keys
  // var storage = [];
  // //create a for in loop
  // for (var key in object){
  //   //store the values in the storage array 
  //   storage.push(object[key]);
  // }
  // //create a new output array
  // var output = [];
  // //create a for loop to reverse the order 
  // for(var b = storage.length - 1; b >= 0; b--) {
  //   //push the values backwards into output
  //   output.push(storage[b]); 
  //   //print the output with the loop going backwards
  //   console.log(output);
  // }



  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
