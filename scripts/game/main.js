
//import {sceneOne as sceneOne} from "./startScene.js";
import {swordPath as swordPath } from "./paths/swordPath.js";
import {SpecialOutcome} from "./classes/SpecialOutcome.js";
import {dragon} from "./paths/specialScenes.js";
import{getStats} from "./functions/functions.js";

const gameScreen = document.getElementById('game-screen');
const scenarioText = document.getElementById('scenario-text');
const contBtn = document.getElementById("cont-btn");
const saveBtn = document.getElementById("save-btn");
const inventoryList = document.getElementById('inventoryList');
const coinDisplay = document.getElementById('coin-display');
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const buttonArr = [btnA,btnB,btnC]; //array of buttons
const globalStatBoosts = {"intelligence":0,"strength":0,"dexterity":0,"stamina":0,"luck":0}
const itemMessage = document.getElementById('item-message');




let currentPath;
let currentIndex;

//let progress = document.getElementById('progress').getAttribute('value');

//let scene = progress;

// make thus a global variable
//could make a different index for each potential path



const playerStats = getStats(); // get the player stats and store them in a constant global dict.


const addBoosts = () =>{ //add boosts based on weapons in inventory

    let items = inventoryList.children;

    for(let i = 0; i<items.length; i++){

        let split = items[i].id.toLowerCase().split(":");

        switch(split[0]){

            case "sword" :  updateStatText("strength",3);
                            globalStatBoosts['strength'] = 3;
                            break;
            case "shield" : updateStatText("stamina",3);
                            globalStatBoosts['stamina'] = 3;
                            break;
            case "book" :   updateStatText("intelligence",3);
                            globalStatBoosts['intelligence'] = 3;
                            break;
            case "ring" : updateStatText("dexterity",3);
                            globalStatBoosts['dexterity'] = 3;
                            break;
            case "pendant" : updateStatText("luck",3);
                            globalStatBoosts['luck'] = 3;
                            break;
            case "msword" : updateStatText("strength",6);
                            globalStatBoosts['strength'] = 6;
                            break;
            case "mshield" : updateStatText("stamina",6);
                            globalStatBoosts['stamina'] = 6;
                            break;
            case "mpendant" : updateStatText("luck",6);
                            globalStatBoosts['luck'] = 6;
                            break;

        }
    }
}



//MAIN PROGRAM START POINT

window.onload = () => {

    let scene = getProgress();

    let split = scene.split("[");

    currentPath = split[0];

    currentIndex =  split[1].substring(0,1);


   // console.log(currentPath);
   // console.log(currentIndex);
   // console.log(scene);



  //  if(scene === 'swordPath[0]'){

 //       scene = sceneOne;
 //   }else{

 //       scene = swordPath[currentIndex];

 //   }

        //TODO REMEMBER SImPLy THIS APPROACH SOLVED MY RECURSIVE NIGHTMARE
        // I altered display scene to just accept a path and index and then determine the scene once insde the method
        //this allows for the event listener to only need to be added once because the index is updated once within display scene
        displayScene(currentPath, currentIndex);
        contBtn.addEventListener("click", () => displayScene(currentPath, currentIndex));

}


//LETS TRY AND DISPLAY THE SCENARIO I CREATED


