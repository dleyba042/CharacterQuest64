import {Outcome} from "../classes/Outcome.js";
import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";
import {armorScenes, armorScens} from "./armorPath";
import {coinScenes} from "./coinPath.js";
import {maurader} from "./specialScenes.js";

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

let choices2 = ["An inverse square root",
    "Yo Mamma",
    "a Hole"];

let picture2 = "images/cat.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes2 = [new SpecialOutcome("",
    "",
    "You never were a person of much intellect friend."
    ,100,"intelligence","coin","none"),
    new Outcome("You guess incorrect."
        , "",
        " You never were a person of much intellect friend."
        ,100,"strength","coin","none"),
    new Outcome("You guessed correctly, friend.",
        "I will give you some fresh Zarlocks",
        "",
        -1,"coin","coin","none")]

let sceneTwo = new Scenario(text2, choices2, picture2,outcomes2);


let text3 = "You have been tasked with tracking a dangerous fugitive. Your search has led you " +
    "to the pine barrens near Dragon Rock. Signs of an encamp nearby have become apparent. " +
    " How do you proceed?" ;

let choices3 = ["You wait for nightfall and sneak in to apprehend the fugitive using stealth.",
    " You barge in and demand the fugitive comes with you or else.",
    " You enter the camp posing as a fellow con artist,hoping to lure the fugitive back with a clever job proposal."];

let picture3 = "images/encamp.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes3 = [new Outcome("You choose to go in by nightfall.",
    " You manage to sneak in and apprehend the fugitive without more than a peep.",
    " You rouse some of the campers from sleep and they chase you away, losing you your bounty."
    ,4,"dexterity"),
    new Outcome("You barge in an demand the fugitive honor your authority. "
        , " The fugitive is intimidated by your presence and comes along willingly.",
        " The fugitive and his gang launch an attack and you take an arrow to your arm, barley escaping."
        ,4,"strength"),
    new Outcome("You choose to fool the fugitive with a ruse.",
        " The fugitive is taken with the con that you have proposed and follows you back to town and the authorities laying in wait.",
        " The fugitive sees through your ruse and you have to escape the scene quickly.",
        4,"luck")]


let sceneThree = new Scenario(text3, choices3, picture3,outcomes3);

export let swordScenes = [sceneOne,sceneTwo,sceneThree];


export let swordPath = [coinScenes[0],coinScenes[1],coinScenes[2],maurader,sceneOne,sceneTwo,sceneThree,
    armorScenes[0],armorScenes[1],armorScenes[2]]; // eventually a whole array of scenes