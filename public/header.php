<!DOCTYPE html>
<html lang="es">



    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Abejas Meliponas Sede del Atlántico</title>

        <meta name="viewport"
              content="width=device-width initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

        <meta name=”description” content="Sitio web de la Universidad de Costa Rica Sede del Atlántico que contiene informacion sobre las Abejas Meliponas y su ubicacion en la sede">

        <link rel="icon" 
              type="image/png" 
              href="public/img/partesabeja.png">

        <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet-extra-markers@1.0.6/src/assets/js/leaflet.extra-markers.js"></script>

        <script type="text/javascript" src="public/js/jquery.js"></script>   
        <script type="text/javascript" src="public/js/popper.js"></script>
        <script type="text/javascript" src="public/js/popper.min.js"></script>
        <script type="text/javascript" src="public/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="public/js/bootstrap.js"></script>
        <script type="text/javascript" src="public/js/funciones.js"></script>
        <script type="text/javascript" src="public/js/fontawasone-5.0.0.js"></script>
        <script type="text/javascript" src="public/js/jquery-ui.js"></script>
        <script type="text/javascript" src="public/js/leaflet-sidebar.js"></script>
        <script type="text/javascript" src="public/js/sweetalert2.min.js"></script>
        <script type="text/javascript" src="public/js/jquery.ui.touch-punch.min.js"></script>
     


        <link rel="stylesheet" type="text/css" href="public/css/bootstrap.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet-extra-markers@1.0.6/src/assets/css/leaflet.extra-markers.css" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
        <link rel="stylesheet" href="public/css/leaflet-sidebar.css" type="text/css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="public/css/style-puzzle.css" type="text/css">
        <link rel="stylesheet" href="public/css/style-pollen-catcher.css" type="text/css">
        <link rel="stylesheet" href="public/css/style-bee-catcher.css" type="text/css">
        <link rel="stylesheet" href="public/css/style-post-comments.css" type="text/css">
        <link rel="stylesheet" href="public/css/style-header.css" type="text/css">
        <link rel="stylesheet" href="public/css/jquery-ui.css" type="text/css">
        <link rel="stylesheet" href="public/css/sweetalert2.min.css">
        <link rel="stylesheet" href="public/css/style.css" type="text/css">
        <link rel="stylesheet" href="public/css/style-footer.css" type="text/css">
        <link rel="stylesheet" href="/public/css/style.css">
        <link rel="stylesheet" href="/public/css/inicio.css">
        <link rel="stylesheet" href="/public/css/animationBee.css">  



    </head>

    <body>




        <header>
            <div class="container-header" id="encabezado"> 
                <a href="https://www.ucr.ac.cr/">
                    <img class="img-encabezado" src="./public/img/header/firmaU.png" alt="Logo Universidad de Costa Rica">
                </a>
                <a href="http://www.sa.ucr.ac.cr/web/">
                    <img class="img-encabezado" src="./public/img/header/logoSede.png" alt="Logo Sede del Atlántico">
                </a>
                <a>
                    <img class="img-encabezado" src="./public/img/header/logoTC-627.png" alt="Logo TCU-627 Gestión Ambiental">
                </a>
                <a>
                    <img class="img-encabezado" src="./public/img/header/logoED.png" alt="Partes de abeja">
                </a>
            </div>

            <div class="col-sm-12">
                <nav id="navbar_top" class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>                           
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <div class="container">
                                <div class="row">
                                    <ul class="navbar-nav w-100 d-flex justify-content-around align-items-center">

                                            <li class="nav-item">
                                                <a class="fa fa-home nav-link" href="?controlador=Index&accion=mostrar">
                                                    Inicio
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="fa fa-gamepad nav-link" href="?controlador=Games&accion=mostrar">
                                                    Juegos
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="fa fa-info-circle nav-link" href="?controlador=GeneralInformation&accion=mostrar">
                                                    Información
                                                </a>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="fa fa-gamepad nav-link dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown">
                                                    Juegos
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="?controlador=Puzzle&accion=mostrar">Rompecabezas</a></li>
                                                    <li><a class="dropdown-item" href="?controlador=PollenCatcher&accion=mostrar">Atrapa polen</a></li>
                                                    <li><a class="dropdown-item" href="?controlador=CatchBee&accion=mostrar">Atrapa abejas</a></li>
                                                </ul>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="fa fa-info-circle nav-link dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown">
                                                    Acerca del proyecto
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="?controlador=About&accion=mostrar">Creadores</a></li>
                                                    <li><a class="dropdown-item" href="?controlador=PostComments&accion=mostrar">Enviar comentarios</a></li>
                                                </ul>
                                            </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

