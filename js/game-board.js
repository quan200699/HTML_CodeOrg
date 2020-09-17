function GameBoard(id, width, height) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.drawGameBoard = () => {
        let draw = "";
        draw += `<canvas id="${this.id}" width="${this.width}" height="${this.height}" 
                    style="border: black; background: bisque;"></canvas>`
        document.getElementById(GAME_PLAY_ID).innerHTML = draw;
    }
    this.drawGame = (bird, pig) => {
        let ctx = document.getElementById(this.id).getContext("2d");
        bird.drawBird(ctx);
        pig.drawPig(ctx);
    }
}
