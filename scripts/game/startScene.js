import {Outcome as Outcome} from './classes/Outcome.js';
import {Scenario as Scenario} from './classes/Scenario.js';

// we can further modulate this by creating all our scenarios and holding them in one array


let text = "You awaken in a daze, with a sword, some cash, and armor at your side. " +
    "You realize that you are in unsafe territory, when you hear what sounds like bandits quick approaching. " +
    "You only have time to grab one of the items next to you. What do you choose?";

let choices = ["Grab the sword, better to be on the offensive...",
    "Grab your armor, better to be protected from attack...",
    "Grab the coin, better to haggle out of a sticky situation..."];

let picture = "images/grotto.jpeg"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes = [new Outcome("You stand your ground and fight. ",
    "You fight with all you have and fell most of your attackers. You come away with some extra coin."
             , "You are bested in the fight and barely escape with your life",10,"strength",
    "You get 50 coin", "You lose an item"),
               new Outcome("You run away and defend from attack.",
                   " You escape successfully", "You are captured!!",10,"stamina",
    "You get 50 coin", "You lose an item"),
               new Outcome("You try to haggle out of the situation. ",
                   "You haggle your way out of it and make new friends.",
                   "Your words fall on deaf ears and you are robbed and beaten.",10,"luck",
        "You get 50 coin", "You lose an item")]


export let sceneOne = new Scenario(text,choices,picture,outcomes);




//realize for outcomes we will have to trigger a stats role depending on the choice and the that outcome has a positive
// or negative depending on the role
// outcomes might have to be their own object?????