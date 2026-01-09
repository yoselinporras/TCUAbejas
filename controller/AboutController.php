<?php

class AboutController {
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("aboutView.php", null);
     } // listar
     
} // fin cla