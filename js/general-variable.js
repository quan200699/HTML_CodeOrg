const GAME_PLAY_ID = 'game-play';
const GAME_BOARD_ID = 'game-board';
const forward = "1";
const left = "2";
const right = "3";

var coustRepeats = 0;

var win1 = true;
var win2 = false;

var goiLaiHam;

var arrRun=[];
var cout=0;

const START_GAME = [
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '1', '-', '0', '0', '0',
    '0', '0', '0', '0', '-', '0', '0', '0',
    '0', '0', '0', '0', '-', '-', '2', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
]


