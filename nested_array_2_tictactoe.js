function cekTicTac(nilBaris) {
  var numx=0;
  var numo=0;
  for (var baris = 0; baris < nilBaris.length; baris++) {
    for (var kolom = 0; kolom < nilBaris[0].length; kolom++) {
       if (nilBaris[baris][kolom]=='X') {
         numx=numx+1;
       }else if (nilBaris[baris][kolom]='O') {
         numo=numo+1;
       }
    }
  }
  return Math.abs(numx-numo);
}

function generateTicTac() {
  var nilBaris=[];
  var nilKolom=[];
  for (var baris = 0; baris < 3; baris++) {
    for (var  kolom= 0; kolom < 3; kolom++) {
      if (Math.random()<0.5) {
        nilKolom.push('X');
      }else {
        nilKolom.push('O');
      }
    }
    nilBaris.push(nilKolom);
    nilKolom=[];
  }
return nilBaris;
}

function tic_tac_toe_board () {
  var board;
  var test=2;
  while (test>1) {
    board=generateTicTac();
    test=cekTicTac(board);
  }
  return board;
}

//console.log(tic_tac_toe_board()) // => make a random tic tic board
console.log(tic_tac_toe_board());
