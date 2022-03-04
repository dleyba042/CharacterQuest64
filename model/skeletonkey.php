<?php

/**
 *
 */
class SkeletonKey extends Item
{
    /**
     * @param $name
     */
    function __construct($name)
    {
        parent::__construct($name,"$name: unlocks optional new paths (this is one time use)");
    }

    function choosePath()
    {

        return rand(0,2);



    }





}