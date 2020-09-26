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