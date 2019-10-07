let gamelist = [
  {
    id:      1,
    status:  "finished",
    user1:   "Maks",
    user2:   "Kira",
    field:   [
               'X', 'O', 'X',
               'O', 'X', null,
               'O', null, 'X'
             ],
    xIsNext: null,
    time:    15,
    winner:  "Maks"
  },
  {
    id:      2,
    status:  "in-progress",
    user1:   "Tony",
    user2:   "Ella",
    field:   [
               'O', 'X', 'X',
               'O', 'O', 'X',
               'X', null, null
             ],
    xIsNext: false,
    time:    25,
    winner:  ""
  },
  {
    id:      3,
    status:  "open",
    user1:   "Maks",
    user2:   "",
    field:   Array(9).fill(null),
    xIsNext: true,
    time:    null,
    winner:  ""
  }
]

export default gamelist
