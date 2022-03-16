import {Outcome} from "../classes/Outcome.js";
import {SpecialOutcome} from "../classes/SpecialOutcome.js";
import {Scenario} from "../classes/Scenario.js";
import {maurader} from "./specialScenes.js";
import {sceneOne as start} from "../startScene.js";
import {death} from "./specialScenes.js";

let text1 = " You journey into a nearby town and enter the local tavern. You are greeted by the" +
             " smell of fresh ale. As you sit at a table you are approached by a group of " +
             "locals who remind you they don't like visitors in these parts. You... ";

let choices1 = ["Flip the table and prepare for a brawl, you refuse to be disrespected.",
    "Turn your back on them dismissively.",
    "Invite them to sit down for a drink, and put aside their differences."];

let picture1 = "images/wizard.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes1 = [new Outcome("You flip the table and raise your fists. ",
    "You easily beat them into submission. You quickly gain a reputation in this village.",
    "You are beaten and made to look a fool for the townsfolk to see.."
    ,4,"strength"),
    new Outcome("You turn your back as if noticing nothing."
        , " You have emasculated the local bully with your stoicism.",
        " The bully writes you off as a joke and the towns people laugh at your weakness."
        ,4,"luck"),
    new Outcome("You ask them to pull up a chair and sit with you.",
        " By the nights end you have made new friends and potential adventure partners.",
        " The bully pours his ale on your head making you look like a fool.",
        4,"intelligence")]

let sceneOne = new Scenario(text1, choices1, picture1,outcomes1);


let text2 = " 'Ye hath been away for ages dear friend...'. You are greeted by the coy smile" +
    " of a magical cat you once worked with. 'Iv'e just come upon a windfall of Zarlocks' " +
    " I'd be happy to share them with you if you can answer one of my riddles...' " +
    "'What gets bigger the more you take away??'";

let choices2 = ["An inverse square root",
    "Yo Mamma",
    "a Hole"];

let picture2 = "images/cat.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes2 = [new SpecialOutcome("You guess and your friend responds...",
    "Somehow that is correct...",
    "You never were a person of much intellect friend."
    ,1000,"intelligence","coin","none"),
    new SpecialOutcome("You guess incorrect."
        , "Somehow that is correct...",
        " You never were a person of much intellect friend."
        ,1000,"strength","coin","none"),
    new SpecialOutcome("You guessed correctly, friend.",
        "I will give you some fresh Zarlocks",
        "",
        -1,"coin","coin","none")]

let sceneTwo = new Scenario(text2, choices2, picture2,outcomes2);


let text3 = "You have been tasked with tracking a dangerous fugitive. Your search has led you " +
    "to the pine barrens near Dragon Rock. Signs of an encampment nearby have become apparent. " +
    " How do you proceed?" ;

let choices3 = ["You wait for nightfall and sneak in to apprehend the fugitive using stealth.",
    " You barge in and demand the fugitive comes with you or else.",
    " You enter the camp posing as a fellow con artist,hoping to lure the fugitive back with a clever job proposal."];

let picture3 = "images/encamp.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


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


let text4 = "You are exiting the local pup when you bump shoulders with one of the townsfolk." +
    " This one has a reputation for mischief. Soon you are facing an ultimatum." +
    " Apologize for your transgression, pay for your error in Zarlocks, or in blood.. ";

let choices4 = ["Let the best man win, face this bully in combat.",
    "Apologize for the inconvenience you have caused.",
    "Pay for your error with Zarlocks(15)."];

let picture4 = "images/beast.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes4 = [new Outcome("You engage the bully in combat! ",
    "You vanquish the foe like an afterthought.",
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

let sceneFour = new Scenario(text4, choices4, picture4,outcomes4);

let text5 = "One day when setting camp you are approached by an odd man with a proposition." +
    " He shares stories of his faith and a concept called 'Karma'." +
    " Let him share your fire and food for the evening and you will be rewarded 10 times over in the future...";

let choices5 = ["Accept, but only if he is willing to do work around camp.",
    "Turn him away.",
    "Agree to his request."];

let picture5 = "images/prophet.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes5 = [new Outcome("You drive a hard bargain and ask for work in return. ",
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

let sceneFive = new Scenario(text5, choices5, picture5,outcomes5);

let text6 = "During your travels the gap between towns turns up to be longer than anticipated." +
    " At this point starvation is beginning to cloud your thinking." +
    " In desperation you choose to forage for some random berries, which do you choose to eat?";

let choices6 = ["The white colored berries.",
    "The red colored berries",
    "The blue colored berries"];

