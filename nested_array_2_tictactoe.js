function tic_tac_toe_board() {
    // ...
    // var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
    let tampung = [];
    let countX = 0;
    let countO = 0;
    //
    // for(var i = 0; i < 9; i++){
    // var random = Math.floor((Math.random() * 10))
    // if(random % 2 == 0 ){
    // 	if(countX >= 5){
    // 		countO++;
    //     tampung.push("O");
    // 	}else{
    //     tampung.push("X")
    //     countX++;
    //   }
    // }
    // else {
    // 	if(countO >= 5){
    // 		countX++;
    //     tampung.push("X");
    // 	}else{
    //     tampung.push("O")
    //     countO++;
    //   }
    // }
    // }
    let Arr = [];
    for (var i = 0; i < 3; i++) {
        Arr[i] = []
        for (var j = 0; j < 3; j++) {
            var random = Math.floor((Math.random() * 10))
            if (random % 2 == 0) {
                if (countX >= 5) {
                    countO++;
                    Arr[i][j] = "O"
                } else {
                    Arr[i][j] = "X"
                    countX++;
                }
            } else {
                if (countO >= 5) {
                    countX++;
                    Arr[i][j] = "X"
                } else {
                    Arr[i][j] = "O"
                    countO++;
                }
            }
        }
    }
    return Arr
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
