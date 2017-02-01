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
    var json = []
    var player1 = {}
    var player2 = {}
    var player3 = {}
    var player4 = {}
    var player5 = {}
    player1.Number = roster[1][0]
    player1.Name = roster[1][1]
    player1.Position = roster[1][2]
    player1.Points = roster[1][3]
    player2.Number = roster[2][0]
    player2.Name = roster[2][1]
    player2.Position = roster[2][2]
    player2.Points = roster[2][3]
    player3.Number = roster[3][0]
    player3.Name = roster[3][1]
    player3.Position = roster[3][2]
    player3.Points = roster[3][3]
    player4.Number = roster[4][0]
    player4.Name = roster[4][1]
    player4.Position = roster[4][2]
    player4.Points = roster[4][3]
    player5.Number = roster[5][0]
    player5.Name = roster[5][1]
    player5.Position = roster[5][2]
    player5.Points = roster[5][3]

    json.push(player1)
    json.push(player2)
    json.push(player3)
    json.push(player4)
    json.push(player5)

    return json
    }

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])
// console.log(object_roster[1])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true
