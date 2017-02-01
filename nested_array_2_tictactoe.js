class TicTacToe {
  constructor() {
    this.symbols = ['X', 'O']
    this.ticTacToe = []
  }

  xOrO(){
    return Math.random() < 0.5 ? this.symbols[0] : this.symbols[1]
  }

  makeRandomTicTacBoard(){
    let xCount = 0
    let oCount = 0
    for (let i = 0; i < 3; i++) {
      let row = []
      for (let i = 0; i < 3; i++) {
        if (xCount >= 5) {
          row.push('O')
        } else if (oCount >=5) {
          row.push('X')
        } else{
          if (this.xOrO() == 'X') {
            xCount++
            row.push('X')
          } else {
            oCount++
            row.push('O')
          }
        }
      }
      this.ticTacToe.push(row)
    }
    return this.ticTacToe
  }
  testRandomTicTacToe(ticTacToe){
    let xCount = 0
    let oCount = 0
    for (let i = 0; i < ticTacToe.length; i++) {
      for (let j = 0; j < ticTacToe[i].length; j++) {
        // console.log(ticTacToe[i][j]);
        ticTacToe[i][j] == 'X' ? xCount++ : oCount++
      }
    }
    console.log('Count X : ', xCount);
    console.log('Count O : ', oCount);
    if (xCount == 5) {
      if (oCount == 4) {
        return true
      }
    } else if (xCount == 4) {
      if (oCount == 5) {
        return true
      }
    } else {
      return false
    }
  }
}

let ayoMain = new TicTacToe()

let game1 = ayoMain.makeRandomTicTacBoard()
console.log('------ Random TicTacToe Board -------');
console.log(game1);
console.log('------ Test the TicTacToe Board ------ ');
console.log('Hasil Test : ' + ayoMain.testRandomTicTacToe(game1));
