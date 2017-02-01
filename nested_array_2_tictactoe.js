'use strict'
function tic_tac_toe_board () {
  let arr = [];
  let xCount = 0;
  let oCount = 0;
  for(let i=0; i<3; i++) {
    arr[i] = []
    for(let j=0; j<3; j++) {
      let filler = Math.floor(Math.random() * 10)
      if (xCount === 5)
        arr[i][j] = 'o';
      else if (oCount === 5)
        arr[i][j] = 'x';
      else if (filler % 2 === 0) {
        arr[i][j] = 'x';
        xCount += 1;
      }
      else if (filler % 2 !== 0) {
        arr[i][j] = 'o';
        oCount += 1;
      }
    }
  }
return arr;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
