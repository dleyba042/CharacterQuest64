<?php

/**
 * Validates user's input for name, checks that the string is all alphabetic.
 * @param string $name the character's name
 * @return bool true for valid, false for invalid
 */
function validName($name) {
    return preg_match("/^[a-zA-Z\- ]{2,30}$/", $name);
}

/**
 * Validates user's dropdown choice for race, checks for form spoofing.
 * @param string $race the character's race
 * @return bool true for valid, false for invalid
 */
function validRace($race) {
    return in_array($race, getRaces());
}

/**
 * Validates user's stat rolls, checks for form spoofing.
 * @param array $userStats associative array of each stat name => stat num
 * @return bool true for valid, false for invalid
 */
function validStats($userStats) {

    $stats = array_keys(getStats());

    foreach($userStats as $statName => $stat) {
        if (!in_array($statName, $stats) || !preg_match("/^[0-9]{1,2}$/", $stat)) {
            return false;
        }
    }
    return true;
}

/**
 * Validates user's choice of starting item, checks for form spoofing.
 * @param string $item the name of the chosen item
 * @return bool true if user's item in valid items list, false otherwise
 */
function validItem($item) {
    return in_array($item, getItems());
}