let picture6 = "images/berries.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes6 = [new SpecialOutcome("You eat some of the white berries in hopes for relief. ",
    "You feel ill but your luck carries you thru and you make it to town.",
    "The berries set fire to your stomach and you writhe in pain.."
    ,8,"luck","","Death"),
    new SpecialOutcome("You eat some of the red berries in hopes for relief."
        , " You feel nauseous but your body has handled this type of food before, you will be fine. ",
        " You are bedridden in camp for days, and eventually.."
        ,4,"dexterity","","Death"),
    new SpecialOutcome("You eat some of the blue berries and pray they are safe.",
        " The berries taste great and carry you thru to the next town.",
        " You get a mild stomach ache.",
        1,"intelligence","","")]

let sceneSix = new Scenario(text6, choices6, picture6,outcomes6);


let text7 = " You approach a bridge on your way to the path to the next town." +
    "Your nose is assaulted by a horrific stench. A deep growl greets you and "+
    "you are soon being threatened with violence unless you pay a toll to cross." ;

let choices7 = ["Fake reach for your satchel, but instead grab your sword and hope for a critical hit.",
    "Find another way around, maybe you can swim across??.",
    "Pay the fee demanded by the Troll. (25 Zarlock)"];

let picture7 = "images/troll.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT

//SCENE WILL HOLD AN ARRAY OF THREE OUTCOMES IN ORDER OF BUTTON CHOICE [A,B,C]
let outcomes7 = [new Outcome("You deceive the Troll and engage in combat.",
    " You are victorious and leave with the trolls head as a trophy.",
    " The troll beats you senseless, leaving you with a nasty scar. ",4,"strength"),
    new Outcome(" You choose to take the scenic route.",
        " Your athleticism carries you across to the other side.",
        " You get caught in the rapids and are washed downriver.",4,"dexterity"),
    new Outcome(" You choose to pay the toll. You respect the business savvy of this Troll.",
        " You are free to pass. ",
        " You come up short and have to find another way around",25,"coin")]

let sceneSeven = new Scenario(text7, choices7, picture7,outcomes7);

let text8 = " You are about to attend the local mead hall for the annual harvest festival." +
    " Town custom requires you be dressed in the formal garb prescribed for such an event."+
    " What do you do?" ;

let choices8 = ["You buy the necessary garb.(50 Zarlocks)",
    "You go as you are,customs be damned.",
    "You go as you are, but make it a point to explain to locals the limitation of their customs."];

let picture8 = "images/ball.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes8 = [new Outcome("You decide to buy the traditional garb.",
    " You turn more than a few heads and end up meeting some new friends.",
    " You cannot afford the garb and choose to stay home and sulk.",50,"coin"),
    new Outcome("You go as you are, you are not from these lands originally, after all.",
        " The locals respect your decision because you carry yourself with integrity.",
        " The locals mock you and you lose respect in their eyes.",4,"strength"),
    new Outcome("You go as you are hoping to enlighten the locals of differences in customs.",
        " The locals are impressed with your intellect and reconsider their way  of thinking.",
        " You express your opinions with the eloquence of an ox, alienating the locals. ",4,"intelligence")]

let sceneEight = new Scenario(text8, choices8, picture8,outcomes8);

let text9 = " You must make it up and over a mountain scramble to get to your destination before nightfall." +
    " You have most of the day left but your decision here is crucial. How do you approach?";

let choices9 = ["You go directly up and over the scramble, the shortest possible path.",
    "You hike around it, it will take longer, but you have the endurance.",
    "You find a cave for shelter and make a camp for the night. " +
    "choosing to go around the long way with a full day at your back."];

let picture9 = "images/cliff.webp"; // THIS MUST BE RELATIVE TO THE PAGE THAT IS INSERTING IT IE >>> THE JS MAIN SCRIPT


let outcomes9 = [new Outcome("You boulder up the scramble.",
    " Your fitness powers you thru and you make it to town by nightfall",
    " You cannot power your way up and are forced to spend your night in the cold.",4,"dexterity"),
    new Outcome("You choose the scenic route.",
        " Your endurance proves excellent as you make it to town before cold sets in.",
        " You are exhausted by the journey and end forced to shelter in the cold.",4,"stamina"),
    new Outcome("You choose to wait for morning.",
        " You find a sufficient camping site and make the rest of the journey the next day.",
        " The cave you select turns out to be inhabited by a bear. You escape and are forced to sleep in the cold.",4,"intelligence")]

let sceneNine = new Scenario(text9, choices9, picture9,outcomes9);

export let swordPath = [start,sceneOne,sceneTwo,sceneThree,sceneFour,maurader,sceneFive,sceneSix,sceneSeven,sceneEight,sceneNine,death];
