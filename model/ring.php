<?php

/**
 *
 */
class Ring extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name enables +3 dexterity boost while equipped");
    }

}