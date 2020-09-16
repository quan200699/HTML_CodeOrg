let bird = new Bird(200, 10);
let pig = new Pig(200, 200);
let gameBoard = new GameBoard(CANVAS_ID, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
gameBoard.drawGameBoard();
gameBoard.drawGame(bird, pig);
$( function() {
    $( "#draggable" ).draggable();
} );
