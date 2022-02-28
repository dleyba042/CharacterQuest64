
import {sceneOne as sceneOne} from "./startScene.js";
import {swordPath as swordPath } from "./paths/swordPath.js";


const gameScreen = document.getElementById('game-screen');
const scenarioText = document.getElementById('scenario-text');
const contBtn = document.getElementById("cont-btn");
const saveBtn = document.getElementById("save-btn");
const inventoryList = document.getElementById('inventoryList');
const statsList = document.getElementById('char-stats').children;
//TODO add buttons to access the value in each stat once we fix php
const coinDisplay = document.getElementById('coin');
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const buttonArr = [btnA,btnB,btnC]; //array of buttons

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


//TODO code to add boosts to stats based on items
//add the rest of the items!!!!!!!
const addBoosts = () =>{

    let items = inventoryList.children;

    for(let i = 0; i<items.length; i++){


        if(items[i].id === "sword"){

            document.getElementById("strength").innerHTML += ("(+3)");
        }
    }

}

const playerStats = getStats(); // get the player stats and store them in a constant dict.




//MAIN PROGRAM START POINT

window.onload = () => {

   //playerStats = getStats();
   displayScene(sceneOne);

}


//LETS TRY AND DISPLAY THE SCENARIO I CREATED


const displayScene = (scene) => {


   // console.log("player stats = " + playerStats['luck']);

    addBoosts();

    // use this boolean to determine stat role at the end
    let statsIncreased = {"intelligence":false,"strength":false,"dexterity":false,"stamina":false,"luck":false};
    let increase = 0;
    let usedAlready = false;

    if(contBtn.style.display === "block"){ //hide continue before displaying new scene
        contBtn.style.display = "none";
        saveBtn.style.display = "none";
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
         buttonArr[i].addEventListener("click",  () => buttonEvent(outcomeArr,i,contBtn));

    }

        console.log(inventoryList);

        //add event listeners to inventory list buttons
        let itemButtons = inventoryList.children;

        for (let i = 0; i < itemButtons.length; i++) {
            itemButtons[i].addEventListener("click",
                () => useItem(itemButtons[i], itemButtons[i].getAttribute("id"), usedAlready,statsIncreased));
        }


    /*
    itemButtons.forEach((button) => {
        button.addEventListener("click", () => alert(" the value of this button is " + button.value));
    })

     */
}

//TODO write the code to actually do what the item does
const useItem = (button,str,usedAlready,statsInc) => {

    let statsArr = ["intelligence","strength","dexterity","stamina","luck"];

    //used already is only if we only want to use one item
    //per turn, just sitting there for now

   let arr = str.split(':');
   let name = arr[0].toLowerCase();
   let quantity = arr[1];

   switch (str){
                    //annoying was to set one of the stats in the statsIncreased are randomly
       case "potion": let stat = (Math.floor(Math.random() * 5));
                      statsInc[statsArr[stat]]= true ;
                      console.log(statsArr[stat] + " increased by one this turn!");
                      usedAlready = true;
                      break;

       case "skeletonKey": break; //Todo write branching path code

       default: console.log("You used a " + name);
                break;
   }


  //  alert("You used a " + name );
    //actually do the effects down here
    //do we want to remove just potions and keys from inventory based on quantity
    //will weapons always stay and be usable each turn?
    // us can set the boolean to used stat item for true

    if(quantity === 1){

        console.log(quantity);
        inventoryList.removeChild(button);

    }else{ //we've gotta reduce the quantity in the element
        quantity--;
        let newStr = quantity + ":" + name ;
        button.setAttribute("id",newStr);
    }



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
const buttonEvent = (outcomes,index,btn) => {

    //TODO check if a stat item was used and pass the appropriate increased value ito this role


    let statTested = outcomes.getStatTested(); // the stat being tested in this instance
    let currentStatLevel = playerStats[statTested]; // get level stored in player stats

   // let playerStat = strengthStat.value; //something like that
   //then if (statsIncreased['playerStat']){
    // then we will add increase variable to that stat and then pass it into the decision}


    //TODO check if stats are boosted anf add that to the currentStatLevel value


    if(outcomes[index].rollVsPlayer(currentStatLevel)){// player is same stat strength in test case
         displayScenarioText(outcomes[index].getText() + outcomes[index].getGoodOutcome());//then player won the role
    } else{
        displayScenarioText(outcomes[index].getText() + outcomes[index].getBadOutcome());
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

}




//TODO START MAKING MORE SCENES COULD ADD A NEXT SCENE FIELD TO THE BUTTON EVENT LISTENERS
//TODO TO TAKE THEM ON A SPECIFIC PATH DEPENDING ON THE BUTTON




//NOTES BELOW

//we need to be able to store character stats all in one place and retrieve them
//to keep the body of stats and stats populated. This CAN ACTUALLY BE DONE WITH PHP






//we need to be able to store character inventory all in one place an retrieve them
//to keep the body of inventory and stats populated. This CAN ACTUALLY BE DONE WITH PHP




//function to display a scenario,





//I need a function to grab a scenario that gets passed to display scenario




//What we could do is load an array of scenario objects, and grab them at random as long as
//the character is still alive. Each scenario will have an intro, stats role and ,conclusion and then move
//onto the next randomly generated scenario. We can track the ones we have already visited
//to prevent coming back onto the same one.






