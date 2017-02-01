function tic_tac_toe_board () {
  let x = 0
  let o = 0
  let board = [[], [], []]

  for (let i = 0; i < board.length; i++) {
    for (let j=0; j < board.length; j++) {

      let randomPin = Math.random();
      if ( x<5 && o<5) {
        if ( randomPin > 0.5) {
          x++
          board[i].push('x')
        } else {
          o++
          board[i].push('o')
        }
      } else {
        if (x === 5) {
          board[i].push('x')
        } else {
          board[i].push('o')
        }
      }
    }
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
