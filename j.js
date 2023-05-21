var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var currentPlayer = "X";

function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    document.getElementsByClassName("cell")[row * 3 + col].innerHTML = currentPlayer;
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
  }

  checkWinner();
}

function checkWinner() {
  var winningCombinations = [
    [[0, 0], [0, 1], [0, 2]], // Rows
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // Columns
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // Diagonals
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var combo = winningCombinations[i];
    var a = combo[0];
    var b
