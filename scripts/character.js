let dice = document.getElementsByClassName('dice');
let raceStats = [
    {
        "race":"beastman",
        "dexterity":3,
        "intelligence":"",
        "luck":"",
        "stamina":3,
        "strength":""
    },
    {
        "race":"dwarf",
        "dexterity":"",
        "intelligence":"",
        "luck":3,
        "stamina":"",
        "strength":3
    },
    {
        "race":"elf",
        "dexterity":3,
        "intelligence":3,
        "luck":"",
        "stamina":"",
        "strength":""
    },
    {
        "race":"human",
        "dexterity":"",
        "intelligence":3,
        "luck":3,
        "stamina":"",
        "strength":""
    },
    {
        "race":"orc",
        "dexterity":"",
        "intelligence":"",
        "luck":"",
        "stamina":3,
        "strength":3
    },
    {
        "race":"vampire",
        "dexterity":"",
        "intelligence":3,
        "luck":"",
        "stamina":"",
        "strength":3
    }
];

// calls statModifier function when race is changed
document.getElementById("race").onchange = function() { statModifier(document.getElementById('race').value, raceStats) };

function statModifier(race, raceStats){
    let modifiers;
    let stats = document.getElementsByClassName("stat");
    let counter = 0;

    // calls "roll" function on click of the dice
    for(let i = 0; i < dice.length; i++) {
        dice[i].addEventListener('click', () => roll(dice[i]), { once: true });
    }

    for(let i = 0; i < raceStats.length; i++) {
        if(raceStats[i]["race"].toLowerCase().includes(race)) {
            modifiers = raceStats[i];
        }
    }

    for(let key in modifiers) {
        if(key !== "race") {
            stats[counter].value = modifiers[key];
            counter++;
        }
    }
}

function roll(dice) {
    // strips the word "dice" off the ID, so it matches the stat it's associated with
    let statName = dice.id.substring(0, dice.id.length - 4);
    let modifier = document.getElementById(statName).value;

    // if unassigned, it's equal to zero
    if(modifier === "") modifier = 0;

    // assigns the dices value (1-10) + race modifiers to the stat
    document.getElementById(statName).value = Math.floor(Math.random() * 10) + parseInt(modifier) + 1;
}