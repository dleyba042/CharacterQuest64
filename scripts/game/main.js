
import {sceneOne as sceneOne} from "./startScene.js";
import {swordPath as swordPath } from "./paths/swordPath.js";
import {SpecialOutcome} from "./classes/SpecialOutcome.js";
import {dragon} from "./paths/specialScenes.js";


const gameScreen = document.getElementById('game-screen');
const scenarioText = document.getElementById('scenario-text');
const contBtn = document.getElementById("cont-btn");
const saveBtn = document.getElementById("save-btn");
const inventoryList = document.getElementById('inventoryList');
const statsList = document.getElementById('char-stats').children;
//TODO add buttons to access the value in each stat once we fix php
const coinDisplay = document.getElementById('coin-display');
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const buttonArr = [btnA,btnB,btnC]; //array of buttons
const globalStatBoosts = {"intelligence":0,"strength":0,"dexterity":0,"stamina":0,"luck":0}
const itemMessage = document.getElementById('item-message');

const armorPath = []; // just fake for testing purposes
const coinPath = []; // just fake for testing purposes

let sceneIndex = 0; // make thus a global variable
                    //could make a different index for each potential path

const getStats = () =>{

    let stats = {}; //empty arr to fill with character stats

    for(let i =0; i<statsList.length; i++) {

       stats[statsList[i].id] = statsList[i].value;

    }

    return stats;

}



const addBoosts = () =>{

    let items = inventoryList.children;

    for(let i = 0; i<items.length; i++){

        switch(items[i].id.toLowerCase()){

            case "sword" : document.getElementById("strength").innerHTML += ("(+3)");
                           globalStatBoosts['strength'] = 3;
                           break;
            case "shield" : document.getElementById("stamina").innerHTML += ("(+3)");
                           globalStatBoosts['stamina'] = 3;
                            break;
            case "book" : document.getElementById("intelligence").innerHTML += ("(+3)");
                           globalStatBoosts['intelligence'] = 3;
                             break;
            case "ring" : document.getElementById("dexterity").innerHTML += ("(+3)");
                           globalStatBoosts['dexterity'] = 3;
                            break;
            case "pendant" : document.getElementById("luck").innerHTML += ("(+3)");
                           globalStatBoosts['luck'] = 3;
                            break;

        }





    }

}

const playerStats = getStats(); // get the player stats and store them in a constant gloabal dict.




//MAIN PROGRAM START POINT

window.onload = () => {

   //playerStats = getStats();
   displayScene(sceneOne);

}


//LETS TRY AND DISPLAY THE SCENARIO I CREATED


const displayScene = (scene) => {


    itemMessage.innerHTML = ""; //clear out last item message
    addBoosts(); // add these based on whats in the character inventory at the beginning of the turn

    // use this boolean to determine stat role at the end
    let quickStatIncrease = {"intelligence":false,"strength":false,"dexterity":false,"stamina":false,"luck":false};
    let usedAlready = false;

    if(contBtn.style.display === "block"){ //hide continue before displaying new scene
        contBtn.style.display = "none";
        saveBtn.style.display = "none";

        for(let i = 0; i<buttonArr.length; i++){ // re-enable anchor buttons
            buttonArr[i].style.pointerEvents = "auto";
        }
    }

    //displays background without using function
    gameScreen.style.backgroundImage = "url(" + scene.getPicture() + ")";

    displayScenarioText(scene.getText()); //display the scenario text

    let sceneChoices = scene.getChoices(); // store array for choices

    for(let i = 0; i< buttonArr.length; i++){ // display the choices
        displayScenarioChoices(buttonArr,sceneChoices,i);
    }


    let outcomeArr = scene.getOutcomes(); // store array for choices


    //add event listeners to the buttons depending on their choices
    for(let i = 0; i< outcomeArr.length; i++){ // display the choices

        //the listener expects a callback function so I had to pass an anonymous
        //that would call the function that I wrote at the appropriate time
        //addEventListener to each button pass in global var contButton
        //i is used to index the outcome array, quick stat increase is passed in to
        //increase a stat if a potion was used
         buttonArr[i].addEventListener("click",  () => buttonEvent(outcomeArr,i,contBtn,quickStatIncrease));

    }

        //add event listeners to inventory list buttons
        //used already is to keep track of using only one item per turn
        //quick stat increase is reset at beginning of each turn and only has one turn of effect
        let itemButtons = inventoryList.children;

        for (let i = 0; i < itemButtons.length; i++) {
            itemButtons[i].addEventListener("click",
                () => useItem(itemButtons[i], itemButtons[i].getAttribute("id"), usedAlready,quickStatIncrease));
        }


}

