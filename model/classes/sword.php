<?php

//include('item.php');

class Sword extends Item{

    function __construct($name)
    {
        parent::__construct($name,"Sword enables +3 strength boost while equipped");
    }

}