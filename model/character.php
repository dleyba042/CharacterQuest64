<?php

/**
 *
 */
class Character
{
    private $_name;
    private $_race;
    private $_stats;
    private $_inventory;

    /**
     * @param $name
     * @param $race
     * @param $stats
     * @param $inventory
     */
    function __construct($name, $race, $stats, $inventory)
    {
        $this->_name = $name;
        $this->_race = $race;
        $this->_stats = $stats;
        $this->_inventory = $inventory;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->_name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->_name = $name;
    }

    /**
     * @return mixed
     */
    public function getRace()
    {
        return $this->_race;
    }

    /**
     * @param mixed $race
     */
    public function setRace($race)
    {
        $this->_race = $race;
    }

    /**
     * @return mixed
     */
    public function getStats()
    {
        return $this->_stats;
    }

    /**
     * @param mixed $stats
     */
    public function setStats($stats)
    {
        $this->_stats = $stats;
    }

    /**
     * @return mixed
     */
    public function getInventory()
    {
        return $this->_inventory;
    }

    /**
     * @param mixed $inventory
     */
    public function setInventory($inventory)
    {
        $this->_inventory = $inventory;
    }
}