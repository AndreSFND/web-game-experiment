import Color from "./model/Color.js"

class GameManager {
    constructor(canvasAdapter) {
        this.canvasAdapter = canvasAdapter
        this.xPosition = 0
        this.yPosition = 0
    }

    run() {
        this.canvasAdapter.clearScreen()
        this.canvasAdapter.drawSquare(this.xPosition, this.yPosition, 50, Color.GREEN)

        this.xPosition += 1
        this.yPosition += 1
    }
}

export default GameManager