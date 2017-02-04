// let roster = [
//   ['Number', 'Name', 'Position', 'Points per Game'],
//   [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
//   [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
//   [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
//   [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
//   [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
// ]

// // [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

// function convert_roster_format (nestedArray) {
    
// }

// let object_roster = convert_roster_format(roster)
// console.log(object_roster[2])

// // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
    // your convert code here
    let judul = []
    let data = []
    let panjang_judul = nestedArray[0].length;
    // cetak bagian [0,1 0,2 .. dst]
    for(var i = 0; i < panjang_judul; i++) {
      judul.push(roster[0][i])
    }
    // return judul
    // cetak data 
    for(let j = 1; j < nestedArray.length; j++) {
      let arr_object = {}
      for(let k = 0; k < nestedArray[j].length; k++) {
        arr_object[judul[k]] = nestedArray[j][k]
        // number = 12
      }
      data.push(arr_object)
    }
    return data
}



let object_roster = convert_roster_format(roster)
console.log(object_roster)

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

//console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true