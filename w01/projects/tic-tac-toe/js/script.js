var turn = "X"
var tiles = document.getElementsByClassName('tile')
//Loop through the tiles and add click handlers
//to each one
for (var i=0; i<tiles.length; i++) {
    tiles[i].addEventListener('click', callback)
}

 function callback (event) {
        event.target.innerHTML = turn
        winCheck()
        //change turn
        if (turn === "X")
            turn = "O"
        else
            turn = "X"
        // disables same-square clicking
        event.target.removeEventListener('click', callback)
  }

function winCheck () {
  var win = false
  var winCombos = [
      [0,1,2], // across
      [3,4,5],
      [6,7,8],
      [0,3,6], // down
      [1,4,7],
      [2,5,8],
      [0,4,8], // diagonal
      [6,4,2]
  ]

  winCombos.forEach(function (combo) {
        var tile1 = tiles[combo[0]].innerHTML
        var tile2 = tiles[combo[1]].innerHTML
        var tile3 = tiles[combo[2]].innerHTML

        if (tile1 === tile2 && tile2 === tile3 && tile1 !== ' ') {
          alert("Player " + turn + " Wins!")
          for (var i=0; i < tiles.length; i++) {
            tiles[i].removeEventListener('click', callback)
          }
      }
  })

if (win)

    return true

var tie = true
for (var i=0; i< tiles.length; i++) {
    if (tiles[i].innerHTML === ' ')
        tie = false
}
if (tie)
    alert('TIE GAME!')

}

//Reset game board
document.getElementById("reset").addEventListener('click', function (event) {
  for(var i=0; i<tiles.length; i++) {
    tiles[i].innerHTML = ' '
    tiles[i].addEventListener('click', callback)
  }
})
