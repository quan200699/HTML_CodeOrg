function GameBoard(id, level) {
    this.id = id;
    this.level = level
    this.drawGameBoard = () => {
        let gameBoard = "";
        gameBoard += `<div class="row" id="${this.id}">`
        this.level.map(value => {
            if (value === '0') {
                gameBoard += `<div class="obstacles"></div>`
            } else if (value === '1') {
                gameBoard += `<div class="birds"></div>`
            } else if (value === '2') {
                gameBoard += `<div class="pigs"></div>`
            } else {
                gameBoard += `<div class="space"></div>`
            }
        })
        gameBoard += `</div>`
        document.getElementById(GAME_PLAY_ID).innerHTML = gameBoard;
    }
    // this.drawBackground = (ctx) => {
    //     this.image.src = "img/background.png"
    //     ctx.drawImage(this.image, 0, 0);
    // }
    // this.drawGame = (bird, pig) => {
    //     let ctx = document.getElementById(this.id).getContext("2d");
    //     this.drawBackground(ctx)
    //     bird.drawBird(ctx);
    //     pig.drawPig(ctx);
    // }
}
// lọc mảng arrRun thành mảng mới không có ký tự thừa
function filterArrRun(arrRun) {
    let newArrRun = [];
    for (let i = 0; i < arrRun.length; i++) {
        if (arrRun[i] !== "t") {
            newArrRun.push(arrRun[i]);
        }
    }
    return newArrRun;
}

// tìm vị trí của chim
function findIndexBird(arrMap) {

    for (let i = 0; i < arrMap.length; i++) {
        if (arrMap[i] === '1') {
            return i;
            console.log(i)
        }
    }
}

// Hàm thay đổi mảng Map.
function checkOnMove(index,i,gameBoard,arrMap) {

    if (arrMap[parseInt(i + index)] === "-") {
        arrMap[parseInt(i + index)] = "1";
        arrMap[i] = "-";
        gameBoard.drawGameBoard();
    } else {
        if (arrMap[i + index] === "2") {
            arrMap[i + index] = "1";
            arrMap[i] = "-";
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

}

// Hàm thực hiện thay đổi theo mảng RUN
function makeChange(indexArrRun, i,gameBoard, arrMap) {

    if (arrRun[indexArrRun] === forward) {
        checkOnMove(8,i,gameBoard, arrMap);
    } else {
        if (arrRun[indexArrRun] === left) {
            checkOnMove(1,i, gameBoard,arrMap);
        } else {
            if (arrRun[indexArrRun] === right) {
                checkOnMove(-1,i, gameBoard,arrMap);
            }
        }
    }
}

//Hàm gọi thực hiện hàm makeChange.
function callFunction(arrMap) {
    let str = parseInt(findIndexBird(arrMap));
    makeChange(coustRepeats, str,gameBoard,arrMap);
    coustRepeats++;

}

// Hàm gọi để check win, level
function callFunction2(START_GAME) {
   // thực hiện lọc mảng arrRun.
    arrRun = filterArrRun(arrRun);
    console.log(arrRun);

    if (win1) {
        if (coustRepeats < arrRun.length) {
            callFunction(START_GAME);
        } else {
            if (win2) {
                level ++;
                alert("You Win");

                if (level === 1) {
                    gameBoard.level = START_GAME2;
                    resetVariables();
                    clearWhenRun();
                    gameBoard.drawGameBoard();
                    clearInterval(goiLaiHam);
                }
                if (level === 2) {
                    gameBoard.level = START_GAME3;
                    resetVariables();
                    clearWhenRun();
                    gameBoard.drawGameBoard();
                    clearInterval(goiLaiHam);
                }
                if (level === 3) {
                    gameBoard.level = START_GAME4;
                    resetVariables();
                    clearWhenRun();
                    gameBoard.drawGameBoard();
                    clearInterval(goiLaiHam);
                } else {
                    clearInterval(goiLaiHam);
                }

            } else {
                alert("Đường thiếu rồi")
                clearInterval(goiLaiHam);
            }
        }
    }else {
        clearInterval(goiLaiHam);
    }
}

//Hàm chạy khi nhấn When Run.
function runGame() {
    // tạo mảng mới để thay thế mảng Map ban đầu.
    let newSTART_GAME = [];
    newSTART_GAME = gameBoard.level;
    gameBoard.level = newSTART_GAME;
        goiLaiHam = setInterval(function () {
            callFunction2(newSTART_GAME);
        }, 300);
}

function resetGame() {
    clearWhenRun();
    resetVariables();
    gameBoard.level=START_GAME1;
    gameBoard.drawGameBoard();
}

// Hàm làm trắng WHen Run
function clearWhenRun() {
    document.getElementById("work-space").innerHTML = "<div id='begin-block'>when run</div>";
}

//Hàm reset biến.
function resetVariables() {
    coustRepeats = 0;
    win1 = true;
    win2 = false;
    arrRun=[];
    cout=0;
}