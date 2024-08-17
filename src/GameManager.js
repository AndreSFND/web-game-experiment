import Player from "./entities/Player.js"
import MovementListener from "./listener/MovementListener.js"

class GameManager {
    constructor(canvasAdapter, keyboardHandler) {
        this.canvasAdapter = canvasAdapter
        this.keyboardHandler = keyboardHandler

        const player = new Player(this.canvasAdapter)

        this.entities = []
        this.entities.push(player)

        this.keyboardHandler.addSubscriber(new MovementListener(player))
    }

    run() {
        this.canvasAdapter.clearScreen()
        this.entities.forEach(entity => entity.draw())
    }
}

export default GameManager