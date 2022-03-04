<?php

/**
 *
 */
class Coin extends Item
{
    /**
     * @param $name
     */
    function __construct($name, $quantity)
    {
        parent::__construct($name,"$name: can be used to purchase or persuade");
        parent::setQuantity($quantity);
    }

    function getQuantity()
    {
        return "\u{2124}" . parent::getQuantity();
    }


}