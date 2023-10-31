// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    type => cd ..   
 * 
 *    type => npm start --prefix ./crystal-scott.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//filter, map, reduce <=== use these

// _.filter()
var maleCount = function(array) {
    let males = _.filter(array, (customer) => customer.gender === 'male');
    return males.length;
};

//_.reduce
var femaleCount = function(array) {
    let females = _.reduce(array, function(result, customer) {
        if (customer.gender === 'female') {
            result ++
        } 
        return result;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(result, customer) {
        if (customer.age > result.age) {
            result = customer;           
        } 
        return result;
    });
    return oldest.name;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(result, customer) {
        if (customer.age < result.age) {
            result = customer;           
        } 
        return result;
    });
    return youngest.name;
};

var averageBalance = function (array) {
    let strBalances = _.map(array, function(customer) {
        return customer.balance;
    })
    let numBalances = _.map(strBalances, function(strBalance){
        strBalance = strBalance.replace('$', '');
        strBalance = strBalance.replace(',', '');
        strBalance = parseFloat(strBalance);
        return strBalance;
    });
    let avgBalance = _.reduce(numBalances, function(result, balance){
        result += balance
        return result
    })
    return avgBalance / array.length
}; 

var firstLetterCount = function (array, letter) {
    letter = letter.toUpperCase();
    let firstLetterList = _.map(array, function(customer) {
        return customer.name[0]
    })
    let letterCount = _.reduce(firstLetterList, function(result, firstLetter){
        if (letter === firstLetter){
            result++
        }
        return result
    }, 0)
    return letterCount
};

var friendFirstLetterCount = function (array, customerName , friendLetter) {
    friendLetter = friendLetter.toUpperCase();
    let customerArr = _.filter(array, function (customer) {
        if (customerName === customer.name) {
            return true
        }   
    });
    let customerObj = customerArr[0];
    let friendCount = _.filter(customerObj.friends, function (friend) {
        if (friend.name[0] === friendLetter) {
            return true
        }
    })
    return friendCount.length 
};

var friendsCount = function () {
    
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
