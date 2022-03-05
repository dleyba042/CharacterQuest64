import {Outcome} from "./Outcome.js";


export class SpecialOutcome extends Outcome{

    #reward; //if you get a good outcome add a new item or coin???
    #penalty; //if bad take item or coin???

    constructor(text, goodOutcome,badOutcome, statsRole, statTested,reward,penalty) {
        super(text,goodOutcome,badOutcome, statsRole, statTested);
        this.#reward = reward;
        this.#penalty = penalty;
    }

    getReward() {
        return this.#reward;
    }

    getPenalty() {
        return this.#penalty;
    }
}