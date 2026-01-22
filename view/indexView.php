<?php
include_once 'public/header.php';
?>

    <main class= "container-inicio">

      <div class="bienvenida">
           <div class="texto-bienvenida">
            <h1>El ED-3514 y el TC-627 les dan la bienvenida </h1>
            <h2>Este sitio web contiene información sobre las abejas meliponas que hay en la Sede del Atlántico </h2>
            <h3>¡Aprende sobre la importancia de las abejas de forma divertida!</h3>
           </div>
           
        </div>
        <div class= "infoGeneral">
             <h1>Información general sobre las abejas nativas sin aguijón</h1>
                    <div class="animationBee">

                        <svg class="bee-path" viewBox="0 0 300 100" preserveAspectRatio="none">

                            <defs>
                                <mask id="beeMask">
                                    <!-- máscara animada -->
                                    <rect class="mask-rect" x="0" y="0" width="0" height="100%" fill="white" />
                                </mask>
                            </defs>

                            <!-- Path visible -->
                            <path
                                class="draw-path"
                                d="M0,50 C100,0 200,100 300,50"
                                mask="url(#beeMask)"
                            />

                        </svg>

                        <img src="/public/img/abj.png" class="beee">

                    </div>

              
             <a href="?controlador=GeneralInformation&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja">
             </a>
        </div>

        <div class= "mapa">
             <h1>Mapa de la Sede UCR  con la ubicación de cada colmena</h1>
                <div class="animationBee">

                        <svg class="bee-path" viewBox="0 0 300 100" preserveAspectRatio="none">

                            <defs>
                                <mask id="beeMask">
                                    <!-- máscara animada -->
                                    <rect class="mask-rect" x="0" y="0" width="0" height="100%" fill="white" />
                                </mask>
                            </defs>

                            <!-- Path visible -->
                            <path
                                class="draw-path"
                                d="M0,50 C100,0 200,100 300,50"
                                mask="url(#beeMask)"
                            />

                        </svg>

                        <img src="/public/img/abj.png" class="beee">

                    </div>

            <a href="?controlador=Map&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja">
             </a>

        </div>
        <div class= "juegos">
             <h1>Juegos</h1>
             <div class="animationBee">

                        <svg class="bee-path" viewBox="0 0 300 100" preserveAspectRatio="none">

                            <defs>
                                <mask id="beeMask">
                                    <!-- máscara animada -->
                                    <rect class="mask-rect" x="0" y="0" width="0" height="100%" fill="white" />
                                </mask>
                            </defs>

                            <!-- Path visible -->
                            <path
                                class="draw-path"
                                d="M0,50 C100,0 200,100 300,50"
                                mask="url(#beeMask)"
                            />

                        </svg>

                        <img src="/public/img/abj.png" class="beee">

                    </div>

            <a href="?controlador=Games&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja">
             </a>

        </div>
        
    </main>
<?php

include_once 'public/footer.php';
?>