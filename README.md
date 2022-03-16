# Character Quest 64

*A team project that highlights the skills we gained this quarter while working with full stack technology.*

*This project allows users to create a character with randomized stats (based on race) to go through scenarios. 
Scenarios will morph depending on the users reactions.

## Authors

* Colton Marty

* Devin Leyba-Brown

* Lyra Darling

## Features
*(Project Requirements)*
1. Separates all database/business logic using the MVC pattern.
```
* All files are organized in proper folders. 
 i.e. All views in a view folders, models in model folder, etc. 
* Index.html calls functions to a controller class that grabs data from model,
* which then returns to views.
```
2. Routes all URLs and leverages a templating language using the Fat-Free framework.
```
* Index.php routes all urls to proper view and does not allow straight access to files
(using the Fat-free Framework).
```
3. Has a clearly defined database layer using PDO and prepared statements.
```
* PDO is use within the project and placed under the model folder. 
The file is called database.php. 
```
4. Data can be added and viewed.
```
* Data for the character stats/inventory/save are inserted and pulled
from the database using prepared statements.
```
5. Has a history of commits from both team members to a Git repository. Commits are clearly commented.
```
* Commits are made regularly per team member with ample pair-programming time.
All commits detail/note version updates/changes.
```
6. Uses OOP, and utilizes multiple classes, including at least one inheritance relationship.
```
* User, Character, and Items are all classes. 
Specific items (For example, skeleton key) inherit the Items class plus have additional functions.
```
7. Contains full Docblocks for all PHP files and follows PEAR standards.
```
* Files (Functions and classes) are all documented and PHP folows PEAR standards 
(For example, curly braces on newline on appropriate items). 
```
8. Has full validation on the client side through JavaScript and server side through PHP.
```
* Signup, login, and character creation forms are all validated through client and server. 
```
9. All code is clean, clear, and well-commented. DRY (Don't Repeat Yourself) is practiced.
```
* Comments are used to document the function of code lines and repeat blocks are used to print repetitive code.
```
10. Your submission shows adequate effort for a final project in a full-stack web development course.
```
* We were able to incorporate all  requirements and learned a lot this quarter. 
Our website is the result of all the topics we covered in SDEV328 wrapped into our passion for gaming!    
```
11. BONUS:  Incorporates Ajax that access data from a JSON file, PHP script, or API.
    (If you implement Ajax, be sure to include how you did so in your readme file.)

    

## UML Class Diagram

![Class uml diagram](https://i.ibb.co/Sc1ZTzm/Character-Quest64-UML.jpg)