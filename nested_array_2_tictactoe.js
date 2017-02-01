function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var acak_baris = [];
  var table = [];

  while ( acak_baris.length < 9) {
    var tampung_sementara = Math.floor(Math.random() * 9);
      if ( acak_baris.indexOf(tampung_sementara) === -1) {
        acak_baris.push(tampung_sementara);
      }
  }

  var acak_arr_1 = acak_baris.slice(0,3);
  var acak_arr_2 = acak_baris.slice(3,6);
  var acak_arr_3 = acak_baris.slice(6,9);

  for (var i = 0; i < 3; i++) {
    table.push([]);
  }

  for (var i = 0; i < 3; i++) {
    table[0].push([]);
    table[1].push([]);
    table[2].push([]);
  }
  // isi baris 1
  for ( var i = 0; i < 3; i ++) {
    table[0][i].push( xo_random[ acak_arr_1[i] ] );
  }
  // isi baris 2
  for ( var i = 0; i < 3; i ++) {
    table[1][i].push( xo_random[ acak_arr_2[i] ] );
  }
  // isi baris 3
  for ( var i = 0; i < 3; i ++) {
    table[2][i].push( xo_random[ acak_arr_3[i] ] );
  }

  return table;
}

console.log(tic_tac_toe_board())
