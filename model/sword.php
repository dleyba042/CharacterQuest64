<?php

/**
 *
 */
class Sword extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name enables +3 strength boost while equipped");
    }

}