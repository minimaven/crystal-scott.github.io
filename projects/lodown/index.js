'use strict';

// YOU KNOW WHAT TO DO //

//Documentation
//each documentation

/**
 * 
 * idenity: Function takes in a value and returns the value unchanged
 * 
 * @param {Any value}: Function takes in any value.
 * @returns {Any value}: Function returns input unchanged.
 *  
 */

function identity(value) {
    return value
}
module.exports.identity = idenity;


/**
 * 
 * typeOf: Function takes in a value and returns the type of data it is
 * 
 * @param {Any value}: Function takes in any value.
 * @returns {Any value}: Function returns the type of the value.
 *  
 */

_.typeOf = function(value){
    if (Array.isArray(value)) {
        return 'array'
    } else if (value === null) {
        return 'null'
    } else {
        return typeof value
    }

}
module.exports.typeOf = typeOf;


/**
 * 
 * first: Returns the first <number> items of <array>
 * 
 * @param {array}: an array to be iterated over
 * @param {num}: a number to identify how many items from the beginning of the array to return
 * @returns {array}: Function returns an array with the items from the begining of the given <array>
 *  
 */

_.first = function (arr, num) {
    if (!Array.isArray(arr)) {
        return []
    } else if (typeof num !== 'number') {
        return arr[0]
    } else if (num > arr.length) {
        return arr
    } else {
        let solution = [];
        for (let x = 0; x < num ; x++) {
            solution.push(arr[x]);
        }
        return solution
    }
}
module.exports.first = first;


/**
 * 
 * last: Returns the last <number> items of <array>
 * 
 * @param {array}: an array to be iterated over
 * @param {num}: a number to identify how many items from the ending of the array to return
 * @returns {array}: Function returns an array with the items from the ending of the given <array>
 *  
 */

_.last = function(arr, num) {
    let solution = [];
    if(!Array.isArray(arr)) {
        return solution
    } else if (typeof num !== 'number') {
        return arr[arr.length - 1]
    } else if (num < 0) {
        return solution
    } else if(num > arr.length) {
        return arr
    } else {
        let goBack = (arr.length - 1) - num
        for (let x = arr.length - 1; x > goBack; x--) {
          solution.unshift(arr[x]);
          }
          return solution
    }
}
module.exports.last = last;


/**
 * 
 * indexOf: Returns the index of <array> that is the first occurrance of <value> or -1 if <value> is not in <array>
 * 
 * @param {array}: an array to be iterated over
 * @param {value}: a value possibly in the <array>
 * @returns {index}: the index of <array> that is the first occurrance of <value>
 * @returns {-1}: if <array> doesn't contains <value>
 * 
 *  
 */

_.indexOf = function(arr, val) {
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === val) {
            return x
        } 
    }
    return -1
}
module.exports.indexOf = indexOf;


/**
 * 
 * contains: Returns true if <array> contains <value> and false if it doesn't
 * 
 * @param {array}: an array to be iterated over
 * @param {value}: a value possibly in the <array>
 * @returns {true}: if <array> contains <value>
 * @returns {false}: if <array> doesn't contains <value>
 * 
 *  
 */

_.contains = function(arr, val) {
    return arr.includes(val) ? true : false
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function}: The Function to be applied to each value in the 
 * collection
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Returns a new array of all elements from <array> with duplicates removed
 * 
 * @param {Array}: an array to be iterated over
 * @returns {Array}: a new array of all elements from <array> with duplicates removed
 * 
 */
_.unique = function(arr) {
    let seen = [];
    for (let x = 0; x < arr.length; x++) {
        let index = _.indexOf(seen, arr[x]);
        if (index === -1) {
            seen.push(arr[x]);
        }
    }
    return seen
}
module.exports.unique = unique;


/**
 * filter: Returns a new array of elements containing the values that <function> returned true
 * 
 * @param {Array}: an array to be iterated over
 * @param {Function}: a fucntion to define the filter with a true or false return
 * @returns {Array}: a new array of elements for which calling <function> returned true
 * @returns {Empty Array}: if calling <function> returned everything false or returned neither truth or false
 * 
 */
_.filter = function(arr, func) {
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++){
        let response = func(arr[i], i , arr);
        if (response) {
            result.push(arr[i]);
        } 
    }
    return result
}
module.exports.filter = filter;


