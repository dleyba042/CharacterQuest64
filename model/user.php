<?php

/**
 * Class User represents a user's account that ties to their character(s).
 */
class User
{
    private $_email, $_password;

    /**
     * Default/Parameterized constructor for the user's account.
     * @param string $email the user's email
     * @param string $password the user's password
     */
    function __construct($email, $password)
    {
        $this->_email = $email;
        $this->_password = $password;
    }

    /**
     * Gets the user's email.
     * @return string the user's email
     */
    public function getEmail()
    {
        return $this->_email;
    }

    /**
     * Sets the user's email.
     * @param string $email the user's email
     */
    public function setEmail($email)
    {
        $this->_email = $email;
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