const useItem = (button,str,usedAlready,statsInc) => {

    //only use one item per turn
    if(usedAlready){
        return;
    }

    let statsArr = ["intelligence","strength","dexterity","stamina","luck"];


   switch (str){
                    //annoying was to set one of the stats in the statsIncreased are randomly
       case "Potion": let stat = (Math.floor(Math.random() * 5));
                      statsInc[statsArr[stat]]= true ;
                      itemMessage.innerHTML = statsArr[stat] + " increased by one this turn!";
                      usedAlready = true;
                      break;

       case "SkeletonKey": displayScene(dragon); // display special scene
                            break;

       default: break;
   }

   inventoryList.removeChild(button);



}


//to display text underneath picture
const displayScenarioText = (string) => {
    scenarioText.innerText = string;
}

//displays each choice at proper button based on index
const displayScenarioChoices = (display,choices,index) => {
    display[index].innerText = choices[index];
}


//an event listener to be added to the choice buttons
//it will add an event listener to the submit button depending on the choice made
// might need to add decision logic for if game ends or something
//btn is the continue button being passed in to accept the event listener fo the next turn
const buttonEvent = (outcomes,index,btn,quickInc) => {

    //TODO check if a stat item was used and pass the appropriate increased value ito this role

    let statTested = outcomes[index].getStatTested(); // the stat being tested in this instance
    let currentStatLevel = playerStats[statTested]; // get level stored in player stats

    //add any stat-boosts that are in global array
    currentStatLevel+= globalStatBoosts[statTested];
    console.log(playerStats);

    // console.log("statTested = " + statTested + "value = " + currentStatLevel);

    // loop thru quick stats array. add 1 if potion used on correct stat

    Object.keys(quickInc).forEach( (key) => {
    if(quickInc[key] === true && statTested === key){
        console.log("stat " + key + " increased by " + 1);
            currentStatLevel++;
    }});

    //TODO add code to give items or coins or take items or coins base on outcome!!!!


    if(outcomes[index].rollVsPlayer(currentStatLevel)){// player is same stat strength in test case

        let reward = (outcomes[index] instanceof SpecialOutcome) ? outcomes[index].getReward() : "";

         displayScenarioText(outcomes[index].getText() + outcomes[index].getGoodOutcome()
             + reward);//then player won the role

    } else{

        let penalty = (outcomes[index] instanceof SpecialOutcome) ? outcomes[index].getPenalty() : "";

        displayScenarioText(outcomes[index].getText() + outcomes[index].getBadOutcome()
            + penalty);
    }

    let nextScene;

    switch (index){
        case 0 : nextScene = swordPath[sceneIndex++];
                 break;
        case 1 : nextScene = armorPath[sceneIndex++];
                 break;
        case 2 : nextScene = coinPath[sceneIndex++];
                 break
    }

    //add a continue button to keep going, with its own eventListener
    /*<a className="btn choice-btn" id="btn-c" type="button">C.</a>*/
    btn.addEventListener("click",() => displayScene(nextScene)) // pass in global variables
    btn.style.display = "block";
    saveBtn.style.display = "block";

    for(let i = 0; i<buttonArr.length; i++){ // disable anchor buttons now that a selection is made
        buttonArr[i].style.pointerEvents = "none";
    }

}




//TODO START MAKING MORE SCENES COULD ADD A NEXT SCENE FIELD TO THE BUTTON EVENT LISTENERS
//TODO TO TAKE THEM ON A SPECIFIC PATH DEPENDING ON THE BUTTON






//What we could do is load an array of scenario objects, and grab them at random as long as
//the character is still alive. Each scenario will have an intro, stats role and ,conclusion and then move
//onto the next randomly generated scenario. We can track the ones we have already visited
//to prevent coming back onto the same one.






