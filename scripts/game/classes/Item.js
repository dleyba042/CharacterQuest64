
export class Item {

    #type;
    #name;
    #effect;

    constructor(type, name, effect) {
        this.#type = type;
        this.#name = name;
        this.#effect = effect;

    }


    getType() {
        return this.#type;
    }

    getName() {
        return this.#name;
    }

    getEffect() {
        return this.#effect;
    }

}
