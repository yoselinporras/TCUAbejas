<?php

class MemoryMatchController {

    public $view; 
     
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("memoryView.php", null);
     } // listar
     
       public function mostrarlvl2(){    
         $this->view->show("memoryDosView.php", null);
     } // listar
     
} // fin clase
