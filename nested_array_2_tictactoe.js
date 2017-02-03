function tic_tac_toe_board () {
  let cross = 0
  let circle = 0
  let board = [[], [], []]
  console.log('board : ', board.length)

  for (let i = 0; i < board.length; i++) {
    for (let j=0; j < board.length; j++) {

      let randomPlay = Math.floor(Math.random()*10);

      if (circle < 5 && cross < 5) {
        if (randomPlay > 5) {
          circle++
          board[i].push('O')
        } else {
          cross++
          board[i].push('X')
        }
      } else {
        if (cross === 5) {
          board[i].push("O")
        } else {
          board[i].push("X")
        }
      }
    }
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
