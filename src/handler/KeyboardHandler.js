class KeyboardHandler {
    constructor() {
        this.pressedKeys = new Set()
        this.subscribers = []
    }

    handleKeyDown(event) {
        console.log(event)
        this.pressedKeys.add(event.code)
    }

    handleKeyUp(event) {
        console.log(event)
        this.pressedKeys.delete(event.code)
    }

    notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber.update(Array.from(this.pressedKeys)))
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber)
    }

    removeSubscriber(subscriber) {
        
    }
}

export default KeyboardHandler