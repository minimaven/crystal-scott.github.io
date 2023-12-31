////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, step) {
  returnArr = [];
  if (num1 === num2 || step === 0) {
    return returnArr;
  } else if (step === undefined) {
    for(let x = num1; x <= num2; x++) {
      returnArr.push(x);
    } 
  } else if (step < 0) {
    for(let x = num1; x >= num2; x -= step)
      returnArr.push(x);
  } else {
    for(let x = num1; x <= num2; x += step)
      returnArr.push(x);
  }
  return returnArr
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr, total = 0) {
  if (arr.length === 0) {
    return total
  }
  total += arr[0]
  return sum(arr.slice(1), total)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr, newArr = []) {
  if (arr.length === 0) {
    return newArr
  }
  newArr.unshift(arr[0])
  return reverseArray(arr.slice(1), newArr)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  let hold = 0;
  for (var x = 0; x < arr.length / 2; x++){
    hold = arr[x];
    arr[x] = arr[arr.length - (x + 1)];
    arr[arr.length - ( x + 1 )] = hold; 
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  let rest = null;
  for (let x = arr.length - 1; x >= 0; x--) {
    rest = { value: arr[x], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr = []) {
  if(list.rest === null) {
    arr.push(list.value)
    return arr;
  }
  arr.push(list.value);
  return listToArray(list.rest, arr);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list){
  let hold1 = listToArray(list);
  hold1.unshift(value);
  let hold2 = arrayToList(hold1);
  return hold2;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  for (let x = list; x; x = x.rest) {
  	let hold = listToArray(x);
    return hold[num];
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if (typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  } 
  if(typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  if(xKeys.length !== yKeys.length) {
    return false;
  }
  for (let i = 0; i < xKeys.length; i++) {
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
