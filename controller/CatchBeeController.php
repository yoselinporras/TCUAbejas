
<?php

class CatchBeeController {

    public $view; 
    
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("catchBeeView.php", null);
     } // listar
     
} // fin clase