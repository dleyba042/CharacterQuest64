<?php

/**
 *
 */
class Book extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name enables +3 intelligence boost while equipped");
    }

}