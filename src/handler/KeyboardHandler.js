import Input from "../model/Input.js"

class KeyboardHandler {
    static KEYBOARD_MAP = new Map([
        ["KeyW", Input.UP],
        ["KeyA", Input.LEFT],
        ["KeyS", Input.DOWN],
        ["KeyD", Input.RIGHT],
    ])

    constructor(inputFacade) {
        this.inputFacade = inputFacade
    }

    handle() {
        this.inputFacade.notifySubscribers()
    }

    handleKeyDown(event) {
        if (!KeyboardHandler.KEYBOARD_MAP.has(event.code)) {
            return
        }

        this.inputFacade.addActiveInput(KeyboardHandler.KEYBOARD_MAP.get(event.code))
    }

    handleKeyUp(event) {
        if (!KeyboardHandler.KEYBOARD_MAP.has(event.code)) {
            return
        }

        this.inputFacade.removeActiveInput(KeyboardHandler.KEYBOARD_MAP.get(event.code))
    }
}

export default KeyboardHandler