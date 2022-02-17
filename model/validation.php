<?php

/**
 * Validates user's input for name, checks to see that the string is all alphabetic.
 * @param string $name
 * @return bool
 */
function validName($name) {
    return preg_match("/^[a-zA-Z\- ]{2,30}$/", $name);
}

function validRace($race) {
    return in_array($race, getRaces());
}

function validStats($stat) {
    return !preg_match("/^[0-9]$/", $stat);
}

function validItem($item) {
    return in_array($item, getItems());
}