function tic_tac_toe_board () {
  // ...
  let tic_tac_board = []
  let fill = ['x', 'o']
  for (let i = 0; i < 3; i++) {
    tic_tac_board.push([])
    let decition = Math.round(Math.random()*(2-1)+1)
    tic_tac_board[i][0] = fill[decition-1]
    for (let j = 1; j < 3; j++) {
      if(tic_tac_board[i][j-1] === 'x') {
          tic_tac_board[i][j] = 'o'
      } else { 
        tic_tac_board[i][j] = 'x'
      }
    } 
  }

  return tic_tac_board 
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
