<?php

/**
 * Class Item represents an item that can be used by the player in-game.
 */
class Item
{
    private $_name, $_effect, $_quantity;

    /**
     * Default/Parameterized constructor for the item.
     * @param string $name the name of this item, defaults to "item" if not set
     * @param string $effect the effect of this item, defaults to "default item constructed" if not set
     */
    function __construct($name = "item",$effect = "default item constructed")
    {
        $this->_name = $name;
        $this->_quantity = 1;
        $this->_effect = $effect;
    }

    /**
     * Gets the item's name.
     * @return string the name
     */
    function getName()
    {
        return $this->_name;
    }

    /**
     * Sets the item's name.
     * @param string $name the name
     * @return void
     */
    function setName($name)
    {
        $this->_name = $name;
    }

    /**
     * Gets the item's effect.
     * @return string the effect
     */
    function getEffect()
    {
        return $this->_effect;
    }

    /**
     * Sets the item's effect.
     * @param string $effect the effect
     * @return void
     */
    function setEffect($effect)
    {
        $this->_effect = $effect;
    }

    /**
     * Gets the item's quantity.
     * @return int the quantity
     */
    public function getQuantity()
    {
        return $this->_quantity;
    }

    /**
     * Sets the item's quantity.
     * @param string $quantity the quantity
     * @return void
     */
    public function setQuantity($quantity)
    {
        $this->_quantity = $quantity;
    }

    /**
     * Default toString constructor that prints the item in a readable way.
     * @return string
     */
    public function __toString()
    {
        return $this->_name . ": " . $this->_effect;
    }
}