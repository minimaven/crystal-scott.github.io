
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) {   //x represents the number of 'rows' of the triangle
  let tri = '';
  for (let i = 0; i < x; i++) {
    tri = tri + '#';
    console.log(tri);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //Loop thru 1 - 100
  for (var n = 1; n <= 15; n++) {
    //use if to check to see if the number is divided by 3 and five with no remander
    if (n % 5 === 0 && n % 3 === 0 ) {
      //print 'fizzbuz'     
      console.log('fizzbuzz');       
    //use else if to check to see if the number is dived by 3 with no remander        
    } else if (n % 3 === 0) {
      //print 'fizz'
      console.log('fizz');
    //use else if check if the number is divided by 5 with no remander        
    } else if (n % 5 === 0) {
      //print 'buzz' 
      console.log('buzz');
    //else print the number              
    } else {
      console.log(n);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {      //x represents the rows and columns of the chessboard
  let checkerboard = '';
  for (let row = 0; row < x; row++) {
    for (let column = 0; column < x; column++){
      if ((column + row) % 2 === 0) {
        checkerboard += ' ';
      } else {
        checkerboard += '#';
      }
    }
  checkerboard += '\n';
  }
  console.log(checkerboard)
}     //needs to return a dstrong the has all the breaks inside it

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
