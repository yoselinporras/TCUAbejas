<?php
class PuzzleController {


    public $view; 
    
    public function __construct() {
        $this->view = new View();
    }

    public function mostrar(){

        $nivel = isset($_GET['nivel']) ? intval($_GET['nivel']) : 1;

        $data = array();
        $data['nivel'] = $nivel;
        $data['ruta'] = "public/img/puzzles/puzzle" . $nivel;
        $data['totalPiezas'] = ($nivel == 3) ? 16 : 9;

        $this->view->show("puzzleView.php", $data);
    }

}