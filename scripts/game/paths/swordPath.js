import {Outcome} from "../classes/Outcome.js";
import {Scenario} from "../classes/Scenario.js";

let text1 = " You have chosen the way of the warrior. Selecting the sword is a symbol of strength." +
             " You journey into a nearby town and enter the local tavern. You are greeted by the" +
             " sweet smell of fresh ale. As you sit at a table you are approached by a group of " +
             "locals who remind you they don't like visitors in these parts. You... ";

let choices1 = ["Flip the table and prepare for a brawl, you refuse to be disrespected.",
    "Turn your back on them dismissively.",
    "Invite them to sit down for a drink, and put aside their differences."];

let picture1 = "images/wizard.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new Outcome("Outcome 1.", "Good 1.", "Bad1.",10,"strength"),
    new Outcome("Outcome 2.", "Good 2.", "Bad 2.",10,"stamina"),
    new Outcome("Outcome 3.", "Good 3.", "Bad 3.",10,"luck")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);

