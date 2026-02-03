<?php

class GamesController {

    public $view; 

    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("gamesView.php", null);
     } // listar
     
} // fin clase 