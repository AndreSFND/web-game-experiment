class Color {
    static #_RED = "red";
    static #_GREEN = "green";
    static #_BLUE = "blue";

    static get RED() { return this.#_RED; }
    static get GREEN() { return this.#_GREEN; }
    static get BLUE() { return this.#_BLUE; }
}

export default Color