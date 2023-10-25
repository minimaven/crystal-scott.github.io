'use strict';

// YOU KNOW WHAT TO DO //

//Documentation
//each documentation
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 * 
 * idenentity: Function takes in a value and returns the value unchanged
 * 
 *  @param {Any value}: Function takes in any value.
 * @returns {Any value}: Function returns input unchanged.
 *  
 */

function identity(value) {
    return value
}
module.exports.identity = idenity;