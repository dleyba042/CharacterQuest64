<?php

//Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

//require autoload file
require_once ('vendor/autoload.php');
//start the session
session_start();

//create an instance of the base, controller, & datalayer class
$f3 = Base::instance();
$controller = new Controller($f3);
$dataLayer = new DataLayer();

//define a default root
$f3->route("GET|POST /", function(){
    $GLOBALS['controller']->home();
});

//define character route
$f3->route("GET|POST /character", function(){
    $GLOBALS['controller']->character();
});

//define game route
$f3->route("GET|POST /game", function(){
    $GLOBALS['controller']->game();
});

//define save route
$f3->route("GET|POST /save", function(){
    $GLOBALS['controller']->save();
});

//define logout route
$f3->route("GET|POST /logout", function(){
    $GLOBALS['controller']->logout();
});

//run fat free
$f3->run();