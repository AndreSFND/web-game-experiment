class GameManager {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.xPosition = 0;
        this.yPosition = 0;
    }

    run() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "darkgreen"
        this.context.fillRect(this.xPosition, this.yPosition, 50, 50)

        this.xPosition += 1;
        this.yPosition += 1;
    }
}

export default GameManager;