class CanvasAdapter {
    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawSquare(x, y, size, color) {
        this.context.fillStyle = color
        this.context.fillRect(x, y, size, size)
    }
}

export default CanvasAdapter