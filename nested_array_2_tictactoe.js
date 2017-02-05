function tic_tac_toe_board() {
  var xo_random = []//["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var x = 0;
  var o = 0;
	for(var i=0; i<9; i++){
		if(Math.round(Math.random()) == 1){
			if(x >= 5){
				xo_random.push("O");
			} else {
				xo_random.push("X");
			}
		} else {
			if(x >= 5){
				xo_random.push("X");
			} else {
				xo_random.push("O");
			}
		}
	}

  	var xo_grid = []//["X", "O", "X", "O", "X", "O", "X", "O", "X"]
	for (var i=0; i<9; i+=3){
		xo_grid.push(xo_random.slice(i, i+3));
	}
	return xo_grid;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
