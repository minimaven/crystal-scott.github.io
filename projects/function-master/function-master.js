//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var newArr = [];
    for (var key in object) {
        newArr.push(object[key]);  
    }
    return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var newArr = [];
    for (var key in object) {
        newArr.push(key);   
    }
    return newArr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newArr = [];
    for (var key in object) {                           //loop thru the object
        if (typeof object[key] === 'string') {          //test is value of object is string
            newArr.push(object[key]);                   //push to new arr
        }
    }
    return newArr.join(' ')                             //join 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'
    } else if (collection === null) {
        return 'null'
    } else if (collection instanceof Date) {
        return 'date'
    } else if (typeof collection === 'object') {
        return 'object'
    } else {
        return 'what is it?'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstLetter = string[0].toUpperCase();
    var restOfTheLetters = '';
    for (var x = 1; x <= string.length - 1; x++){
        restOfTheLetters = restOfTheLetters + string[x];
    }
    return firstLetter + restOfTheLetters;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = [];
    words = string.split(' ');      //split the orginal string into an array
    var newWords = [];
    for (var x = 0; x <= words.length - 1; x++) {   //loop over the new array
        var firstLetter = words[x][0].toUpperCase();   //get the first letter in the first word of the array words
        var restOfTheLetters = '';          //creating a variable to hold the letters 
        for (var i = 1; i <= words[x].length - 1; i++) {    //loop thru first word
            restOfTheLetters = restOfTheLetters + words[x][i];     //add the letters to variable
        }
        var newString = firstLetter + restOfTheLetters;     //adding the letters all back together for the word
        newWords.push(newString);                           //adding the new words to a string
    }
    return newWords.join(' ');                  //joining and returning all the words together
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var firstLetter = object.name[0].toUpperCase();
    var restOfTheLetters = '';
    for (var x = 1; x <= object.name.length - 1; x++){
        restOfTheLetters = restOfTheLetters + object.name[x];
    }
    var capName = firstLetter + restOfTheLetters
    return 'Welcome ' + capName + '!' 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var nameFirst = object.name[0].toUpperCase();
    var nameRest = '';
    var speciesFirst = object.species[0].toUpperCase();
    var speciesRest = '';
    for (var x = 1; x <= object.name.length - 1; x++){
        nameRest = nameRest + object.name[x];
    }
    for (var i = 1; i <= object.species.length - 1; i++){
        speciesRest = speciesRest + object.species[i];
    }
    var nameConcat = nameFirst + nameRest;
    var speciesConcat = speciesFirst + speciesRest;
    return nameConcat + ' is a ' + speciesConcat
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined) {
      return 'there are no noises'
    } else if (object.noises.length > 0) {
      var noiseString = object.noises.join(' ');
      return noiseString
    } else {
      return 'there are no noises'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var words = [];
    words = string.split(' ');
    var lowerCaseWord = word.toLowerCase();
    console.log(word);
    console.log(words);
    for (var x = 0; x <= words.length - 1; x++) {
      console.log(words[x]);
      var lowerCaseStr = words[x].toLowerCase();
      if (lowerCaseWord === lowerCaseStr) {
          return true
      } 
    }
    return false
  }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var nameLowercase = name.toLowerCase();
    for (var x in object.friends) {
        var friendName = object.friends[x].toLowerCase();
        if (friendName === nameLowercase) {
            return true
        } 
    }
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let allNames = [];
    let namesFriends = [];
    let nonFriends = [];
    for (let x in array) {
        allNames.push(array[x].name);
    }
    for (let i in array) {
        if (name === array[i].name){
            namesFriends = array[i].friends;
        }
    }
    for(let n in allNames){
        if (namesFriends.includes(allNames[n]) === false) {
            nonFriends.push(allNames[n]);
        }
    }
    for(let v in nonFriends){
        if (name === nonFriends[v]) {
            nonFriends.splice(v, 1);
        }
    }
    return nonFriends
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    for (let x in object){
        if ([x]key === undefined) {

        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}