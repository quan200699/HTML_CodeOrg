let Bird = function (x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.drawBird = (ctx) => {
        ctx.beginPath();
        ctx.rect(x, y, 100, 100);
        ctx.stroke();
    }
    this.move = () => {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.setSpeedX = (speedX) => {
        this.speedX = speedX;
    }
    this.setSpeedY = (speedY) => {
        this.speedY = speedY;
    }
}
