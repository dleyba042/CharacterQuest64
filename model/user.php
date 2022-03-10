<?php

/**
 * Class User represents a user's account that ties to their character(s).
 */
class User
{
    private $_username, $_password;

    /**
     * Default/Parameterized constructor for the user's account.
     * @param string $username the user's username
     * @param string $password the user's password
     */
    function __construct($username = "", $password = "")
    {
        $this->_username = $username;
        $this->_password = $password;
    }

    /**
     * Gets the user's username.
     * @return string the user's username
     */
    public function getUsername()
    {
        return $this->_username;
    }

    /**
     * Sets the user's username.
     * @param string $username the user's username
     */
    public function setUsername($username)
    {
        $this->_username = $username;
    }

    /**
     * Gets the user's password.
     * @return string the user's password
     */
    public function getPassword()
    {
        return $this->_password;
    }

    /**
     * Sets the user's password.
     * @param string $password the user's password
     */
    public function setPassword($password)
    {
        $this->_password = $password;
    }
}