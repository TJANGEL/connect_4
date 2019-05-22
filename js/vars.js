var Game = {};

// Global game config
Game.config = {
  startingPlayer: 'black',
  takenMsg: 'This position is already taken. Please make another choice.',
  drawMsg: 'This game is a draw.',
  winMsg: 'The winner is: ',
  countToWin: 4,
  boardLength: 6,
  boardHeight: 5
};

// Global Game State
Game.board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

Game.currentPlayer = Game.config.startingPlayer;
