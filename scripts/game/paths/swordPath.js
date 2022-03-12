import {Outcome} from "../classes/Outcome.js";
import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";

let text1 = " You journey into a nearby town and enter the local tavern. You are greeted by the" +
             " sweet smell of fresh ale. As you sit at a table you are approached by a group of " +
             "locals who remind you they don't like visitors in these parts. You... ";

let choices1 = ["Flip the table and prepare for a brawl, you refuse to be disrespected.",
    "Turn your back on them dismissively.",
    "Invite them to sit down for a drink, and put aside their differences."];

let picture1 = "images/wizard.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes1 = [new Outcome("You flip the table and raise your fists. ",
    "You easily beat them into submission. You quickly gain a reputation in this village",
    "You are beaten and made to look a fool for the townsfolk to see.."
    ,4,"strength"),
    new Outcome("You turn your back as if noticing nothing."
        , " You have emasculated the local bully with your stoicism.",
        " The bully writes you off as a joke and the towns people laugh at your weakness."
        ,4,"luck"),
    new Outcome("You ask them to pull up a chair and sit with you.",
        " By the nights end you have made new friends and potential adventure partners.",
        " The bully pours his ale on your head making you to look like a fool",
        4,"intelligence")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);


let text2 = " 'Ye hath been away for ages dear friend...'. You are greeted by the coy smile" +
    " of a magical cat you once worked with. 'Iv'e just come upon a windfall of Zarlocks' " +
    " I'd be happy to share them with you if you can answer one of my riddles...' " +
    "'What gets bigger the more you take away??'";

let choices2 = ["an inverse square root",
    "yo mamma",
    "a hole"];

let picture2 = "images/cat.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes2 = [new SpecialOutcome("",
    "",
    "Too bad friend"
    ,100,"intelligence","coin","none"),
    new Outcome("You turn your back as if noticing nothing."
        , " You have emasculated the local bully with your stoicism.",
        " The bully writes you off as a joke and the towns people laugh at your weakness."
        ,100,"strength","coin","none"),
    new Outcome("You guess correctly",
        "I will give you some fresh Zarlocks",
        "",
        -1,"coin","coin","none")]

let sceneTwo = new Scenario(text2, choices2, picture2,outcomes2);





export let swordPath = [sceneOne,sceneOne,sceneTwo]; // eventually a whole array of scenes