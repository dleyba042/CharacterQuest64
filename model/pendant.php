<?php

/**
 *
 */
class Pendant extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name enables +3 luck boost while equipped");
    }

}