import {Outcome as Outcome} from './classes/Outcome.js';
import {Scenario as Scenario} from './classes/Scenario.js';

// we can further modulate this by creating all our scenarios and holding them in one array


let text = "You are risen from your slumber when you hear what sounds like bandits quick approaching. " +
    "The lands that you have been traveling are unkind to strangers."+
    "You have to act quickly, how do you respond?";

let choices = ["Fight them head on...",
    "Do your best to retreat...",
    "Try to reason out of the situation..."];

let picture = "images/grotto.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes = [new Outcome("You stand your ground and fight. ",
    "You fight with all you have and fell most of your attackers. " +
    "You come away with some extra coin.",
    " You are bested in the fight and barely escape with your life.",
    4,"strength"),
               new Outcome("You run away and defend from attack.",
                   " You escape successfully",
                   " You are captured!!",4,"stamina",
               ),
               new Outcome("You try to reason out of the situation. ",
                   "You haggle your way out of it and make new friends.",
                   "Your words fall on deaf ears and you are robbed and beaten.",
                   4,"luck")];


export let sceneOne = new Scenario(text,choices,picture,outcomes);


