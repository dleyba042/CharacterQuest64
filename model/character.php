<?php

/**
 * Class Character represents the player's character and all of their attributes.
 */
class Character
{
    private $_name, $_race, $_stats, $_inventory;

    /**
     * Default/Parameterized constructor for the player's character.
     * @param string $name the name of this character
     * @param string $race the race of this character
     * @param array $stats the stats of this character
     * @param array $inventory the inventory of this character
     */
    function __construct($name = "", $race = "", $stats = "", $inventory = array())
    {
        $this->_name = $name;
        $this->_race = $race;
        $this->_stats = $stats;
        $this->_inventory = $inventory;
    }

    /**
     * Gets the character's name.
     * @return string the name
     */
    public function getName()
    {
        return $this->_name;
    }

    /**
     * Sets the character's name.
     * @param string $name
     */
    public function setName($name)
    {
        $this->_name = $name;
    }

    /**
     * Gets the character's race.
     * @return string the race
     */
    public function getRace()
    {
        return $this->_race;
    }

    /**
     * Sets the character's race.
     * @param string $race the race
     */
    public function setRace($race)
    {
        $this->_race = $race;
    }

    /**
     * Gets the character's stats.
     * @return array the stats
     */
    public function getStats()
    {
        return $this->_stats;
    }

    /**
     * Sets the character's stats.
     * @param array $stats the stats
     */
    public function setStats($stats)
    {
        $this->_stats = $stats;
    }

    /**
     * Gets the character's inventory.
     * @return array the inventory
     */
    public function getInventory()
    {
        return $this->_inventory;
    }

    /**
     * Sets the character's inventory.
     * @param array $inventory the inventory
     */
    public function setInventory($inventory)
    {
        $this->_inventory[] = $inventory;
    }
}