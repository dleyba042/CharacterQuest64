<?php

/**
 * Class Shield represents a shield item that can be used by the player in-game.
 */
class Shield extends Item
{
    /**
     * Default/Parameterized constructor for the shield item.
     * @param string $name the name of this shield, defaults to "shield" if not set
     */
    function __construct($name = "shield")
    {
        parent::__construct($name,"+3 stamina boost while equipped");
    }
}