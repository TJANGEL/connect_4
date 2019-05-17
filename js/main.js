// Basic Game Logic
(function() {
  var prefix = document.querySelector('#prefix');
  var primaryText = document.querySelector('.primary');
  var secondaryText = document.querySelector('.secondary');
  var currentPlayerName = document.querySelector('#current-player');
  var otherPlayerName = document.querySelector('#other-player');
  var playAgain = document.querySelector('#play-again');
  var playAgainBtn = document.querySelector('#play-again-btn');
  var gameBoard = document.querySelector('#board');

  playAgainBtn.addEventListener('click', () => location.reload());
  gameBoard.addEventListener('click', placeGamePiece);
  currentPlayerName.addEventListener('keydown', Game.do.handleNameChange);
  otherPlayerName.addEventListener('keydown', Game.do.handleNameChange);

  function placeGamePiece(e) {
    if (e.target.tagName !== 'BUTTON') return;

    var targetCell = e.target.parentElement;
    var targetRow = targetCell.parentElement;
    var targetRowCells = [...targetRow.children];
    var gameBoardRows = [...document.querySelectorAll('#board tr')];

    // Detect the x and y position of the button clicked.
    var y_pos = gameBoardRows.indexOf(targetRow);
    var x_pos = targetRowCells.indexOf(targetCell);

    // Ensure the piece falls to the bottom of the column.
    y_pos = Game.do.dropToBottom(x_pos, y_pos);

    if (Game.check.isPositionTaken(x_pos, y_pos)) {
      alert(Game.config.takenMsg);
      return;
    }

    // Add the piece to the board.
    Game.do.addDiscToBoard(x_pos, y_pos);
    Game.do.printBoard();

    // Check to see if we have a winner.
    if (
      Game.check.isVerticalWin() ||
      Game.check.isHorizontalWin() ||
      Game.check.isDiagonalWin()
    ) {
      gameBoard.removeEventListener('click', placeGamePiece);
      prefix.textContent = Game.config.winMsg;
      currentPlayerName.contentEditable = false;
      secondaryText.remove();
      playAgain.classList.add('show');
      return;
    } else if (Game.check.isGameADraw()) {
      gameBoard.removeEventListener('click', placeGamePiece);
      primaryText.textContent = Game.config.drawMsg;
      secondaryText.remove();
      playAgain.classList.add('show');
      return;
    }

    // Change player.
    Game.do.changePlayer();
  }
})();
