import Color from "../model/Color.js"
import Vector2 from "../model/Vector2.js"

class Player {
    static MOVEMENT_UNITS = 1

    constructor(canvasAdapter) {
        this.canvasAdapter = canvasAdapter
        this.xPosition = 0
        this.yPosition = 0
        this.appliedForce = new Vector2(0, 0)
    }

    draw() {
        this.applyForces()
        this.canvasAdapter.drawSquare(this.xPosition, this.yPosition, 50, Color.GREEN)
    }

    addForce(force) {
        this.appliedForce.x += force.x
        this.appliedForce.y += force.y
    }

    setForce(force) {
        this.appliedForce = force
    }

    applyForces() {
        // if (this.appliedForce.x > 0) {
        //     this.xPosition += 1;
        //     this.appliedForce.x -= 1;
        // }

        // if (this.appliedForce.x < 0) {
        //     this.xPosition -= 1;
        //     this.appliedForce.x += 1;
        // }

        if (this.appliedForce.x != 0) {
            this.xPosition += this.appliedForce.x
            this.appliedForce.x -= (this.appliedForce.x / Math.abs(this.appliedForce.x))
        }

        if (this.appliedForce.y != 0) {
            this.yPosition -= this.appliedForce.y
            this.appliedForce.y -= (this.appliedForce.y / Math.abs(this.appliedForce.y))
        }
    }
}

export default Player