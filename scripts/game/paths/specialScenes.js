import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";

let text1 = " The Dragons bear down before you...\n Choosing this key may have been a grave error ";

let choices1 = ["Attack dragon with all your might.",
    "Run away.",
    "Play dead."];

let picture1 = "images/dragon.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new SpecialOutcome("Outcome 1.", "Good 1.", "Bad1.",10,
    "strength","Get Dragon Sword","Death"),
    new SpecialOutcome("Outcome 2.", "Good 2.", "Bad 2.",10,"stamina","Get Dragon Armor","Death"),
    new SpecialOutcome("Outcome 3.", "Good 3.", "Bad 3.",10,"luck","Get Dragon Pendant","Death")]

export let dragon = new Scenario(text1, choices1, picture1,outcomes1);

//export let dragon = [sceneOne]; // eventually a whole array of scenes