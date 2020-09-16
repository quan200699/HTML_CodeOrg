function Pig (x, y) {
    this.x = x;
    this.y = y;
    this.drawPig = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = "#08ff00";
        ctx.fillRect(x, y, 20, 20);
        ctx.stroke();
    }
}
