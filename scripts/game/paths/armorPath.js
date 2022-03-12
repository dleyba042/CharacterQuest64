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

let text2 = " One day when setting camp you are approached by an odd man with a proposition." +
    " He shares stories of his faith and a concept called 'Karma'." +
    " Let him share your fire and food for the evening and you will be rewarded 10 times over in the future...";

let choices2 = ["Accept, but only if he is willing to do work around camp.",
    "Turn him away.",
    "Agree to his request."];

let picture2 = "images/prophet.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes2 = [new Outcome("You drive a hard bargain and ask for work in return. ",
    "He happily accepts and appreciates your honesty.",
    "He declines and you have an ominous feeling as he departs."
    ,4,"strength"),
    new Outcome("You wave him off, you don't deal with beggars..."
        , " He smiles and says thanks anyway.",
        " He departs and you have an ominous feeling as he is walking away."
        ,4,"intelligence"),
    new Outcome("You agree happy to share with the less fortunate.",
        " You feel a great sense of connection with this stranger, and hope to meet again",
        " ",
        -1,"luck")]

let sceneTwo = new Scenario(text2, choices2, picture2,outcomes2);

let text3 = " During your travels the gap between towns turns up to be longer than anticipated." +
    " At this point starvation is beginning to cloud your thinking." +
    " In desperation you choose to forage for some random berries, which do you choose to eat?";

let choices3 = ["The white colored berries.",
    "The yellow colored berries",
    "The blue colored berries"];

let picture3 = "images/berries.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes3 = [new SpecialOutcome("You eat some of the white berries in hopes for relief. ",
    "You feel ill but your luck carries you thru and you make it to town.",
    "The berries set fire to your stomach and you writhe in pain.."
    ,8,"luck","","death"),
    new Outcome("You eat some of the red berries in hopes for relief."
        , " You feel nauseous but your body has handled this type of food before, you will be fine. ",
        " You are bedridden in camp for days, and eventually.."
        ,4,"dexterity","","death"),
    new Outcome("You eat some of the blue berries and pray they are safe.",
        " The berries taste great and carry you thru to the next town.",
        " You get a mild stomach ache.",
        3,"intelligence","","")]

let sceneThree = new Scenario(text3, choices3, picture3,outcomes3);

export let armorPath = [sceneOne,sceneTwo,sceneThree];