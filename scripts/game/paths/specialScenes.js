import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";
import {Item} from "../classes/Item.js";

let text1 = " The Dragons bear down before you...\n Choosing this key may have been a grave error ";

let choices1 = ["Attack dragon with all your might.",
    "Run away.",
    "Play dead."];

let picture1 = "images/dragon.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes1 = [new SpecialOutcome("Outcome 1.",
    "You fell the beast and craft a sword made from its scales",
    "The dragon mauls you.",4,
    "strength",new Item("msword","Dragon Sword","Adds 6 Strength"), "Death"),
    new SpecialOutcome("Outcome 2.",
        "You make your escape and stumble upon a treasure chest containing Mythril Armor",
        "The dragon mauls you.",4,"stamina",
        new Item("mshield","Mythril Armor","Adds 6 Stamina"),"Death"),
    new SpecialOutcome("Outcome 3.",
        "The Dragon leaves you be and your luck continues when you find a Pendant left behind...",
        "The dragon mauls you.",4,"luck",
        new Item("mpendant","Dragon Pendant","Adds 6 Luck"),"Death")]

export let dragon = new Scenario(text1, choices1, picture1,outcomes1);

let text2 = " Marauders have entered the town you have been staying in. They have not yet acted"+
            " with aggression. The leader of the gang approaches the town square with a group of men. " +
            " How do you respond?"

let choices2 = ["Grab a nearby bow and take the leader out from a distance.",
    "Take the whole group head on.",
    "Try to convince them to leave and never come back."];

let picture2 = "images/boss.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes2 = [new SpecialOutcome("You reach for a bow and take aim at the leader.",
    "You drop the leader with a well placed arrow and his men flee. You take his sword as a trophy.",
    "You miss and the town is pillaged by the marauders. You are killed in the taking of the town.",4,
    "dexterity",new Item("msword","Marauder Sword","Adds 6 Strength"), "Death"),
    new SpecialOutcome("You call out the leader and approach for combat.",
        "You vanquish the foes with your might. You take a set of armor as a trophy. ",
        "You are bested in combat and killed.",4,"stamina",
        new Item("mshield","Marauder Armor","Adds 6 Stamina"),"Death"),
    new SpecialOutcome("You choose to persuade the marauders.",
        "They listen to your wise words and leave giving you a lucky pendant as a token of respect.",
        "They lunge and you are killed in the attack.",4,"luck",
        new Item("mpendant","Marauder Pendant","Adds 6 Luck"),"Death")]

export let maurader = new Scenario(text2, choices2, picture2,outcomes2);

