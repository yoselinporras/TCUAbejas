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

                      <svg class="bee-path" viewBox="10 0 300 110" preserveAspectRatio="xMidYMid meet">

                            <defs>
                                <mask id="beeMask">
                                    <rect x="0" y="0" width="0" height="100%" fill="white">
                                        <animate
                                            attributeName="width"
                                            from="0"
                                            to="300"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                </mask>
                            </defs>

                            <path
                                id="beeRoute"
                                class="draw-path"
                                d="M0,60
                                    C40,10 90,140 150,60
                                    C200,20 250,120 310,60"
                                mask="url(#beeMask)"
                            />

                            <image
                                href="/public/img/abj.png"
                                width="40"
                                height="40"
                                y="-16"
                            >
                                <animateMotion
                                    dur="5s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                >
                                    <mpath href="#beeRoute" />
                                </animateMotion>
                            </image>

                    </svg>

                    </div>

              
             <a href="?controlador=GeneralInformation&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja" class="link-imagen">
             </a>
        </div>

        <div class= "mapa">
             <h1>Mapa de la Sede UCR  con la ubicación de cada colmena</h1>
               <div class="animationBee">

                      <svg class="bee-path" viewBox="0 0 300 110" preserveAspectRatio="xMidYMid meet">

                            <defs>
                                <mask id="beeMask">
                                    <rect x="0" y="0" width="0" height="100%" fill="white">
                                        <animate
                                            attributeName="width"
                                            from="0"
                                            to="300"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                </mask>
                            </defs>

                            <path
                                id="beeRoute"
                                class="draw-path"
                                d="M0,60
                                    C40,10 90,140 150,60
                                    C200,20 250,120 310,60"
                                mask="url(#beeMask)"
                            />

                            <image
                                href="/public/img/abj.png"
                                width="40"
                                height="40"
                                y="-16"
                            >
                                <animateMotion
                                    dur="5s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                >
                                    <mpath href="#beeRoute" />
                                </animateMotion>
                            </image>

                    </svg>

                    </div>

            <a href="?controlador=Map2026&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja" class="link-imagen">
             </a>

        </div>
        <div class= "juegos">
             <h1>Juegos</h1>
             <div class="animationBee">

                      <svg class="bee-path" viewBox="0 0 300 110" preserveAspectRatio="xMidYMid meet">

                            <defs>
                                <mask id="beeMask">
                                    <rect x="0" y="0" width="0" height="100%" fill="white">
                                        <animate
                                            attributeName="width"
                                            from="0"
                                            to="300"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                </mask>
                            </defs>

                            <path
                                id="beeRoute"
                                class="draw-path"
                                d="M0,60
                                    C40,10 90,140 150,60
                                    C200,20 250,120 310,60"
                                mask="url(#beeMask)"
                            />

                            <image
                                href="/public/img/abj.png"
                                width="40"
                                height="40"
                                y="-16"
                            >
                                <animateMotion
                                    dur="5s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                >
                                    <mpath href="#beeRoute" />
                                </animateMotion>
                            </image>

                    </svg>

                    </div>

            <a href="?controlador=Games&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png" alt="Partes de abeja" class="link-imagen">
             </a>

        </div>
        
    </main>
<?php

include_once 'public/footer.php';
?>