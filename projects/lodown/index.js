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
 * @param {Function}: a function to define the filter with a true or false return
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


/**
 * reject: Returns a new array of elements containing the values that <function> returned false
 * 
 * @param {Array}: an array to be iterated over
 * @param {Function}: a function to define the filter with a true or false return
 * @returns {Array}: a new array of elements for which calling <function> returned false
 * @returns {Empty Array}: if calling <function> returned everything true or returned neither truth or false
 * 
 */
_.reject = function (arr, func){
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++){
        let response = func(arr[i], i , arr);
        if (!response) {
            result.push(arr[i]);
        } 
    }
    return result
}
module.exports.reject = reject;


/**
 * partition: Returns a nested array of two arrays. An array that contains all the values for which <function> 
 * returned something truthy and an array that contains all the values for which <function> returned
 * something falsy of elements containing the values that <function> returned false
 * 
 * @param {Array}: an array to be iterated over
 * @param {Function}: a function to define the filter with a true or false return
 * @returns {Array}: a nested array
 *      @returns {Truthy Array}: array that contains all the values for which <function> returned something truthy
 *      @returns {Falsey Array}: array that contains all the values for which <function> returned something falsey
 * 
 */
_.partition = function(arr, func) {
    let truthy = [];
    let falsey = [];
    let result = [truthy, falsey];    
    for (let i = 0; i <= arr.length - 1; i++){
        let response = func(arr[i], i , arr);
        if (!response) {
            falsey.push(arr[i]);
        } else if(response) {
            truthy.push(arr[i]);
        }
    }
    return result;
}
module.exports.partition = partition;


/**
 * map: Returns the value of each <function> call to the <collection>
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function}: a function to be called on each iteration in the <collection>
 * @returns {Array}: a new array with the value of each <function> called on every value in <collection>
 * 
 */
_.map = function(coll, func) {
    let result = [];
    if (Array.isArray(coll)){  
        for (let i = 0; i <= coll.length - 1; i++){  
            let arr = func(coll[i], i , coll);
            result.push(arr);
        }
    } else {
        for (let key in coll) {
            let obj = func(coll[key], key , coll);
            result.push(obj)
        }
    }
    return result
}
module.exports.map = map;


/**
 * pluck: Returns an array containing the value of <property> for every element in <array>
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Property}: the key of the values to retieve out of each object
 * @returns {Array}: a new array containing the value of <property> for every element in <array>
 * 
 */
_.pluck = function(arr, prop) {
    return _.map(arr, function(value, index, coll){
        return value[prop]
    })
}

module.exports.pluck = pluck;


/**
 * every: Returns the value of calling <function> for every element is true or false. If no <function> is provided,
 * return true if every element is truthy, otherwise return false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function}: function to call on all elements of <collection>
 * @returns {True}: if the return value of calling <function> for every element is true
 * @returns {False}: if even one of the the return value of calling <function> for every element returns false
 * 
 */
_.every = function (collection, func){
    //determin if collection is an array
    if (Array.isArray(collection)){
        //determined if function was not provied
        if (!func) {    //this is the same as func === undefined
            for (let i = 0; i < collection.length; i++) {
                //determine if the current item is TRUTHY
                if(!collection[i]) {
                    return false;
                }
            }

        } else {    //else it was
            for (let i = 0; i < collection.length; i++){
                //determin if the current item passes the input functions's test
                let funcRespo = func(collection[i]); 
                if (!funcRespo) {   ///same as just func(collection[i])=== true
                    //if true, push item into passes array
                    return false;
                }
            }
        }

    }   else {   //else it's an object
         //determined if function was not provied
         if (!func) {    //this is the same as func === undefined
            for (let key in collection) {
                //determine if the current item is TRUTHY
                if(!collection[key]) {
                    return false;
                }
            }

        } else {    //else it was
            for (let key in collection){
                //determin if the current item passes the input functions's test
                let funcRespo = func(collection[key]); 
                if (!funcRespo){   ///same as just func(collection[i])=== true
                    //if true, push item into passes array
                    return false;
                }
            }
        }
    }

    //how do we use the passes array to know whether all the orginial items are truthy or passed the test
    return true;
}

module.exports.every = every;


/**
 * some: Returns the value of calling <function> for every element is true or false. If no <function> is provided,
 * return true if at least one element is truthy, otherwise return false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function}: function to call on all elements of <collection>
 * @returns {True}: if even one of the the return value of calling <function> for every element returns true
 * @returns {False}: if the return value of calling <function> for every element is false
 * 
 */
_.some = function (coll, func) {
    if (Array.isArray(coll)) {
        if (!func) {
            for (let i = 0; i < coll.length; i++) {
                if (coll[i]){
                    return true
                }
            }
        } else {
            for (let i = 0; i < coll.length; i++) {
                if (func(coll[i], i, coll)){
                    return true
                }
            }
        }
        
    } else {
        if (!func) {
            for (let key in coll) {
                if (coll[key]) {
                    return true
                }
            } 
        } else {
            for (let key in coll) {
                if (func(coll[key], key, coll)) {
                    return true
                }
            } 
        }

    }
    return false
}

module.exports.some = some;


/**
 * reduce: Returns a value which is accumulated result of running each element in the <array> through iterations
 * 
 * @param {Array}: The array over which to iterate.
 * @param {Function}: function to call on all elements of <array>
 * @param {Value} Seed: an optional value provided to start the count
 * @returns {Value}: the collected value of <array> with <seed> (if applicable)
 * 
 */
_.reduce = function (array, func, seed) {
    let result;
    //detmine if the seed value doesn't exits
    if (seed === undefined) {
        result = array[0]; //first item in the array to asssign the result to the first value in the arrya
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }  else {
        result = seed; ///result = 0
        for (let x = 0; x < array.length; x++) {
            result = func(result, array[x], x);
            //result is being reassigned to the RESULT of invoking the callback function
        }
    }
    return result
}

module.exports.reduce = reduce;


/**
 * extend: Returns orgnial object with a copy of any additional object added in
 * 
 * @param {Object}: An object that will have other informaiton copied into it
 * @param {Object}: An object (or multiple objects) to be added into the orginal <object>
 * @returns {Object}: the objects provided copied into the orginal object
 * 
 */
_.extend = function(obj1, obj2, ...moreObjs) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    for (let x in moreObjs) {
        for (let key in moreObjs[x]) {
            obj1[key] = moreObjs[x][key];
        }
    }
    return obj1
}
module.exports.extend = extend;