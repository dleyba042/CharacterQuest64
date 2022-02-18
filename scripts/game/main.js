
import {sceneOne as sceneOne} from "./startScene.js";
import {swordPath as swordPath } from "./paths/swordPath.js";


const gameScreen = document.getElementById('game-screen');
const scenarioText = document.getElementById('scenario-text');
const contBtn = document.getElementById("cont-btn");
const inventoryButton = document.getElementById('inventory-button');
const statsButton = document.getElementById('stats-button');
const inventoryBody = document.getElementById('inventory-button');
const statsBody = document.getElementById('stats-button');
const coinDisplay = document.getElementById('coin');
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const buttonArr = [btnA,btnB,btnC]; //array of buttons

const armorPath = []; // just fake for testing purposes
const coinPath = []; // just fake for testing purposes

let sceneIndex = 0; // make thus a global variable
                    //could make a different index for each potential path



//MAIN PROGRAM START POINT

window.onload = () => {


   displayScene(sceneOne);

}


//LETS TRY AND DISPLAY THE SCENARIO I CREATED


const displayScene = (scene) => {


    if(contBtn.style.display === "block"){ //hide continue before displaying new scene
        contBtn.style.display = "none";
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

    //add event listeners to inventory list buttons
    let itemButtons = document.getElementById('inventoryList').children;

    for(let i = 0; i<itemButtons.length; i++){
        itemButtons[i].addEventListener("click",
            () => useItem(itemButtons[i].getAttribute("id")));
    }

    /*
    itemButtons.forEach((button) => {
        button.addEventListener("click", () => alert(" the value of this button is " + button.value));
    })

     */


}

//TODO write the code to actually do what the item does
const useItem = (str) => {

    let splitStr = str.split(":");
    let name = splitStr[1];
    let quantity = splitStr[0];
    let effect = splitStr[2];


    alert("this " + name + " " + effect);
    //actually do the effects down here
    //do we want to remove just potions and keys from inventory based on quantity
    //will weapons always stay and be usable each turn?


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



    if(outcomes[index].rollVsPlayer(10)){// player is same stat strength in test case
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






