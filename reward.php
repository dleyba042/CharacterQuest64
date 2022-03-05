<?php

//TODO MAYBE use stupid ajax
//HANDLE AJAX REQUESTS

    $itemArr =explode(" ",$_POST['item']);
    if($itemArr[2] == "Sword"){

       // echo "YEEHAW";


    $sword = new Sword($itemArr[1] . " ". $itemArr[2]);
    $class = get_class($sword);

    //$_SESSION['character']->setInventory($sword);


    //echo "<li id =  '$class'>". $sword->getName().":". $sword->getEffect() ."</li>";

}
