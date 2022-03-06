import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";
import {Item} from "../classes/Item.js";

let text1 = " The Dragons bear down before you...\n Choosing this key may have been a grave error ";

let choices1 = ["Attack dragon with all your might.",
    "Run away.",
    "Play dead."];

let picture1 = "images/dragon.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new SpecialOutcome("Outcome 1.",
    "You fell the beast and craft a sword made from its scales",
    "Bad1.",2,
    "strength",new Item("sword","Dragon Sword","Adds 6 Strength"), "Death"),
    new SpecialOutcome("Outcome 2.",
        "You make your escape and stumble upon a treasure chest containing Mythril Armor",
        "Bad 2.",2,"stamina",
        new Item("armor","Mythril Armor","Adds 6 Stamina"),"Death"),
    new SpecialOutcome("Outcome 3.",
        "The Dragon leaves you be and your luck continues when you find a Pendant left behind...",
        "Bad 3.",2,"luck",
        new Item("pendant","Dragon Pendant","Adds 6 Luck"),"Death")]

export let dragon = new Scenario(text1, choices1, picture1,outcomes1);

//export let dragon = [sceneOne]; // eventually a whole array of scenes