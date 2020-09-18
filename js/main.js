let bird = new Bird(200, 150);
let pig = new Pig(200, 250);
let gameBoard = new GameBoard(CANVAS_ID, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
gameBoard.drawGameBoard();
gameBoard.drawGame(bird, pig);
