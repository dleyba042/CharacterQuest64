<?php

/**
 * Class DataLayer accesses data needed for Character Quest 64.
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
     * @return Object[] of items
     */
    static function getItems()
    {
        return array(
            new Sword("Sword of a Thousand Deaths"), new Shield("Aeneas' Shield"),
            new Book("Book of Omniscience"), new Ring("Ring of Finesse"),
            new Pendant("Locket of Luck"), new Potion("Potion of Chances"),
            new SkeletonKey("Key of Paths"), new Coin("Zarlock", 50)
        );
    }
}