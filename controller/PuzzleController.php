
<?php

class PuzzleController {

    public $view; 
    
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("puzzleView.php", null);
     } // listar
     
} // fin clase