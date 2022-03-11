import {Outcome} from "../classes/Outcome.js";
import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";

let text1 = " You are exiting the local pup when you bump shoulders with one of the townsfolk." +
    " This one has a reputation for mischief. Soon you are facing an ultimatum." +
    " Apologize for your transgression, pay for your error in Zarlocks, or in blood.. ";

let choices1 = ["Let the best man win, face this bully in combat.",
    "Apologize for the inconvenience you have caused.",
    "Pay for your error with Zarlocks(15)."];

let picture1 = "images/beast.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes1 = [new Outcome("You engage the bully in combat! ",
    "You vanquish this foe like an afterthought.",
    "You are beaten and left to sleep in the cold."
    ,4,"strength"),
    new Outcome("You apologize and seek peace."
        , " The bully accepts your apology with a smug grin.",
        " You are laughed at and made to look weak. This is bad for your reputation."
        ,4,"luck"),
    new Outcome("You offer to pay them with your Zarlocks.",
        " You have enough and thus avoid any more conflict.",
        " You don't have enough coin so the bully forces you to do dishes for everyone in the pub.",
        15,"coin")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);

export let armorPath = [sceneOne];