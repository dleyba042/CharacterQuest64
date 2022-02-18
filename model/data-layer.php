<?php

/*function getRaces() {
    return array("beastman", "dwarf", "elf", "human", "orc", "vampire");
}

function getStats(){
    return array("dexterity", "intelligence", "luck", "stamina", "strength");
}

function getItems() {
    return array("key", "skill book", "potion", "magic ring", "coin", "random");
}*/

/**
 * Gets all race options in Character Quest.
 * @return string[] of races
 */
function getRaces() {
    return array("beastman", "dwarf", "elf", "human", "orc", "vampire");
}

/**
 * Gets key-value array of all the stat names and their values in Character Quest.
 * @return string[] of stats
 */
function getStats(){
    return array("dexterity" => "", "intelligence" => "", "luck" => "", "stamina" => "", "strength" => "");
}

/**
 * Gets all items in Character Quest.
 * @return string[] of items
 */
function getItems() {
    return array("sword", "shield", "book", "ring", "pendant", "potion", "skeleton key", "coin");
}