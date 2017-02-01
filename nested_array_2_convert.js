let roster = [
  ['Number', 'Name', 'Position', 'Points per Game','status'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23], false ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0], true ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25], false ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19], true ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0], false ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...
;

function convert_roster_format (nestedArray) {
  let arrTemp = [],
      header  = [];

  for (let countHeader = 0; countHeader < roster[0].length; countHeader++){
    header.push(roster[0][countHeader])
  }

  for (let i = 1; i < roster.length; i++) {
    let arrObject = {}
    for (let j = 0; j < roster[i].length; j++) {
      arrObject[header[j]] = roster[i][j]
    }
    arrTemp.push(arrObject)
  }
  // console.log(header);
  return arrTemp
}

let object_roster = convert_roster_format(roster)
console.log(object_roster)

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true
