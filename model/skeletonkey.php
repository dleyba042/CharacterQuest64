<?php

/**
 * Class SkeletonKey represents a key item that can be used by the player to unlock optional paths in the game.
 */
class SkeletonKey extends Item
{
    /**
     * Default constructor for the SkeletonKey item.
     * @param string $name the name of this particular key
     */
    function __construct($name)
    {
        parent::__construct($name,"unlocks optional paths (One time use)");
    }

    /**
     * Chooses random path, allows for use of key in the game.
     * @return int
     */
    function choosePath()
    {
        return rand(0,2);
    }
}