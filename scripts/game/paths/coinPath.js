import {Outcome} from "../classes/Outcome.js";
import {Scenario} from "../classes/Scenario.js";
import {maurader} from "./specialScenes.js";
import {swordScenes} from "./swordPath.js";
import {armorScenes} from "./armorPath.js";

let text1 = " You approach a bridge on your way to the path to the next town." +
    "Your nose is assaulted by a horrific stench. A deep growl greets you and "+
    "you are soon being threatened with violence unless you pay a toll to cross." ;

let choices1 = ["Fake reach for your satchel, but instead grab your sword and hope for a critical hit.",
    "Find another way around, maybe you can swim across??.",
    "Pay the fee demanded by the Troll. (25 Zarlock)"];

let picture1 = "images/troll.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new Outcome("You deceive the Troll and engage in combat.",
    " You are victorious and leave with the trolls head as a trophy.",
    " The troll beats you senseless, leaving you with a nasty scar. ",4,"strength"),
    new Outcome(" You choose to take the scenic route.",
        " Your athleticism carries you across to the other side.",
        " You get caught in the rapids and are washed downriver.",4,"dexterity"),
    new Outcome(" You choose to pay the toll. You respect the business savvy of this Troll.",
        " You are free to pass. ",
        " You come up short and have to find another way around",25,"coin")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);

let text2 = " You are about to attend the local mead hall for the annual harvest festival." +
    " Town custom requires you be dressed in the formal garb prescribed for such an event."+
    " What do you do?" ;

let choices2 = ["You buy the necessary garb.(50 Zarlock)",
    "You go as you are,customs be damned.",
    "You go as you are, but make it a point to explain to locals the limitation of their customs."];

let picture2 = "images/ball.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes2 = [new Outcome("You decide to buy the traditional garb.",
    " You turn more than a few heads and end up meeting some new friends.",
    " You cannot afford the garb and choose to stay home and sulk.",50,"coin"),
    new Outcome("You go as you are, you are not from these lands originally, after all.",
        " The locals respect your decision because you carry yourself with integrity.",
        " The locals mock you and you lose respect in their eyes.",4,"strength"),
    new Outcome("You go as you are hoping to enlighten the locals of differences in customs.",
        " The locals are impressed with your intellect and reconsider their way  of thinking.",
        " You express your opinions with the eloquence of an ox, alienating the locals. ",4,"intelligence")]

let sceneTwo = new Scenario(text2, choices2, picture2,outcomes2);

let text3 = " You must make it up and over a mountain scramble to get to your destination before nightfall." +
    " You have most of the day left but your decision here is crucial. How do you approach?";

let choices3 = ["You go directly up and over the scramble, the shortest possible path.",
    "You hike around it, it will take longer, but you have the endurance.",
    "You find a cave for shelter and make a camp for the night. " +
    "choosing to go around the long way with a full day at your back."];

let picture3 = "images/cliff.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes3 = [new Outcome("You boulder up the scramble.",
    " Your fitness powers you thru and you make it to town by nightfall",
    " You cannot power your way up and are forced to spend your night in the cold.",4,"dexterity"),
    new Outcome("You choose the scenic route.",
        " Your endurance proves excellent as you make it to town before cold sets in.",
        " You are exhausted by the journey and end forced to shelter in the cold.",4,"stamina"),
    new Outcome("You choose to wait for morning.",
        " You find a sufficient camping site and make the rest of the journey the next day.",
        " The cave you select turns out to be inhabited by a bear. You escape and are forced to sleep in the cold.",4,"intelligence")]

let sceneThree = new Scenario(text3, choices3, picture3,outcomes3);

export let coinScenes = [sceneOne,sceneTwo,sceneThree];

export let coinPath = [sceneOne,sceneOne,sceneTwo,maurader,sceneThree,swordScenes[0],swordScenes[1],swordScenes[2],
    armorScenes[0],armorScenes[1],armorScenes[2]]; // eventually a whole array of scenes