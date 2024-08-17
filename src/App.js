import CanvasAdapter from "./adapter/CanvasAdapter.js"
import GameManager from "./GameManager.js"

class App {
    static FRAMES_PER_SECOND = 60

    constructor() {
        this.canvas = document.getElementById("root")
        this.context = this.canvas.getContext("2d")

        const canvasAdapter = new CanvasAdapter(this.canvas, this.context)
        this.gameManager = new GameManager(canvasAdapter)
    }

    async main() {
        window.addEventListener('resize', () => this.resizeCanvas(this.canvas), false)
        this.resizeCanvas(this.canvas)
        
        while (true) {
            await this.sleep(1000 / App.FRAMES_PER_SECOND)
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