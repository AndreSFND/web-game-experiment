class EntityMovementListener {
    constructor(entity) {
        this.entity = entity
    }

    update(pressedKeys) {
        pressedKeys.forEach((keyCode) => this.handleKey(keyCode))
    }

    handleKey(keyCode) {
        switch (keyCode) {
            case 'KeyW':
            case 'ArrowUp':
                this.entity.moveUp()
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.entity.moveLeft()
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.entity.moveDown()
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.entity.moveRight()
                break;
        }
    }
}

export default EntityMovementListener