import Color from "../model/Color.js"

class Player {
    static MOVEMENT_UNITS = 1

    constructor(canvasAdapter) {
        this.canvasAdapter = canvasAdapter
        this.xPosition = 0
        this.yPosition = 0
    }

    draw() {
        this.canvasAdapter.drawSquare(this.xPosition, this.yPosition, 50, Color.GREEN)
    }

    moveUp() {
        this.yPosition -= Player.MOVEMENT_UNITS;
    }

    moveDown() {
        this.yPosition += Player.MOVEMENT_UNITS;;
    }

    moveRight() {
        this.xPosition += Player.MOVEMENT_UNITS;;
    }

    moveLeft() {
        this.xPosition -= Player.MOVEMENT_UNITS;;
    }
}

export default Player