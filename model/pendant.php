<?php

/**
 * Class Pendant represents a pendant item that can be used by the player in-game.
 */
class Pendant extends Item
{
    /**
     * Default/Parameterized constructor for the pendant item.
     * @param string $name the name of this pendant, defaults to "pendant" if not set
     */
    function __construct($name = "pendant")
    {
        parent::__construct($name,"+3 luck boost while equipped");
    }
}