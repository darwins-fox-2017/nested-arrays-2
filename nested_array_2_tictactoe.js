
function tic_tac_toe_board() {
  var temp = []
  for (var i = 0; i < 3; i++) {
    var random = Math.random()
    if (random > 0.5) {
      temp.push('X')
    }else if (random < 0.5) {
      temp.push('O')
    }
  }
  return temp
}

function newTable() {
  for (var i = 0; i < 6; i++) {
    console.log(tic_tac_toe_board());
    // return tic_tac_toe_board()
  }
}



// console.log(tic_tac_toe_board()) // => make a random tic tic board
newTable()
// console.log(newTable());
