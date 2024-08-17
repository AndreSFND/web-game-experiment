import Player from "../entities/Player.js"
import EntityMovementListener from "../listener/EntityMovementListener.js"

class GameHandler {
    constructor(canvasAdapter, inputFacade) {
        this.canvasAdapter = canvasAdapter
        this.inputFacade = inputFacade

        const player = new Player(this.canvasAdapter)

        this.entities = []
        this.entities.push(player)

        this.inputFacade.addSubscriber(new EntityMovementListener(player))
    }

    async handle() {
        this.canvasAdapter.clearScreen()
        this.entities.forEach(entity => entity.draw())
    }
}

export default GameHandler