<?php

class PostCommentsController {

    public $view; 
    
    public function __construct() {
        $this->view = new View();
    } // constructor
    
     public function mostrar(){    
         $this->view->show("postCommentsView.php", null);
     } // listar
     
} // fin class