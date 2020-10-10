function GameBoard(id, level) {
    this.id = id;
    this.level = level
    this.drawGameBoard = (x) => {
        let gameBoard = "";
        gameBoard += `<div class="row" id="${this.id}">`
        this.level.map(value => {
            if (value === '0') {
                gameBoard += `<div class="square obstacles"></div>`
            } else if (value === '1') {
                gameBoard += `<div class="square birds" id="bird" style="background-size: 100%"></div>`
            } else if (value === '2') {
                gameBoard += `<div class="square pigs"></div>`
            } else {
                gameBoard += `<div class="square space"></div>`
            }
        })
        gameBoard += `</div>`
        document.getElementById(GAME_PLAY_ID).innerHTML = gameBoard;
        drawBird('idle_avatar.gif', x, 50);
    }
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
        }
    }
}

drawBird = (img, width, height) => {
    document.getElementById('bird').style.background = `url(./img/${img}) ${width}px ${height}px`;
    document.getElementById('bird').style.backgroundSize = '100%';
    document.getElementById('bird').style.width = '12.5%';
    document.getElementById('bird').style.height = '12.5%';

}

// Hàm thay đổi mảng Map.
function checkOnMove(index, i, gameBoard, arrMap) {
    if (arrMap[parseInt(i + index)] === "-") {
        arrMap[parseInt(i + index)] = "1";
        arrMap[i] = "-";
        gameBoard.drawGameBoard(x);
    } else {
        if (arrMap[i + index] === "2") {
            arrMap[i + index] = "1";
            arrMap[i] = "-";
            gameBoard.drawGameBoard(x);
            // alert("You Win")
            win1 = true;
            win2 = true;
        } else {
            // drawBird('wall_avatar.png', x, 50);
            alert("bạn đã sai")
            win1 = false;
            win2 = false;
        }
    }
}

// Hàm thực hiện thay đổi theo mảng RUN
function makeChange(indexArrRun, i, gameBoard, arrMap) {
    if (arrRun[indexArrRun] === FORWARD) {
        checkOnMove(index, i, gameBoard, arrMap);
    } else {
        if (arrRun[indexArrRun] === LEFT) {
            x += 50;
            drawBird('idle_avatar.gif', x, 50)
            if (index === 8) {
                index = 1;
            } else if (index === 1) {
                index = -8;
            } else if (index === -8) {
                index = -1;
            } else {
                index = 8;
            }
        } else {
            if (arrRun[indexArrRun] === RIGHT) {
                x -= 50;
                drawBird('idle_avatar.gif', x, 50)
                if (index === 8) {
                    index = -1;
                } else if (index === -1) {
                    index = -8;
                } else if (index === -8) {
                    index = 1;
                } else {
                    index = 8;
                }
            }
        }
    }
    console.log(gameBoard.level)
}

//Hàm gọi thực hiện hàm makeChange.
function callFunction(arrMap) {
    let str = parseInt(findIndexBird(arrMap));
    makeChange(countRepeats, str, gameBoard, arrMap);
    countRepeats++;

}

// Hàm gọi để check win, level
function callFunction2(arrMap) {
    // thực hiện lọc mảng arrRun.
    arrRun = filterArrRun(arrRun);
    console.log(arrRun);

    if (win1) {
        if (countRepeats < arrRun.length) {
            callFunction(arrMap);
        } else {
            if (win2) {
                level++;
                alert("You Win");

                if (level <= GAME_LEVEL) {
                    gameBoard.level = eval("START_GAME" + (level + 1));
                    resetVariables();
                    clearWhenRun();
                    x = 100;
                    gameBoard.drawGameBoard(x);
                    clearInterval(intervalId);
                } else {
                    clearInterval(intervalId);
                }

            } else {
                alert("Đường thiếu rồi")
                clearInterval(intervalId);
            }
        }
    } else {
        clearInterval(intervalId);
    }
}

//Hàm chạy khi nhấn When Run.
function runGame() {
    // tạo mảng mới để thay thế mảng Map ban đầu.
    let copyStartGame = gameBoard.level.slice();
    isStart = true;
    gameBoard.level = copyStartGame;
    showButton();
    intervalId = setInterval(function () {
        callFunction2(copyStartGame);
    }, 450);
}

function resetGame() {
    clearWhenRun();
    resetVariables();
    // eval() biến chuỗi thành biến
    gameBoard.level = eval("START_GAME" + (level + 1));
    x = 100;
    gameBoard.drawGameBoard(x);
    isStart = false;
    showButton();
}

// Hàm làm trắng WHen Run
function clearWhenRun() {
    document.getElementById("work-space").innerHTML = '<div id="play">\n' +
        '                <div class="play-block" id="begin-block">\n' +
        '                    <p class="block-content">when run</p>\n' +
        '                </div>\n' +
        '            </div>';

}

//Hàm reset biến.
function resetVariables() {
    countRepeats = 0;
    win1 = true;
    win2 = false;
    arrRun = [];
    count = 0;
    isStart = false;
    index = 8
    showButton();
}

showButton = () => {
    if (isStart) {
        document.getElementById('button-game').style.display = 'none';
        document.getElementById('button-reset').style.display = 'inline-block';
    } else {
        document.getElementById('button-reset').style.display = 'none';
        document.getElementById('button-game').style.display = 'inline-block';
    }
}
