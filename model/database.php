<?php

require $_SERVER['DOCUMENT_ROOT'].'/../cq64-pdo-config.php';

/**
 *
 */
class Database
{
    private $_dbh;

    /**
     * @return void
     */
      function __construct()
    {
        try {
            //Instantiate a PDO database object
            $this->_dbh = new PDO (DB_DSN, DB_USERNAME, DB_PASSWORD);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

     function setCharacter($character)
    {
        $sql = "INSERT INTO `character`(name, dexterity, intelligence, luck, stamina, strength, race, user_id) 
                VALUES (:name, :dexterity, :intelligence, :luck, :stamina, :strength, :race, :user_id)";

        //2. Prepare the statement
        $statement = $this->_dbh->prepare($sql);

        //3. Bind the parameters
        $name = $character->getName();
        $stats = $character->getStats();
        $dexterity = $stats['dexterity'];
        $intelligence = $stats['intelligence'];
        $luck= $stats['luck'];
        $stamina= $stats['stamina'];
        $strength= $stats['strength'];
        $race = $character->getRace();
        $userid= 1; //TODO: FIX WHEN LOGIN WORKS


        $statement->bindParam(':name', $name);
        $statement->bindParam(':dexterity', $dexterity);
        $statement->bindParam(':intelligence', $intelligence);
        $statement->bindParam(':luck', $luck);
        $statement->bindParam(':stamina', $stamina);
        $statement->bindParam(':strength', $strength);
        $statement->bindParam(':race', $race);
        $statement->bindParam(':user_id', $userid);

        //4. Execute the query
        $statement->execute();

        //5. Process the results (get the primary key)
        return $this->_dbh->lastInsertId();
    }

    function setInventory($character_id,$item)
    {

        //1.prepare
        $sql2 = "INSERT INTO `inventory` (character_id,quantity,item_id)
                 values (:character_id,:quantity,:item_id)";

        //2. Prepare the statement
        $statement = $this->_dbh->prepare($sql2);

        //3. Bind the parameters
        $itemId = $this->getItemID($item);
        $quantity = $item->getQuantity();

        $statement->bindParam(':character_id', $character_id);
        $statement->bindParam(':quantity', $quantity);
        $statement->bindParam(':item_id', $itemId['item_id']);


        //4. Execute the query
        $statement->execute();


    }

    function getItemID($item)
    {

        $name =  strtolower(get_class($item));

        $sql1 = "SELECT item_id from items WHERE name = :name ";

        //2. Prepare the statement
        $statement = $this->_dbh->prepare($sql1);

        //3. Bind the parameters
        $statement->bindParam(':name',$name);

        //4. Execute the query
        $statement->execute();

        return $statement->fetch(PDO::FETCH_ASSOC);

    }
}