<?php

//Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

//start the session
session_start();

//require autoload file
require_once ('vendor/autoload.php');
require_once ('model/data-layer.php');
require_once ('model/validation.php');

//create an instance of the Base class
$f3 = Base::instance();

//define a default root
$f3->route("GET /", function(){


    $view = new Template();
    echo $view->render('views/landing.html');

});

//define character route
$f3->route("GET|POST /character", function($f3){

    //If the form has been posted
    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        $name = $f3->get('POST.name');
        $race = $f3->get('POST.race');
        $dexterity = $f3->get('POST.dexterity');
        $intelligence = $f3->get('POST.intelligence');
        $luck = $f3->get('POST.luck');
        $stamina = $f3->get('POST.stamina');
        $strength = $f3->get('POST.strength');
        $item = $f3->get('POST.item');

        //Validate the character's name
        if(validName($name)) {
            $f3->set('SESSION.name', $name);
        } else {
            $f3->set('errors["name"]', 'Please enter a name using only enter letters, hyphens, or spaces (30 character limit)');
        }

        //Validate the character's race
        if(validRace($race)) {
            $f3->set('SESSION.race', $race);
        } else {
            $f3->set('errors["race"]', 'Please choose a race');
        }

        //Validate the character's dexterity
        if (validStats($dexterity)) {
            $f3->set('SESSION.dexterity', $dexterity);
        } else {
            $f3->set('errors["dexterity"]', 'Please roll for dexterity');
        }

        //Validate the character's intelligence
        if (validStats($intelligence)) {
            $f3->set('SESSION.intelligence', $intelligence);
        } else {
            $f3->set('errors["intelligence"]', 'Please roll for intelligence');
        }

        //Validate the character's luck
        if (validStats($luck)) {
            $f3->set('SESSION.luck', $luck);
        } else {
            $f3->set('errors["luck"]', 'Please roll for luck');
        }

        //Validate the character's stamina
        if (validStats($stamina)) {
            $f3->set('SESSION.stamina', $stamina);
        } else {
            $f3->set('errors["stamina"]', 'Please roll for stamina');
        }

        //Validate the character's strength
        if (validStats($strength)) {
            $f3->set('SESSION.strength', $strength);
        } else {
            $f3->set('errors["strength"]', 'Please roll for strength');
        }

        //Validate the character's starting item
        if(validItem($item)) {
            $f3->set('SESSION.item', $item);
        } else {
            $f3->set('errors["item"]', 'Please choose an item');
        }

        if(empty($f3->get('errors'))) {
            $f3->reroute('game');
        }
    }

    //Adds data to F3 hive
    $f3->set('name', $name);
    $f3->set('races', getRaces());
    $f3->set('race', $race);
    $f3->set('stats', getStats());
    $f3->set('userStats', array($dexterity, $intelligence, $luck, $stamina, $strength));
    $f3->set('items', getItems());
    $f3->set('userItem', $item);

    $view = new Template();
    echo $view->render('views/character.html');
});

//define game route
$f3->route("GET|POST /game", function($f3){

    $f3->set('userStats',getStats());

    $view = new Template();
    echo $view->render('views/game.html');
});

//run fat free
$f3->run();