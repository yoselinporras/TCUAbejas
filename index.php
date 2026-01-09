<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

   setcookie(
    'samesite-test',
    '1',
    [
        'expires' => time() + 3600, // dura 1 hora
        'path' => '/',              // ruta válida
        'samesite' => 'Lax',        // opciones: Lax, Strict, None
        'secure' => false           // en localhost NO usar true
    ]
);
    require 'libs/FrontController.php';
    FrontController::main();
?>