

export class Outcome {

    #text; // explanation of the outcome based on button choice
    #goodOutcome; // what will be displayed in scenario text if the roll is successful
    #badOutcome; // what will be displayed in scenario text if the roll is unsuccessful
    #statsRole; // an int representing the stat being tested by this particular outcome
    #statTested; // so we know which stat of the players to compare too


    //TODO add an award field to outcomes to allow for coin awards,keys,etc.

    constructor(text, goodOutcome,badOutcome, statsRole, statTested,reward,penalty) {
        this.#text = text;
        this.#goodOutcome = goodOutcome;
        this.#badOutcome = badOutcome;
        this.#statsRole = statsRole;
        this.#statTested = statTested;
    }


    getText() {
        return this.#text;
    }

    getGoodOutcome() {
        return this.#goodOutcome;
    }

    getBadOutcome() {
        return this.#badOutcome;
    }

    getStatTested() {
        return this.#statTested;
    }

    getStatsRoll(){
        return this.#statsRole;
    }

    rollVsPlayer(playerStat){ // this will decide a win lose role scenario, player stat is the stat
                              //being tested by this scenario, stats role is the strength level of comp
                              //stat that the player is being tested against.

        return Math.random() * playerStat >= Math.random() * this.#statsRole;
        //This returns true if the player wins the stat role, must be greater or equal for tie breaker
    }

}

