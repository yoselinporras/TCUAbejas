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
                <img src="./public/img/games/rompecabezas.png" class="img-juego">
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
            <h2>Indicaciones</h2>
            <a href="#" 
       data-bs-toggle="modal" 
       data-bs-target="#modalImagen"
       class="link-imagen"
       data-imagen="/public/img/games/rompecabezas.jpg"
       >
      <img src="/public/img/games/rompecabezas.jpg"
             alt="Partes de abeja"
             class="img-Indicaciones">
    </a>
        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Laberinto</h2>
            <a href="?controlador=Maze&accion=mostrarMaze" class="link-imagen">
                <img src="./public/img/games/laberinto.png" class="img-juego">
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
            <h2>Indicaciones</h2>
            <a href="#" 
       data-bs-toggle="modal" 
       data-bs-target="#modalImagen"
       class="link-imagen"
       data-imagen="/public/img/games/laberinto.jpg"
       >
      <img src="/public/img/games/laberinto.jpg"
             alt="Partes de abeja"
             class="img-Indicaciones">
    </a>
        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Atrapa Polen</h2>
            <a href="?controlador=PollenCatcher&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/atrapa_polen.png" class="img-juego">
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
            <h2>Indicaciones</h2>
           <a href="#" 
       data-bs-toggle="modal" 
       data-bs-target="#modalImagen"
       class="link-imagen"
       data-imagen="/public/img/games/atrapa_polen.jpg"
       >
      <img src="/public/img/games/atrapa_polen.jpg"
             alt="Partes de abeja"
             class="img-Indicaciones">
    </a>
        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Memoria</h2>
            <a href="?controlador=MemoryMatch&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/memoria.png" class="img-juego">
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
            <h2>Indicaciones</h2>
           <a href="#" 
       data-bs-toggle="modal" 
       data-bs-target="#modalImagen"
       class="link-imagen"
       data-imagen="/public/img/games/memoria.jpg"
       >
      <img src="/public/img/games/memoria.jpg"
             alt="Partes de abeja"
             class="img-Indicaciones">
    </a>

        </div>
    </div>

    <div class="card">
        <div class="lado">
            <h2>Atrapa Abejas</h2>
            <a href="?controlador=CatchBee&accion=mostrar" class="link-imagen">
            <img src="./public/img/games/atrapa_abejas.png" class="img-juego">
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
            <h2>Indicaciones</h2>
           <a href="#" 
       data-bs-toggle="modal" 
       data-bs-target="#modalImagen"
       class="link-imagen"
       data-imagen="/public/img/games/atrapa_abejas.jpg"
       >
      <img src="/public/img/games/atrapa_abejas.jpg"
             alt="Partes de abeja"
             class="img-Indicaciones">
    </a>
        </div>
    </div>

</div>
<div class="modal fade" id="modalImagen" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content bg-transparent border-0 position-relative">

      <!-- Botón X flotante -->
     <button type="button"
        class="btn-close  position-absolute top-0 end-0 m-3"
        data-bs-dismiss="modal"
        aria-label="Cerrar"
        style="z-index: 1056;">
</button>

      <!-- Imagen dinámica -->
      <div class="modal-body text-center p-0">
        <img id="imagenModal"
             src=""
             class="img-fluid rounded"
             alt="Indicaciones del juego">
      </div>

    </div>
  </div>
</div>

</body>
</html>


<?php
    include_once 'public/footer.php';
?>
<script>
document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".link-imagen");
    const imagenModal = document.getElementById("imagenModal");
   
    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            const rutaImagen = this.getAttribute("data-imagen");
            console.log(rutaImagen);
            imagenModal.src = rutaImagen;
        });
    });

});
</script>
