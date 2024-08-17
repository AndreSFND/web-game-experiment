class KeyboardHandler {
    constructor(inputFacade) {
        this.inputFacade = inputFacade
    }

    handle() {
        this.inputFacade.notifySubscribers()
    }

    handleKeyDown(event) {
        this.inputFacade.addActiveInput(event.code)
    }

    handleKeyUp(event) {
        this.inputFacade.removeActiveInput(event.code)
    }
}

export default KeyboardHandler