const displayScene = (path,index) => {


    let scene = swordPath[index];
    let sceneString = "";


    console.log(path);

    if(path === 'swordPath'){

        sceneString = "swordPath["+ index + "]";

    }

    console.log("SCENESTR=" +sceneString);

    saveData(sceneString);


   // console.log("scene string = " + sceneString);


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
         buttonArr[i].addEventListener("click",  () => buttonEvent(outcomeArr,i,quickStatIncrease));

    }

        //add event listeners to inventory list buttons
        //used already is to keep track of using only one item per turn
        //quick stat increase is reset at beginning of each turn and only has one turn of effect
        let itemButtons = inventoryList.children;

        for (let i = 0; i < itemButtons.length; i++) {
            itemButtons[i].addEventListener("click",
                () => useItem(itemButtons[i], itemButtons[i].getAttribute("id"), usedAlready,quickStatIncrease));
        }




            console.log("UPDATING INDEX" + currentIndex++);

        //    nextScene = swordPath[currentIndex];
        //    contBtn.addEventListener("click", () => displayScene(nextScene, currentPath, currentIndex));

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
const buttonEvent = (outcomes,index,quickInc) => {


    let statTested = outcomes[index].getStatTested(); // the stat being tested in this instance
    let currentStatLevel = 0;

    console.log("stat tested is = " + statTested);


    if(statTested === 'coin') { //then we are testing money and not a stat

        let items = inventoryList.children;

        for(let i = 0; i<items.length; i++){

            let split = items[i].id.toLowerCase().split(":");
            if(split[0] === "coin"){

                currentStatLevel = split[1];
            }
        }

    }else{ //check if a potion is used and this is not a coin challenge

        currentStatLevel = playerStats[statTested]; // get level stored in player stats

        //add any stat-boosts that are in global array
        currentStatLevel += globalStatBoosts[statTested];


        // loop thru quick stats array. add 1 if potion used on correct stat
        Object.keys(quickInc).forEach((key) => {
            if (quickInc[key] === true && statTested === key) {
                console.log("stat " + key + " increased by " + 1);
                currentStatLevel++;
            }
        });

       // console.log("STat with BOOSTS=" + currentStatLevel);//to test that our boosts are actually working

    }



    if(outcomes[index].rollVsPlayer(currentStatLevel)){// player is same stat strength in test case

        let reward = "";
        try {
            reward = outcomes[index].getReward();
        }catch (error){
            console.log(error);
        }

        //console.log("reward=" +   reward);


        if(statTested === "coin" && reward === "coin") {

            console.log("GIVING COIN TRUE");
            let zarlock = document.createElement("li");
            let newCoin = currentStatLevel + Math.floor(Math.random() * 100);
            zarlock.id = "Coin:" +newCoin;
            zarlock.innerHTML = "Zarlock: can be used to purchase or persuade";
            inventoryList.appendChild(zarlock);
            coinDisplay.innerHTML = newCoin +" "+ "\u{2124}";


        }else if(reward !== ""){ //then we add the new item to the inventory

            console.log("REWARDDDD");

            let item = document.createElement('li');
            item.id = reward.getType(); //the item type
            item.innerHTML = reward.getName() + " : " + reward.getEffect();


            //clear list of a weaker item if present
            //TODO could pass type to function  so this is less cluttered
            switch (reward.getType()) {

                case "msword": removeItem("sword");
                               break;
                case "mshield": removeItem("shield");
                                break;
                case "mpendant": removeItem("pendant");
                               break;

            }

            inventoryList.appendChild(item);


        }


        if(statTested === "coin" ){ //then set the new coin level

            console.log("COIN TEST");
            coinDisplay.innerHTML = (currentStatLevel - outcomes[index].getStatsRoll()) + "\u{2124}";
        }


        displayScenarioText(outcomes[index].getText() + outcomes[index].getGoodOutcome());//then player won the role

    }else{

        console.log("ELESE");

        let penalty = (outcomes[index] instanceof SpecialOutcome) ? outcomes[index].getPenalty() : "";

        //TODO how about the penalties are just a choice bewtween "Death", "Coin"(LOSS),"Item"(LOSS)



        displayScenarioText(outcomes[index].getText() + outcomes[index].getBadOutcome());
    }

     // pass in global variables
    contBtn.style.display = "block";
    saveBtn.style.display = "block";


    for(let i = 0; i<buttonArr.length; i++){ // disable anchor buttons now that a selection is made
        buttonArr[i].style.pointerEvents = "none";
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

    if(str === "Potion" || str === "SkeletonKey") {

        inventoryList.removeChild(button);
    }



}



//for replacing an old item with a better one
const removeItem = (itemType) => {

    let items = inventoryList.children;

    for(let i = 0; i<items.length; i++){

        let split = items[i].id.toLowerCase().split(":");

        if(split[0] === itemType){
            inventoryList.removeChild(items[i]);
        }


    }
}


//this is neccesary to avoid appending a bunch of text to end of string
const updateStatText = (stat,newAmount) => {

    let currentLevel = playerStats[stat];

    document.getElementById(stat).innerHTML =  stat[0].toUpperCase() + stat.substring(1) + " : " + currentLevel + "(+" + newAmount +")";


}




const saveData = (scene) =>{

    document.getElementById('progress').setAttribute("value",scene);

}

const getProgress = () => {
    return document.getElementById('progress').value;
}






