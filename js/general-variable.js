const GAME_PLAY_ID = 'game-play';
const GAME_BOARD_ID = 'game-board';
var cout2 = 0;


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
const START_GAME2 = [
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '1', '-', '0', '0', '0',
    '0', '0', '0', '0', '-', '0', '0', '0',
    '0', '0', '0', '0', '-', '-', '2', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
]



function findIndexArrInput(arrMain) {

    for (let i = 0; i<arrMain.length;i++) {
            if (arrMain[i]=='1'){
                console.log(i)
                return i;
            }
        }
}

var win = true;
var win2 = false;

function thucHienChuyenDoi(indexArrInput, i,gameBoard,arrMain) {

        if (arrRun[indexArrInput] === "1"){
            if (arrMain[i+8]==="-"){
                arrMain[i+8]= "1";
                arrMain[i]= "-";
                gameBoard.drawGameBoard();
            }else {
                if (arrMain[i+8] === "2"){
                    arrMain[i+8]= "1";
                    arrMain[i]= "-";
                    gameBoard.drawGameBoard();
                    alert("You Win")
                    win = true;
                    win2 = true;
                } else {
                    alert("bạn đã sai")
                    win = false;
                    win2 = false;
                }
            }

        } else {
            if (arrRun[indexArrInput]=== "2"){
                if (arrMain[i+1]==="-"){
                    arrMain[i+1]= "1";
                    arrMain[i]= "-";
                    gameBoard.drawGameBoard();
                }else {
                    if (arrMain[i + 1] === "2") {
                        arrMain[i + 1] = "1";
                        arrMain[i] = "-";
                        gameBoard.drawGameBoard();
                        alert("You Win")
                        win = true;
                        win2 = true;
                    }else {
                        win = false;
                        win2 = false;
                        alert("bạn đã sai")
                    }
                }

            } else {
                if (arrRun[indexArrInput]=== "3"){
                    if (arrMain[i-1]==="-"){
                        arrMain[i-1]= "1";
                        arrMain[i]= "-";
                        gameBoard.drawGameBoard();
                    } else {
                        if (arrMain[i-1]==="2") {
                            arrMain[i - 1] = "1";
                            arrMain[i] = "-";
                            gameBoard.drawGameBoard();
                            alert("You Win")
                            win = true;
                            win2 = true;
                        }else {
                            alert("bạn đã sai")
                            win = false;
                            win2 = false;
                        }
                    }
                } else {
                    alert("bạn đã sai")
                }
            }
        }
}

function thucHien(arrMain) {
        let str = parseInt(findIndexArrInput(arrMain));
        thucHienChuyenDoi(cout2, str, gameBoard, START_GAME);

        console.log(cout2);
        cout2++;

}

let goiLaiHam;
let thuchien2 = function () {
    if (win) {
        if (cout2 < arrRun.length) {
            thucHien(START_GAME);
        } else {
            if (win2){
                clearInterval(goiLaiHam);
            }else {
                alert("Đường thiếu rồi")
                clearInterval(goiLaiHam);
            }

        }
    }
}

function runGame() {
        goiLaiHam  = setInterval(thuchien2, 400);
}
