
<?php

class PollenCatcherController {

    public $view; 
     
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("pollenCatcherView.php", null);
     } // listar
     
} // fin class