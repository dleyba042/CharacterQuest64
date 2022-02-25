<?php

require $_SERVER['DOCUMENT_ROOT'].'/../cq64-pdo-config.php';

/**
 *
 */
class Database
{
    private static $_dbh;

    /**
     * @return void
     */
    public static function connect()
    {
        try {
            //Instantiate a PDO database object
            $dbh = new PDO (DB_DSN, DB_USERNAME, DB_PASSWORD);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }


}