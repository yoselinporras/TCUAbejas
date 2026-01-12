<?php

class MapController {

    public $view; 
    
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("mapView.php", null);
     } // listar
     
} // fin clase