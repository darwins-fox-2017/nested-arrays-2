function tic_tac_toe_board () {
  let x = 0,
      o = 0,
  board = [[],[],[]]

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let random = Math.random();
      if(x < 5 && o < 5){
        if(random > 0.5){
          x++
          board[row].push('X')
        }else {
          o++
          board[row].push('O')
        }
      }else {
        if (x === 5) {
          board[row].push('O')
        }else {
          board[row].push('X')
        }
      }
    }
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
