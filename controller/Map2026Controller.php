<?php

class Map2026Controller {

    public $view; 
    
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("map2026View.php", null);
     } // listar
     
} // fin clase