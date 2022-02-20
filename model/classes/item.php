<?php

class Item{

    private $_name;
    private $_effect;
    private $_quantity;

    function __construct($name,$effect = "default item constructed"){
        $this->_name = $name;
        $this->_quantity = 1;
        $this->_effect = $effect;
    }

    function getName(){
        return $this->_name;
    }

    function getEffect(){
        return $this->_effect;
    }

    function setEffect($effect){
        $this->_effect = $effect;
    }


    public function getQuantity()
    {
        return $this->_quantity;
    }


    public function setQuantity($quantity)
    {
        $this->_quantity = $quantity;
    }

    public function __toString(){

        return $this->_name . " " . $this->_effect;
   }


}