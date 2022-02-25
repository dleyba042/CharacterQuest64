<?php

/**
 *
 */
class User
{
    private $_email;
    private $_password;
    private $_character;

    /**
     * @param $email
     * @param $password
     * @param $character
     */
    function __construct($email, $password, $character)
    {
        $this->_email = $email;
        $this->_password = $password;
        $this->_character = $character;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->_email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->_email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->_password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->_password = $password;
    }

    /**
     * @return mixed
     */
    public function getCharacter()
    {
        return $this->_character;
    }

    /**
     * @param mixed $character
     */
    public function setCharacter($character)
    {
        $this->_character = $character;
    }
}