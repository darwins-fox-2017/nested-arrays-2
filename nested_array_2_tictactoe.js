function tic_tac_toe_board () {
  let board = []
  let hasil = []
  let signXO = [{'sign' : 'X' , 'count' :0},{'sign' : 'O' , 'count' :0}]
  let chunk = 3

  while(board.length<9){
    let valid = true
    let signInput = signXO[Math.floor(Math.random()*2)].sign
    switch (signInput) {
      case 'X':
        signXO[0].count++
        if(signXO[0].count>5){
          valid = false
          signXO[0].count--
        }
        break;

      default:
        signXO[1].count++
        if(signXO[1].count>5){
          valid = false
          signXO[1].count--
        }

    }
    if(valid){
      board.push(signInput)
    }
  }

  for(let i=0,j=9; i<j; i+=chunk){
    hasil.push(board.slice(i, i+chunk))
  }

  return hasil
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
