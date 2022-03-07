<?php

/**
 * Class Potion represents a potion item that can be used by the player in-game.
 */
class Potion extends Item
{
    /**
     * Default/Parameterized constructor for the potion item.
     * @param string $name the name of this potion, defaults to "potion" if not set
     */
    function __construct($name = "potion")
    {
        parent::__construct($name,"+1 to random stat (One time use)");
    }
}