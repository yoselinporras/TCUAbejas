<?php
    include_once 'public/header.php';
    $bannerTitle = "Responsables del proyecto";
    include 'view/bannerView.php';

    $creadores = [
        "creadores"=>[
            [
                "nombre" => "Dennis Barquero",
                "rol" => "Responsable del proyecto",
                "info" => "Responsable del proyecto ED-3514, Establecimiento de meliponarios en la finca experimental interdisciplinaria de modelos agroecológicos en la Sede del Atlántico.",
                "foto" => "./public/img/fotosIntegrantes/Dennis.jpg"
            ],
            [
                "nombre" => "Gerardo Pérez",
                "rol" => "Docente",
                "info" => "Responsable Proyecto TC 627 Gestión Ambiental: Herramientas para el desarrollo de una cultura ambiental.",
                "foto" => "./public/img/fotosIntegrantes/GPerez.jpg"
            ],
            [
                "nombre" => "Jorge Salmeron",
                "rol" => "Docente",
                "info" => "Responsable Proyecto TC 627 Gestión Ambiental: Herramientas para el desarrollo de una cultura ambiental.",
                "foto" => "./public/img/fotosIntegrantes/Jorge.jpeg"
            ],
        ],
        "2022" => [
            [
                "nombre" => "Jordan Castillo",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargado de la programación del sitio web.",
                "foto" => "./public/img/fotosIntegrantes/Jordan.jpg"
            ],
            [
                "nombre" => "Marcela López Barreda",
                "rol" => "Estudiante de Agronomía",
                "info" => "Encargada de redacción y búsqueda de información científica relacionada con el ámbito entomológico.",
                "foto" => "./public/img/fotosIntegrantes/MarcelaLopez.jpg"
            ],
            [
                "nombre" => "Raquel Bastos Chaves",
                "rol" => "Estudiante de Diseño Gráfico",
                "info" => "Encargada del diseño visual del sitio web en cuanto al uso de los colores, jerarquías, el uso de fuentes tipográficas, diagramación y la creación de algunos elementos gráficos.",
                "foto" => "./public/img/fotosIntegrantes/RaquelBastos.jpg"
            ],
            [
                "nombre" => "Raquel Ramírez",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargada en la programación de los minijuegos del laberinto y memoria.",
                "foto" => "./public/img/fotosIntegrantes/RaquelRamirez.jpeg"
            ],
        ],
        "2026" => [ 
            [
                "nombre" => "Yoselin Porras",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargada de la nueva imagen de la página web",
                "foto" => "./public/img/fotosIntegrantes/Yoselin.jpeg"
            ],
            [
                "nombre" => "Silvia Gamboa",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargada de la nueva imagen de la página web",
                "foto" => "./public/img/fotosIntegrantes/Silvia.jpeg"
            ],
            [
                "nombre" => "Angie",
                "rol" => "Estudiante de Diseño Gráfico",
                "info" => "Encargada de la nueva imagen de la página web",
                "foto" => "./public/img/fotosIntegrantes/Yoselin.jpeg"
            ],
            [
                "nombre" => "Keyri",
                "rol" => "Estudiante de Agronomía",
                "info" => "Encargada de la nueva imagen de la página web",
                "foto" => "./public/img/fotosIntegrantes/Silvia.jpeg"
            ],
        ],
    ];
?>

<section class="responsables">

    <div class="bloque-anio">
        <h3 class="anio">Creadores del proyecto</h3>

        <div class="cards-container tres">
            <?php foreach ($creadores["creadores"] as $persona): ?>
                <div class="card-creador">
                    <img src="<?= $persona['foto'] ?>" alt="<?= $persona['nombre'] ?>">
                    <div class="card-body">
                        <h4><?= $persona['nombre'] ?></h4>
                        <span><?= $persona['rol'] ?></span>
                        <p><?= $persona['info'] ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <?php foreach ($creadores as $clave => $grupo): ?>
        <?php if ($clave === "creadores") continue; ?>

        <div class="bloque-anio">
            <h3 class="anio"><?= $clave ?></h3>

            <div class="cards-container cuatro">
                <?php foreach ($grupo as $persona): ?>
                    <div class="card-creador">
                        <img src="<?= $persona['foto'] ?>" alt="<?= $persona['nombre'] ?>">
                        <div class="card-body">
                            <h4><?= $persona['nombre'] ?></h4>
                            <span><?= $persona['rol'] ?></span>
                            <p><?= $persona['info'] ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endforeach; ?>
</section>



<!-- <div class="container">
    <script>
        $(document).ready(function () {
            agregarBotonMapaANavbar();
        }); 
    </script>
    
    <div class="row col-sm-auto">
        
        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/Dennis.jpg" alt="Integrante dennis" style="object-fit: cover">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Dennis Barquero</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Responsable del proyecto</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">
                <p style="text-align: center">
                    Responsable del proyecto ED-3514, Establecimiento de meliponarios en la finca experimental interdisciplinaria de modelos agricológicos en la Sede del Atlántico.
                </p>
            </div> 


        </div>

        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/GPerez.jpg" alt="Integrante gerardo">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Gerardo Pérez</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Responsable del proyecto</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">
                <p style="text-align: center">
                    Responsable del TCU-627, Gestión Ambiental: Herramienta para el desarrollo de una cultura ambiental
                </p>
            </div> 


        </div>

        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/Jordan.jpg" alt="Integrante Jordan">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Jordan Castillo</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Estudiante de Informática Empresarial</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">

                <p style="text-align: center">
                    Encargado de la programación del sitio web.
                </p>

            </div> 

        </div>

        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/MarcelaLopez.jpg" alt="Integrante Marcela">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Marcela López Barreda</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Estudiante de Agronomía</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">
                <p style="text-align: center"> 
                    Encargada de redacción y búsqueda de información científica relacionada con el ámbito entomológico. 
                </p>

            </div> 


        </div>




        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/RaquelBastos.jpg" alt="Integrante Raquel">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Raquel Bastos Chaves</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Estudiante de Diseño Gráfico</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">
                <p style="text-align: center"> Encargada del diseño visual del sitio web en cuanto 
                    al uso de los colores, jerarquías, el uso de fuentes tipográficas,
                    diagramación y la creación de algunos elementos gráficos.
                </p>
            </div> 


        </div>
        
        
        <div class="col-sm-12" style="margin-top: 16px">

            <div class="col-sm-12" style="text-align: center">
                <img class="imginvolucrados" src="./public/img/fotosIntegrantes/RaquelRamirez.jpeg" alt="Integrante Raquel Ramirez">
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h2 class="h2">Raquel Ramírez</h2>
            </div>
            <div class="col-sm-12" style="text-align: center; margin-top: 16px;">
                <h3 class="h3">Estudiante de Informática Empresarial</h3>
            </div>

            <div class="col-sm-6" style="text-align: center; margin: 0 auto;">
                <p style="text-align: center"> Encargada en la programación de los minijuegos del laberinto y memoria.
                </p>
            </div> 


        </div>

 -->    

<!-- </div> -->

<!-- </div> -->
<?php
    include_once 'public/footer.php';
?>