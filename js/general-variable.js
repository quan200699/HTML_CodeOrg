const GAME_PLAY_ID = 'game-play';
const GAME_BOARD_ID = 'game-board';
var cout2 = 0;

const START_GAME = [
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '1', '0', '0', '0', '0',
    '0', '0', '0', '-', '0', '0', '0', '0',
    '0', '0', '0', '-', '0', '0', '0', '0',
    '0', '0', '0', '2', '0', '0', '0', '0',
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

function thucHienChuyenDoi(indexArrInput, i,gameBoard,arrMain) {

        if (arrRun[indexArrInput] === "1" && arrMain[i+8]==="-"){
            arrMain[i+8]= "1";
            arrMain[i]= "-";
            gameBoard.drawGameBoard();

        } else {
            if (arrRun[indexArrInput]=== "2" && arrMain[i+1]==="-"){
                arrMain[i+1]= "1";
                arrMain[i]= "-";
                gameBoard.drawGameBoard();
                alert(2)
            } else {
                if (arrRun[indexArrInput]=== "3" && arrMain[i-1]==="-"){
                    arrMain[i-1]= "1";
                    arrMain[i]= "-";
                    gameBoard.drawGameBoard();
                    alert(3)
                } else {
                    alert("bạn đã sai")
                }
            }
        }
}

function thucHien(arrMain) {
        let str = parseInt(findIndexArrInput(arrMain));
        thucHienChuyenDoi(cout2, str, gameBoard, START_GAME);

        console.log("cout2 = "+cout2);
        cout2++;

}



function runGame(arrMain) {
    let goiLaiHam;
    if (cout2 < arrRun.length) {
        goiLaiHam  = setInterval(thucHien(arrMain), 50);
        alert("a")
    }
    else {
        alert("sai roi")
        clearInterval(goiLaiHam);
        }
}