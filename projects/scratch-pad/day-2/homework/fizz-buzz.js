// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    //Loop thru 1 - 100
    for (var n = 1; n <= 100; n++) {
        //use if to check to see if the number is divided by 3 and five with no remander
        if (n % 5 === 0 && n % 3 === 0 ) {
            //print 'fizzbuz'     
            console.log('FizzBuzz');       
        //use else if to check to see if the number is dived by 3 with no remander        
        } else if (n % 3 === 0) {
            //print 'fizz'
            console.log('Fizz');
        //use else if check if the number is divided by 5 with no remander        
        } else if (n % 5 === 0) {
            //print 'buzz' 
            console.log('Buzz');
        //else print the number              
        } else {
            console.log(n);
        }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}