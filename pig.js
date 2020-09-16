let Pig = (x, y) => {
    this.x = x;
    this.y = y;
    this.drawPig = (ctx) => {
        ctx.beginPath();
        ctx.rect(x, y, 100, 100);
        ctx.fillStyle = "red";
        ctx.stroke();
    }
}
