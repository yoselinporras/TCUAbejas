<?php

class MazeController {
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrarMaze(){    
         $this->view->show("MazeView.php", null);
     } // listar
     
} // fin clase