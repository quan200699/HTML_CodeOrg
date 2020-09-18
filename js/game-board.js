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