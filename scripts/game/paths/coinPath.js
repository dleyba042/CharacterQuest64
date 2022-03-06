import {Outcome} from "../classes/Outcome.js";
import {Scenario} from "../classes/Scenario.js";

let text1 = " You approach a bridge on your way to the path to the next town." +
    "Your nose is assaulted by a horrific stench. A deep growl greets you and "+
    "you are soon being threatened with violence unless you pay a toll to cross." ;

let choices1 = ["Fake reach for your satchel, but instead grab your sword and hope for a critical hit.",
    "Find another way around, maybe you can swim across??.",
    "Pay the fee demanded by the Troll. (25 Zarlock)"];

let picture1 = "images/troll.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new Outcome("Outcome 1.", "Good 1.", "Bad1.",5,"strength"),
    new Outcome("Outcome 2.", "Good 2.", "Bad 2.",5,"stamina"),
    new Outcome("Outcome 3.", "Good 3.", "Bad 3.",25,"coin")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);

export let coinPath = [sceneOne]; // eventually a whole array of scenes