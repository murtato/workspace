var turn = "X"
var boxes = document.getElementsByClassName("box")

for (var i=0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', playMove)
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

var randomStart = function() {
  document.turn = "X";
  if (Math.random < 0.5) {
    document.turn = "O";
  }
  setMessage(document.turn + " gets to start.");
}

function playMove (event) {
    event.target.innerHTML = turn
    checkWinner()
    if (turn === "X")
            turn = "O"
        else
            turn = "X"
        event.target.removeEventListener('click', playMove)

//          turn = "X" ? "O" : "X"
}

function checkWinner() {
    console.log(checkWinner)
    var win = false
    var winConditions = [[0,1,2], [3,4,5], [6,7,8], //across
                        [0,3,6], [1,4,7], [2,5,8], //down
                        [0,4,8], [6,4,2]] //diagonal

winConditions.forEach(function(combo) {
      var box1 = boxes[combo[0]].innerHTML
      var box2 = boxes[combo[1]].innerHTML
      var box3 = boxes[combo[2]].innerHTML

      if(box1 === box2 && box2 === box3 && box1 !== " ") {
        alert(turn + " Wins!")
        for (var i=0; i < boxes.length; i++) {
          boxes[i].removeEventListener('click', playMove)
      }
    }
})

    if (win)
      return true
    var tie = true
      for (var i=0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === ' ')
          tie=false
      }
if (tie)
    alert('TIE GAME!')

}

//Reset game board
document.getElementById("reset").addEventListener('click', function (event) {
  for(var i=0; i<boxes.length; i++) {
    boxes[i].innerHTML = ' '
    boxes[i].addEventListener('click', playMove)
  }
})





/*

var s1 = "";
var s2 = "";
var s3 = "";
var s4 = "";
var s5 = "";
var s6 = "";
var s7 = "";
var s8 = "";
var s9 = "";

var tiles = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

function startGame() {

  for (var i = 1; i <= 9; i++) {
    clearBox(i);
  }

  document.turn = "X";
  if (Math.random() < 0.5) {
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function checkWinner() {
    var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                        [0,3,6], [1,4,7], [2,5,8],
                        [0,4,8], [6,4,2]]
    for (combo in winConditions) {
      if(tiles[combo[0]] == tiles[combo[1]] && tiles[combo[1]] == tiles[combo[2]] && (tiles[combo[0]] != "")) {
        document.winner = tiles[combo[0]];
        return tiles[combo[0]]
      }
    }
  }

function nextMove(square) {
    if (document.winner != null) {
      setMessage(document.winner + " already won the game.");
    }
    else if (square.innerText == "") {
    square.innerText = document.turn;
    nextTurn();
  } else {
    setMessage("That square is already taken.")
  } checkWinner();
}

function nextTurn() {
  if (checkWinner(document.turn)) {
      setMessage("Congratulations, "+document.turn+"! You win!")
      document.turn = document.winner;

  } else if (document.turn == "X") {
      document.turn = "O";
      setMessage("It's " + document.turn + "'s turn!")

  } else {
      document.turn = "X";
      setMessage("It's " + document.turn + "'s turn!")
  }
}


function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c)== move) {
    result = true;
  }
}


/* function startGame() {

  for (var i = 1; i <= 9; i++) {
    clearBox(i);
  }

  document.turn = "X";
  if (Math.random() < 0.5) {
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
      setMessage(document.winner + "already won the game.");
    }
    else if (square.innerText == "") {
    square.innerText = document.turn;
    nextTurn();
  } else {
    setMessage("That square is already taken.")
  }
}

function nextTurn() {
  if (checkWinner(document.turn)) {
      setMessage("Congratulations, "+document.turn+"! You win!")
      document.winner = document.turn;

  } else if (document.turn == "X") {
      document.turn = "O";
      setMessage("It's " + document.turn + "'s turn!")

  } else {
      document.turn = "X"
      setMessage("It's " + document.turn + "'s turn!")
  }
}


    var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                        [0,3,6], [1,4,7], [2,5,8],
                        [0,4,8], [6,4,2]]

      result = true;


function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c)== move) {
    result = true;
  }
}

function getBox(number) {
  document.getElementById("s" + number).innerText;
}

function clearBox(number) {
  document.getElementById("s"+number).innerText = ""
}


//Tic Tac Toe

/*
function startGame() {
  document.turn = "X";
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  square.innerText = document.turn;
  nextTurn();
}

function nextTurn() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X"
  }
}

var grid;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                    [0,3,6], [1,4,7], [2,5,8],
                    [0,4,8], [6,4,2]]
var turn = 'X';
var score = {
  'X' = 0,
  'O' = 0
}
var gridValue = 0;
*/
