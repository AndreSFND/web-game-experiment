class InputFacade {
    constructor() {
        this.activeInputs = new Set()
        this.subscribers = []
    }

    addActiveInput(input) {
        this.activeInputs.add(input)
    }

    removeActiveInput(input) {
        this.activeInputs.delete(input)
    }

    notifySubscribers() {
        const activeInputsArray = Array.from(this.activeInputs)

        this.subscribers.forEach(subscriber => {
            return subscriber.update(activeInputsArray)
        })
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber)
    }

    removeSubscriber(subscriber) {
        // TODO: Implement this method
    }
}

export default InputFacade