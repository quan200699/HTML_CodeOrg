function GameBoard(id, width, height) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.drawGameBoard = () => {
        let draw = "";
        draw += `<canvas id="${this.id}" width="${this.width}" height="${this.height}"></canvas>`
        document.getElementById(GAME_PLAY_ID).innerHTML = draw;
    }
    this.drawBackground = (ctx) => {
        this.image.src = "img/background.png"
        ctx.drawImage(this.image, 0, 0);
    }
    this.drawGame = (bird, pig) => {
        let ctx = document.getElementById(this.id).getContext("2d");
        this.drawBackground(ctx)
        bird.drawBird(ctx);
        pig.drawPig(ctx);
    }
}
