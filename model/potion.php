<?php

/**
 *
 */
class Potion extends Item
{
    /**
     * @param $name
     */
    function __construct($name= "")
    {
        parent::__construct($name,"$name: enables +1 to random stat (this is one time use)");
    }

}