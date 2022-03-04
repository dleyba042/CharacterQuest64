<?php

//Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);



//require autoload file
require_once ('vendor/autoload.php');
//start the session
session_start();

//create an instance of the Base class
$f3 = Base::instance();
$controller = new Controller($f3);


//define a default root
$f3->route("GET /", function(){
    $GLOBALS['controller']->home();
});

//define character route
$f3->route("GET|POST /character", function($f3){
    $GLOBALS['controller']->character();



});

//define game route
$f3->route("GET|POST /game", function($f3){
    $GLOBALS['controller']->game();
});

//run fat free
$f3->run();