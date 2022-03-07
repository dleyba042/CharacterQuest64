<?php

/**
 * Class Sword represents a sword item that can be used by the player in-game.
 */
class Sword extends Item
{
    /**
     * Default/Parameterized constructor for the sword item.
     * @param string $name the name of this particular sword, defaults to "sword" if not set
     */
    function __construct($name = "sword")
    {
        parent::__construct($name,"+3 strength boost while equipped");
    }
}