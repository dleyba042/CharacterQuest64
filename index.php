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

    //Initialize to get stat names for the form
    $stats = getStats();

    //If the form has been posted
    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        $name = $f3->get('POST.name');
        $race = $f3->get('POST.race');
        $item = $f3->get('POST.item');
        $start = $f3->get('POST.start');

        //Gets any user rolled stats and assigns them to their proper key
        foreach($stats as $key => $value) {
            $stats[$key] = $f3->get('POST.'.$key);
        }

        //Validate the character's name
        if(validName($name)) {
            $f3->set('SESSION.name', $name);
        } else {
            $f3->set('errors["name"]', 'Please only use letters, hyphens, or spaces (30 character limit)');
        }

        //Validate the character's race
        if(validRace($race)) {
            $f3->set('SESSION.race', $race);
        } else {
            $f3->set('errors["race"]', 'Please choose a race');
        }

        //Validate the character's stats
        if (validStats($stats)) {
            $f3->set('SESSION.stats', $stats);
        } else {
            $f3->set('errors["stats"]', 'Please roll for each stat');
        }

        //Validate the character's starting item
        if(validItem($item)) {
            $f3->set('SESSION.items', array($item));
        } else {
            $f3->set('errors["item"]', 'Please choose an item');
        }

        if(isset($_POST['start']) && empty($f3->get('errors'))) {
            $f3->reroute('game');
        }
    }

    //Adds data to F3 hive
    $f3->set('name', $name);
    $f3->set('races', getRaces());
    $f3->set('userRace', $race);
    $f3->set('stats', $stats);
    $f3->set('items', getItems());
    $f3->set('userItem', $item);
    $f3->set('start', $start);

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