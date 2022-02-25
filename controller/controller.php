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
        //Initialize to get stat names for the form
        $stats = DataLayer::getStats();

        //If the form has been posted
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $name = $this->_f3->get('POST.name');
            $race = $this->_f3->get('POST.race');
            $item = $this->_f3->get('POST.item');
            $start = $this->_f3->get('POST.start');

            //Gets any user rolled stats and assigns them to their proper key
            foreach ($stats as $key => $value) {
                $stats[$key] = $this->_f3->get('POST.' . $key);
            }

            //Validate the character's name
            if (validName($name)) {
                $this->_f3->set('SESSION.name', $name);
            } else {
                $this->_f3->set('errors["name"]', 'Please only use letters, hyphens, or spaces (30 character limit)');
            }

            //Validate the character's race
            if (validRace($race)) {
                $this->_f3->set('SESSION.race', $race);
            } else {
                $this->_f3->set('errors["race"]', 'Please choose a race');
            }

            //Validate the character's stats
            if (validStats($stats)) {
                $this->_f3->set('SESSION.stats', $stats);
            } else {
                $this->_f3->set('errors["stats"]', 'Please roll for each stat');
            }

            //Validate the character's starting item
            if (validItem($item)) {
                $this->_f3->set('SESSION.items', array($item));
            } else {
                $this->_f3->set('errors["item"]', 'Please choose an item');
            }

            if (isset($_POST['start']) && empty($this->_f3->get('errors'))) {
                $this->_f3->reroute('game');
            }
        }

        //Adds data to F3 hive
        $this->_f3->set('name', $name);
        $this->_f3->set('races', DataLayer::getRaces());
        $this->_f3->set('userRace', $race);
        $this->_f3->set('stats', $stats);
        $this->_f3->set('items', DataLayer::getItems());
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
        $this->_f3->set('testItem',DataLayer::getTestItems());

        $view = new Template();
        echo $view->render('views/game.html');
    }
}