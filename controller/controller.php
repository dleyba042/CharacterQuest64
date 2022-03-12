<?php

/**
 * Class Controller controls user requests, gets data from the model, and returns views.
 */
class Controller
{
    private $_f3;

    /**
     * Parameterized constructor for the controller object.
     * @param $f3
     */
    function __construct($f3)
    {
        $this->_f3 = $f3;
    }

    /**
     * Homepage logic and routing.
     * @return void
     */
    function home()
    {
        //If the form has been posted
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $database = new Database();

            //If sign-up form submitted
            if (isset($_POST["signup"])) {

                $_SESSION["user"] = new User();

                $username = $_POST["create-username"];
                $password = $_POST["create-password"];
                $confirm = $_POST["confirm-password"];

                // No prior user with the same username in the database
                if ($database->getUser($username) == null) {

                    //Validate the user's username
                    if (Validation::validUsername($username)) {
                        $_SESSION["user"]->setUsername($username);
                    } else {
                        $this->_f3->set('errors["create-username"]', 'Please only use letters, numbers, or hyphens (30 character limit)');
                    }

                    //Validate the user's password
                    if (Validation::validPassword($password)) {
                        $_SESSION["user"]->setPassword(password_hash($password, PASSWORD_DEFAULT));
                    } else {
                        $this->_f3->set('errors["create-password"]', 'Please only use letters, numbers, 
                    or a following special character (!, @, #, ?) (must be over 8 characters)');
                    }

                    //Validate the user's password & it's confirmation match
                    if (strcmp($password, $confirm) != 0) {
                        $this->_f3->set('errors["confirm-password"]', 'Please match the password you used above.');
                    }
                } else {
                    $this->_f3->set('errors["user-exists"]', 'User already exists, please choose another username.');
                }

                if (empty($this->_f3->get("errors"))) {
                    $_SESSION["userid"] = $database->addUser($_SESSION['user']);
                    $_SESSION["loggedIn"] = true;
                    $this->_f3->reroute("character");
                }
            }

            //If log-in form submitted
            if (isset($_POST["login"])) {
                $username = $_POST["username"];
                $password = $_POST["password"];
                $user = $database->getUser($username);

                //If user found
                if ($user != null) {
                    if (strcmp($username, $user["username"]) != 0) {
                        $this->_f3->set('errors["username"]', 'Invalid username, please try again.');
                    }

                    if (!password_verify($password, $user["password"])) {
                        $this->_f3->set('errors["password"]', 'Invalid password, please try again.');
                    }
                } else {
                    $this->_f3->set('errors["user"]', 'User does not exist.');
                }

                if (empty($this->_f3->get("errors"))) {

                    $_SESSION["userid"] = $user["user_id"];
                    $_SESSION["loggedIn"] = true;
                    $character = $database->getCharacter($_SESSION["userid"]);

                    if($character == null) {
                        $this->_f3->reroute("character");
                    }
                    else {

                        $_SESSION["character"] = new Character($character["name"], $character["race"]);

                        //Gets inventory from database
                        $inventory = $database->getInventory($character["character_id"]);

                        $items = DataLayer::getItems();

                        foreach($items as $item) {

                            foreach ($inventory as $inv) {

                                if (strtolower(get_class($item)) === $inv["name"]) {
                                    $_SESSION["character"]->setInventory($item);
                                }
                            }
                        }

                        //Gets stats from database
                        $charStats = array($character["dexterity"],$character["intelligence"],$character["luck"],$character["stamina"],$character["strength"]);

                        $stats = DataLayer::getStats();
                        $counter = 0;

                        foreach ($stats as $key => $value) {
                            $stats[$key] = $charStats[$counter];
                            $counter++;
                        }
                        $_SESSION["character"]->setStats($stats);

                        $_SESSION["progress"] = $character["progress"];

                        $this->_f3->reroute("game");
                    }
                }
            }
        }

        //Adds data to F3 hive
        $this->_f3->set('loggedIn', $_SESSION["loggedIn"]);

        $view = new Template();
        echo $view->render('views/landing.html');
    }

    /**
     * Character page logic and routing.
     * @return void
     */
    function character()
    {
        //If not logged in, return to landing page
        if(empty($_SESSION["loggedIn"])) {
            $this->_f3->reroute('/');
        }

        $database = new Database();

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
                    if ($value->__toString() == $item) {
                        $item = $value;
                        $_SESSION['character']->setInventory($item);
                    }
                }

                // $_SESSION['character']->setInventory(new SkeletonKey("Cool KEy"));//FOR TESTING PURPOSES

            } else {
                $this->_f3->set('errors["item"]', 'Please choose an item');
            }

            if (empty($this->_f3->get('errors'))) {

                if (isset($_POST['start'])) {

                    $charID = $database->setCharacter($_SESSION['character'], $_SESSION["userid"]);
                    $_SESSION['char_id'] = $charID;
                    $_SESSION["progress"] = "swordPath[0]";
                    $database->setInventory($charID, $item);

                    $this->_f3->reroute('game');
                }
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
        $this->_f3->set('loggedIn', $_SESSION["loggedIn"]);

        $view = new Template();
        echo $view->render('views/character.html');
    }

    /**
     * Game page logic and routing.
     * @return void
     */
    function game()
    {
        //If not logged in, return to landing page
        if(empty($_SESSION["loggedIn"])) {
            $this->_f3->reroute('/');
        }

        //Adds data to F3 hive
        $this->_f3->set('userStats', DataLayer::getStats());
        $this->_f3->set('progress', $_SESSION["progress"]);
        $this->_f3->set('loggedIn', $_SESSION["loggedIn"]);

        $view = new Template();
        echo $view->render('views/game.html');
    }

    function save()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $prog = $_POST['progress'];

            $dbh = new Database();
            $dbh->setProgress($_SESSION['char_id'],$prog);
            //TODO: Set inventory in database

            $this->_f3->reroute('/');
        }
    }

    /**
     *
     * @return void
     */
    function logout()
    {
        session_start();
        session_destroy();
        $_SESSION = array();
        $this->_f3->reroute('/');
    }
}