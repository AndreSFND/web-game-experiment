import Input from "../model/Input.js";
import Vector2 from "../model/Vector2.js"

class EntityMovementListener {
    constructor(entity) {
        this.entity = entity
    }

    update(pressedKeys) {
        pressedKeys.forEach((keyCode) => this.handleKey(keyCode))
    }

    handleKey(keyCode) {
        switch (keyCode) {
            case Input.UP:
                this.entity.setForce(new Vector2(0, +15))
                break;
            case Input.DOWN:
                this.entity.setForce(new Vector2(0, -15))
                break;
            case Input.LEFT:
                this.entity.setForce(new Vector2(-15, 0))
                break;
            case Input.RIGHT:
                this.entity.setForce(new Vector2(+15, 0))
                break;
        }
    }
}

export default EntityMovementListener