<?php

/**
 * Class Book represents a book item that can be used by the player in-game.
 */
class Book extends Item
{
    /**
     * Default/Parameterized constructor for the book item.
     * @param string $name the name of this book, defaults to "book" if not set
     */
    function __construct($name = "book")
    {
        parent::__construct($name,"+3 intelligence boost while equipped");
    }
}