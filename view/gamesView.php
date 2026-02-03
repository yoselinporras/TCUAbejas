<?php
    include_once 'public/header.php';
    $bannerTitle = "Sección de Juegos Educativos";
    $bannerImage= "./public/img/partesabeja.png";
    include 'view/bannerView.php';
?>

<div class="contenedor">
    <div class="card">
        <div class="lado">
            <h2>Rompecabezas</h2>
            <a href="?controlador=Puzzle&accion=mostrar" class="link-imagen">
                <img src="./public/img/games/rompecabezas.svg" class="img-juego">
            </a>
        </div>
 
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
        <div class="lado">
            <h2>Tutorial</h2>
            <a href="?controlador=Map&accion=mostrar" class="link-imagen">
                <img src="/public/img/partesabeja.png" alt="Partes de abeja" class="img-tutorial">
            </a>
        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Laberinto</h2>
            <a href="?controlador=Maze&accion=mostrarMaze" class="link-imagen">
                <img src="./public/img/games/laberinto.svg" class="img-juego">
            </a>
        </div>

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

        <div class="lado">
            <h2>Tutorial</h2>
            <a href="?controlador=Map&accion=mostrar" class="link-imagen">
                <img src="/public/img/partesabeja.png"
                    alt="Partes de abeja"
                    class="img-tutorial">
            </a>
        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Atrapa Polen</h2>
            <a href="?controlador=PollenCatcher&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/atrapa_polen.svg" class="img-juego">
            </a>
        </div>

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

        <div class="lado">
            <h2>Tutorial</h2>
            <a href="?controlador=Map&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png"
                alt="Partes de abeja"
                class="img-tutorial">
            </a>

        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Memoria</h2>
            <a href="?controlador=MemoryMatch&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/memoria.svg" class="img-juego">
            </a>
        </div>

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

        <div class="lado">
            <h2>Tutorial</h2>
            <a href="?controlador=Map&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png"
                alt="Partes de abeja"
                class="img-tutorial">
            </a>

        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Atrapa Abejas</h2>
            <a href="?controlador=CatchBee&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/atrapa_abejas.svg" class="img-juego">
            </a>
        </div>

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

        <div class="lado">
            <h2>Tutorial</h2>
           <a href="?controlador=Map&accion=mostrar" class="link-imagen">
            <img src="/public/img/partesabeja.png"
                alt="Partes de abeja"
                class="img-tutorial">
            </a>

        </div>
    </div>

</div>

</body>
</html>


<?php
    include_once 'public/footer.php';
?>