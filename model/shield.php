<?php

/**
 *
 */
class Shield extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name: enables +3 stamina boost while equipped");
    }
}