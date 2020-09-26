const GAME_PLAY_ID = 'game-play';
const GAME_BOARD_ID = 'game-board';
var coustRepeats = 0;


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

function filterArrRun(arrRun) {
    let newArrRun=[];
    for (let i = 0; i <arrRun.length;i++){
        if(arrRun[i] !== "t"){
            newArrRun.push(arrRun[i]);
        }
    }
    return newArrRun;

}




function findIndexArrInput(arrMap) {

    for (let i = 0; i<arrMap.length;i++) {
            if (arrMap[i]==='1'){
                console.log(i)
                return i;
            }
        }
}

var win1 = true;
var win2 = false;

function makeChange(indexArrInput, i,gameBoard,arrMap) {

        if (arrRun[indexArrInput] === "1"){
            if (arrMap[i+8]==="-"){
                arrMap[i+8]= "1";
                arrMap[i]= "-";
                gameBoard.drawGameBoard();
            }else {
                if (arrMap[i+8] === "2"){
                    arrMap[i+8]= "1";
                    arrMap[i]= "-";
                    gameBoard.drawGameBoard();
                    // alert("You Win")
                    win1 = true;
                    win2 = true;
                } else {
                    alert("bạn đã sai")
                    win1 = false;
                    win2 = false;
                }
            }

        } else {
            if (arrRun[indexArrInput]=== "2"){
                if (arrMap[i+1]==="-"){
                    arrMap[i+1]= "1";
                    arrMap[i]= "-";
                    gameBoard.drawGameBoard();
                }else {
                    if (arrMap[i + 1] === "2") {
                        arrMap[i + 1] = "1";
                        arrMap[i] = "-";
                        gameBoard.drawGameBoard();

                        win1 = true;
                        win2 = true;
                    }else {
                        win1 = false;
                        win2 = false;
                        alert("bạn đã sai")
                    }
                }

            } else {
                if (arrRun[indexArrInput]=== "3"){
                    if (arrMap[i-1]==="-"){
                        arrMap[i-1]= "1";
                        arrMap[i]= "-";
                        gameBoard.drawGameBoard();
                    } else {
                        if (arrMap[i-1]==="2") {
                            arrMap[i - 1] = "1";
                            arrMap[i] = "-";
                            gameBoard.drawGameBoard();
                            // alert("You Win")
                            win1 = true;
                            win2 = true;
                        }else {
                            alert("bạn đã sai")
                            win1 = false;
                            win2 = false;
                        }
                    }
                }
            }
        }
}

function callFunction(arrMap) {


        let str = parseInt(findIndexArrInput(arrMap));
        makeChange(coustRepeats, str, gameBoard, START_GAME);

        console.log(coustRepeats);
        coustRepeats++;

}

let goiLaiHam;
let callFunction2 = function () {
    console.log(arrRun);
    arrRun = filterArrRun(arrRun);
    console.log(arrRun);

    if (win1) {
        if (coustRepeats < arrRun.length) {
            callFunction(START_GAME);
        } else {
            if (win2){
                clearInterval(goiLaiHam);
                alert("You Win")
            }else {
                alert("Đường thiếu rồi")
                clearInterval(goiLaiHam);
            }

        }
    }
}

function runGame() {
        goiLaiHam  = setInterval(callFunction2, 200);
}

function resetGame() {

}
