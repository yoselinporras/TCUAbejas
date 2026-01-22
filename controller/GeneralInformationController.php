<?php

class GeneralInformationController {

    public $view; 

    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("generalInformationView.php", null);
     } // listar
     
} // fin clase