/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Great White';
animal['name'] = 'Sharkie';
animal.noises = [];

console.log (animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'chomp';
noises.push('blub');
noises.unshift('snack');
noises[noises.length] = 'duh da duh da';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('swim');

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *        keys and values
 * 2. What are the different ways of accessing elements on arrays?
 *        dot and bracket notion
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);

console.log(animals);

var duck = { 
  species: 'Duck',
  name: 'Jerome',
  noises: [
  'quack',
  'honk',
  'sneeze',
  'woosh']
}

animals.push(duck);

console.log(animals);

var otter = { 
  species: 'River Otter',
  name: 'Pearl',
  noises: [
  'chirp',
  'purr',
  'squeal',
  'hisses']
}

animals.push(otter);

var lion = { 
  species: 'Congo Lion',
  name: 'Alphonse',
  noises: [
  'roar',
  'purr',
  'meow',
  'bet']
}

animals.push(lion);

console.log(animals);
console.log(animals.length);
  

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I'm choosing and object because it can us the keys to match information about the friend

var friends = {
  
}

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}