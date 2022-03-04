<?php

/**
 *
 */
class Controller
{
    private $_f3;

    /**
     * @param $f3
     */
    function __construct($f3)
    {
        $this->_f3 = $f3;
    }

    /**
     * @return void
     */
    function home()
    {
        $view = new Template();
        echo $view->render('views/landing.html');
    }

    /**
     * @return void
     */
    function character()
    {
         $database= new Database();

        //Initialize to get stat names for the form
        $stats = DataLayer::getStats();
        $items = DataLayer::getItems();

        //If the form has been posted
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {


            $_SESSION['character'] = new Character();

            $name = $this->_f3->get('POST.name');
            $race = $this->_f3->get('POST.race');
            $item = $this->_f3->get('POST.item');
            $start = $this->_f3->get('POST.start');

            //Gets any user rolled stats and assigns them to their proper key
            foreach ($stats as $key => $value) {
                $stats[$key] = $this->_f3->get('POST.' . $key);
            }

            //Validate the character's name
            if (Validation::validName($name)) {
               $_SESSION['character']->setName($name);
            } else {
                $this->_f3->set('errors["name"]', 'Please only use letters, hyphens, or spaces (30 character limit)');
            }

            //Validate the character's race
            if (Validation::validRace($race)) {
                $_SESSION['character']->setRace($race);
            } else {
                $this->_f3->set('errors["race"]', 'Please choose a race');
            }

            //Validate the character's stats
            if (Validation::validStats($stats)) {
                $_SESSION['character']->setStats($stats);
            } else {
                $this->_f3->set('errors["stats"]', 'Please roll for each stat');
            }

            //Validate the character's starting item
            if (Validation::validItem($item)) {
                foreach ($items as $value) {
                    if($value->__toString() == $item) {
                        $_SESSION['character']->setInventory(array($value));
                    }
                }
            } else {
                $this->_f3->set('errors["item"]', 'Please choose an item');
            }

            if (isset($_POST['start']) && empty($this->_f3->get('errors'))) {
                $database->setCharacter($_SESSION['character']);
                $this->_f3->reroute('game');
            }
        }

        //Adds data to F3 hive
        $this->_f3->set('name', $name);
        $this->_f3->set('races', DataLayer::getRaces());
        $this->_f3->set('userRace', $race);
        $this->_f3->set('stats', $stats);
        $this->_f3->set('items', $items);
        $this->_f3->set('userItem', $item);
        $this->_f3->set('start', $start);

        $view = new Template();
        echo $view->render('views/character.html');
    }

    /**
     * @return void
     */
    function game()
    {
        $this->_f3->set('name', $this->_f3->get('SESSION.name'));
        $this->_f3->set('userRace', $this->_f3->get('SESSION.race'));
        $this->_f3->set('userStats', DataLayer::getStats());


        $view = new Template();
        echo $view->render('views/game.html');
    }
}