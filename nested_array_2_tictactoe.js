function tic_tac_toe_board () {
  // ...
  let arr = []

  let data = ['X', 'O']
  
  for (let i = 0; i < 3; i++) {
    arr.push([])
    // cetak baris pertama
    let acak = Math.floor(Math.random() * 2 ) // 0 ? 1
    arr[i][0] = data[acak]

    for (let j = 1; j < 3; j++) {
      if(arr[i][j-1] === 'O') {
          arr[i][j] = 'X'
      } else { 
        arr[i][j] = 'O'
      }
    } 
  }

  return arr 
}

console.log(tic_tac_toe_board()) // => make a random tic tic board