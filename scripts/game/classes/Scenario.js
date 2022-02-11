//scenario could be an object
//fields for scenario could be
//scenario text - a string
//scenario choices - an array of strings
//scenario picture - a string representing the img href
//scenario outcomes - an array of strings
//each scenario needs to have outcomes for all the choices

export class Scenario{

        #text; // explanation of the current scene
        #choices; // the possible choices to make
        #picture; // the picture displayed in the middle
        #outcomes; // outcomes will be a class that has a method called do role to test for success or failure



    constructor(text,choices,picture,outcomes) {

        this.#text = text;
        this.#choices = choices;
        this.#picture = picture;
        this.#outcomes = outcomes; // this will be an array of THREE OUTCOME objects dependent on button chosen [A,B,C]

    }

    getText(){
        return this.#text;
    }


    getChoices() {
        return this.#choices; // will be an array of string in order [A,B,C]
    }

    getPicture() {
        return this.#picture;
    }


    getOutcomes() {
        return this.#outcomes;
    }


}

