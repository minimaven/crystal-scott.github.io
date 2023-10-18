/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, str) {
    var strToLower = str.toLowerCase()
    for (var x = 0; x <= arr.length - 1; x++){
        var nameToLower = arr[x].name.toLowerCase();
        if (strToLower === nameToLower) {
            return arr[x];
        }
    }
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arr, str, repObj) {
    var strToLower = str.toLowerCase()
    for (var x = 0; x <= arr.length - 1; x++){
        var nameToLower = arr[x].name.toLowerCase();
        if (strToLower === nameToLower) {
            arr.splice(x, 1, repObj);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr, str) {
    var strToLower = str.toLowerCase()
    for (var x = 0; x <= arr.length - 1; x++){
        var nameToLower = arr[x].name.toLowerCase();
        if (strToLower === nameToLower) {
            arr.splice(x, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(arr, obj) {
    var newNameToLower = obj.name.toLowerCase()
    //step 1
    for (var x = 0; x <= arr.length - 1; x++){
        var nameToLower = arr[x].name.toLowerCase();
        if (nameToLower === newNameToLower) {
            return
        }
    }
    //step 2
    if (
        (obj.name.length > 0) && 
        (obj.species.length > 0)
    ) {
        arr.push(obj);
    }
}



//     for (var x = 0; x <= arr.length - 1; x++){
//         var nameToLower = arr[x].name.toLowerCase();
//         if (
//             (obj.name.length > 0) && 
//             (obj.species.length > 0) &&
//             (nameToLower !== newNameToLower)
//         ) {
//             arr.push(obj);
//         }
//     }    
// }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
