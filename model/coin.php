<?php

/**
 * Class Coin represents a coin item that can be used by the player in-game.
 */
class Coin extends Item
{
    /**
     * Default/Parameterized constructor for the coin item.
     * @param string $name the currency's name
     * @param int $quantity the amount of the coin
     */
    function __construct($name, $quantity)
    {
        parent::__construct($name,"used to purchase or persuade");
        parent::setQuantity($quantity);
    }

    /**
     * Gets the quantity of the coins with the currency's symbol.
     * @return string
     */
    function getQuantityDisplay()
    {
        return parent::getQuantity() . "\u{2124}";
    }
}