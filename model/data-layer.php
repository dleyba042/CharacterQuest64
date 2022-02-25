<?php

/**
 *
 */
class DataLayer
{
    /**
     * Gets all race options in Character Quest.
     * @return string[] of races
     */
    static function getRaces()
    {
        return array("beastman", "dwarf", "elf", "human", "orc", "vampire");
    }

    /**
     * Gets key-value array of all the stat names and their values in Character Quest.
     * @return string[] of stats
     */
    static function getStats()
    {
        return array("dexterity" => "", "intelligence" => "", "luck" => "", "stamina" => "", "strength" => "");
    }

    /**
     * Gets all items in Character Quest.
     * @return string[] of items
     */
    static function getItems()
    {
        return array("sword", "shield", "book", "ring", "pendant", "potion", "skeleton key", "coin");
    }

    /**
     * Gets an instance of a Sword item.
     * @return Sword item
     */
    static function getTestItems()
    {
        return new Sword("Slicer Sword");
    }
}