import CanvasAdapter from "./adapter/CanvasAdapter.js"
import GameManager from "./GameManager.js"
import KeyboardHandler from "./handler/KeyboardHandler.js"

class App {
    static FRAMES_PER_SECOND = 60

    constructor() {
        this.canvas = document.getElementById("root")
        this.context = this.canvas.getContext("2d")
        this.keyboardHandler = new KeyboardHandler()

        const canvasAdapter = new CanvasAdapter(this.canvas, this.context)
        this.gameManager = new GameManager(canvasAdapter, this.keyboardHandler)
    }

    async main() {
        window.addEventListener('resize', () => this.resizeCanvas(this.canvas), false)
        window.addEventListener('keyup', () => this.keyboardHandler.handleKeyUp(event), false)
        window.addEventListener('keydown', () => this.keyboardHandler.handleKeyDown(event), false)

        this.resizeCanvas(this.canvas)
        
        while (true) {
            await this.sleep(1000 / App.FRAMES_PER_SECOND)
            this.keyboardHandler.notifySubscribers()
            this.gameManager.run()
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