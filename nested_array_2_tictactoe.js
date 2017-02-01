function tic_tac_toe_board () {
  let x = 0;
  let o = 0;
  var n = 3;
  let board = [[],[],[]]

  for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let random = Math.ceil(Math.random())
      if (x < 5 && o <5) {
        if (random > 1) {
          x++
          board[i].push("X")
          // console.log("--- push X --", board[i]);
        } else {
          o++
          board[i].push("O")
          // console.log("--- push O --", board[i]);
        }
      } else {
        if (x === 5) {
          board[i].push("O")
          // console.log("--- push O --", board[i]);
        } else {
          board[i].push("X")
          // console.log("--- push X --", board[i]);
        }
      }
    }
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
