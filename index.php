<?php

//Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

//start the session
session_start();

//require autoload file
require_once ('vendor/autoload.php');
require_once ('model/data-layer.php');

//create an instance of the Base class
$f3 = Base::instance();

//define a default root
$f3->route("GET /", function(){


        $view = new Template();
        echo $view->render('views/landing.html');

});

//define character route
$f3->route("GET|POST /character", function($f3){

    $view = new Template();
    echo $view->render('views/character.html');

});

//define game route
$f3->route("GET|POST /game", function($f3){

    $view = new Template();
    echo $view->render('views/game.html');
});

//run fat free
$f3->run();
