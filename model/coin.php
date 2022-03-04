<?php

/**
 *
 */
class Coin extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"Coin can be used to purchase or persuade");
    }

}