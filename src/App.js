import CanvasAdapter from "./adapter/CanvasAdapter.js"
import GameHandler from "./handler/GameHandler.js"
import KeyboardHandler from "./handler/KeyboardHandler.js"
import InputFacade from "./facade/InputFacade.js"

class App {
    static FRAMES_PER_SECOND = 60

    async main() {
        const canvas = document.getElementById("root")
        const context = canvas.getContext("2d")

        const inputFacade = new InputFacade()

        const keyboardHandler = new KeyboardHandler(inputFacade)
        const gameHandler = new GameHandler(new CanvasAdapter(canvas, context), inputFacade)

        const handlers = [
            keyboardHandler,
            gameHandler,
        ]

        this.resizeCanvas(canvas)

        window.addEventListener('resize', () => this.resizeCanvas(canvas), false)
        window.addEventListener('keyup', () => keyboardHandler.handleKeyUp(event), false)
        window.addEventListener('keydown', () => keyboardHandler.handleKeyDown(event), false)
        
        while(true) {
            await this.sleep(1000 / App.FRAMES_PER_SECOND)
            handlers.forEach(handler => handler.handle())
        }
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    resizeCanvas(canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }
}

window.onload = () => {
    const app = new App()
    app.main()
}