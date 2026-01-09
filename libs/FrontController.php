<?php

class FrontController {

    static function main() {
        // Cargar dependencias
        require 'libs/View.php';
        require 'libs/configuration.php';

        // Determinar controlador y acción
        $controllerName = !empty($_GET['controlador']) 
            ? $_GET['controlador'] . 'Controller' 
            : 'IndexController';

        $actionName = !empty($_GET['accion']) 
            ? $_GET['accion'] 
            : 'mostrar';

        // Construir ruta del controlador
        $rutaControlador = $config->get('controllerFolder') . $controllerName . '.php';

        if (!is_file($rutaControlador)) {
            die('Controlador no encontrado - 404 not found');
        }

        require $rutaControlador;

        // Instanciar el controlador
        $controller = new $controllerName();

        // Verificar si la acción existe en la instancia
        if (!method_exists($controller, $actionName)) {
            trigger_error($controllerName . '->' . $actionName . ' no existe', E_USER_NOTICE);
            return false;
        }

        // Ejecutar la acción
        $controller->$actionName();
    }
}

?>
