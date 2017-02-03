function tic_tac_toe_board () {
  // ...
  var xo_random = ["X", "O"]
  var board = [];
  var countX = 0;
  var countO = 0;

  for (var i = 0;i < 3; i++) {
    var arr = []
    board.push(arr)
    board[i].push(xo_random[Math.floor(Math.random()* 2)]);
    board[i].push(xo_random[Math.floor(Math.random()* 2)]);
    board[i].push(xo_random[Math.floor(Math.random()* 2)]);
  }

  for (var i = 0;i < 3;i++) {
    for(var j = 0;j < 3;j++) {
      if (board[i][j] == "X") {
        countX++
      } else {
        countO++
      }
    }
  }
  if (countX > 5 || countO > 5) {
    return  tic_tac_toe_board()
  } else {
    return board;
  }
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
