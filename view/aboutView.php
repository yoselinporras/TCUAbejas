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
                "nombre" => "Yoselin Porras Reyes",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargada de actualizar la página web, desarrollar nuevas funcionalidades y mejorar su rendimiento.",
                "foto" => "./public/img/fotosIntegrantes/Yoselin.png"
            ],
            [
                "nombre" => "Silvia Gamboa Madrigal",
                "rol" => "Estudiante de Informática Empresarial",
                "info" => "Encargada del rediseño visual de la página web, así como de su actualización, el desarrollo de nuevas funcionalidades y la mejora de su rendimiento.",
                "foto" => "./public/img/fotosIntegrantes/Silvia.jpeg"
            ],
            [
                "nombre" => "Angie McCarthy Vega", 
                "rol" => "Estudiante de Diseño Gráfico",
                "info" => "Encargada del registro de nuevas fotografías de las colmenas y de la supervisión de la línea gráfica del proyecto.",
                "foto" => "./public/img/fotosIntegrantes/Angie.jpg"
            ],
            [
                "nombre" => "Keiry Navas Miranda",
                "rol" => "Estudiante de Agronomía",
                "info" => "Responsable del trabajo de campo para la ubicación, monitoreo e identificación de las colmenas en la UCR Sede del Atlántico.",
                "foto" => "./public/img/fotosIntegrantes/Keiry.jpeg"
            ]
        ],
    ];
?>

<section class="responsables">

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
</section>

<?php
    include_once 'public/footer.php';
?>