<?php

/**
 *
 */
class Item
{

    private $_name;
    private $_effect;
    private $_quantity;

    /**
     * @param $name
     * @param $effect
     */
    function __construct($name,$effect = "default item constructed")
    {
        $this->_name = $name;
        $this->_quantity = 1;
        $this->_effect = $effect;
    }

    /**
     * @return mixed
     */
    function getName()
    {
        return $this->_name;
    }

    /**
     * @return mixed|string
     */
    function getEffect()
    {
        return $this->_effect;
    }

    /**
     * @param $effect
     * @return void
     */
    function setEffect($effect)
    {
        $this->_effect = $effect;
    }


    /**
     * @return int
     */
    public function getQuantity()
    {
        return $this->_quantity;
    }


    /**
     * @param $quantity
     * @return void
     */
    public function setQuantity($quantity)
    {
        $this->_quantity = $quantity;
    }

    /**
     * @return string
     */
    public function __toString()
    {

        return $this->_name . " " . $this->_effect;
   }
}