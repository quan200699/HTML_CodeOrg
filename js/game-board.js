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

function filterArrRun(arrRun) {
    let newArrRun = [];
    for (let i = 0; i < arrRun.length; i++) {
        if (arrRun[i] !== "t") {
            newArrRun.push(arrRun[i]);
        }
    }
    return newArrRun;
}

function findIndexArrInput(arrMap) {

    for (let i = 0; i < arrMap.length; i++) {
        if (arrMap[i] === '1') {
            return i;
        }
    }
}

function checkOnMove(index,i, game_Board, arrMap) {

    if (arrMap[parseInt(i + index)] === "-") {
        arrMap[parseInt(i + index)] = "1";
        arrMap[i] = "-";
        game_Board.drawGameBoard();
    } else {
        if (arrMap[i + index] === "2") {
            arrMap[i + index] = "1";
            arrMap[i] = "-";
            game_Board.drawGameBoard();
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


function makeChange(indexArrInput, i, game_Board, arrMap) {

    if (arrRun[indexArrInput] === forward) {
        checkOnMove(8,i, game_Board, arrMap);
    } else {
        if (arrRun[indexArrInput] === left) {
            checkOnMove(1,i, game_Board, arrMap);
        } else {
            if (arrRun[indexArrInput] === right) {
                checkOnMove(-1,i, game_Board, arrMap);
            }
        }
    }
}

function callFunction(arrMap) {
    let str = parseInt(findIndexArrInput(arrMap));
    makeChange(coustRepeats, str, gameBoard, START_GAME);
    coustRepeats++;

}


function callFunction2(START_GAME) {
    console.log(arrRun);
    arrRun = filterArrRun(arrRun);
    console.log(arrRun);

    if (win1) {
        if (coustRepeats < arrRun.length) {
            callFunction(START_GAME);
        } else {
            if (win2) {
                clearInterval(goiLaiHam);
                alert("You Win")
            } else {
                alert("Đường thiếu rồi")
                clearInterval(goiLaiHam);
            }

        }
    }else {
        clearInterval(goiLaiHam);
    }
}

function runGame() {
    goiLaiHam = setInterval(function () {
        callFunction2(START_GAME);
    }, 200);
}

function resetGame() {

}