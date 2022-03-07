<?php

/**
 * Class Ring represents a ring item that can be used by the player in-game.
 */
class Ring extends Item
{
    /**
     * Default/Parameterized constructor for the ring item.
     * @param string $name the name of this ring, defaults to "ring" if not set
     */
    function __construct($name = "ring")
    {
        parent::__construct($name,"+3 dexterity boost while equipped");
    }
}