<?php
include_once 'public/header.php';
?>



<div class="modal fade" id="mymodal" tabindex="-1" aria-labelledly="Informacion" aria-hidden=true>
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-body">

                <div class="container">

                    <div class="row" style="margin-bottom:1%; ">

                        <div class="col-sm-10"></div>

                        <div class="col-sm-2" style="text-align: end;">
                            <button type="button" id="close-tutorial"  data-bs-dismiss="modal" aria-label="Close" > <i class="fas fa-times-circle"></i></button>
                        </div>

                    </div>


                    <div class="row">

                        <div class="col-sm-6">
                            <h2 id="nombrecientifico" class="col-sm-12"></h2>
                            <h3 id="nombrecomun" class="col-sm-12"> Nombre común</h3>
                            <br class="col-sm-12">
                            <br class="col-sm-12">
                            <h3  class="col-sm-12"> Morfología</h3>

                            <p id="morfologia" class="col-sm-12">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged.</p>

                            <h3  class="col-sm-12"> Comportamiento</h3>
                            <p id="comportamiento" class="col-sm-12">Aqui va el texto dinamico</p>

                            <h3  class="col-sm-12"> Característica de la colmena</h3>
                            <p id="caracteristica" class="col-sm-12">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged.</p>
                        </div>

                        <div class="col-sm-6">
                            <div class="col-sm-12">
                                <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">

                                    <div id="contenidocarousel" class="carousel-inner">

                                    </div>


                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span  aria-hidden="true"><i class="fas fa-arrow-left fa-2x"></i></span>
                                        <span class="visually-hidden">Anterior</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span  aria-hidden="true"><i class="fas fa-arrow-right fa-2x" style="color: white"></i></span>
                                        <span class="visually-hidden">Siguiente</span>
                                    </button>

                                </div>
                            </div>

                            <div class="col-sm-12">
                                <h3  class="col-sm-12" style="padding-top: 16px; text-align: center;"> Ubicación geográfica:</h3>
                                <img id="img-ubicacion" alt="Ubicación geografica" style="width: 100%;">
                            </div>

                        </div>


                        <div class="col-sm-12">
                            <h3 id="referencias"  class="col-sm-12" style="padding-top: 16px; text-align: center;"> Referencias: </h3>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    </div>
</div>



<div class="modal fade" id="mymodalColmena" tabindex="-1" aria-labelledly="Informacion" aria-hidden=true>
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-body">

                <div class="container">

                    <div class="row" style="margin-bottom:1%; ">
                        <div class="col-sm-10"></div>

                        <div class="col-sm-2" style="text-align: end;">
                            <button type="button" id="close-tutorial"  data-bs-dismiss="modal" aria-label="Close" > <i class="fas fa-times-circle"></i></button>
                        </div>

                    </div>


                    <div class="row" style="display: flex;
                         align-items: center;
                         justify-content: center;
                         align-content: center;">
                        <div class="col-sm-8">
                            <div class="col-sm-12">
                                <h3  class="col-sm-12" id="colmenatitulo" style="text-align:center"> Colmena</h3>


                                <div id="carouselColmena" class="carousel slide carousel-fade" data-bs-ride="carousel">

                                    <div id="contenidocarouselColmena" class="carousel-inner" style="height: 100%;">
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselColmena" data-bs-slide="prev">
                                        <span  aria-hidden="true"><i class="fas fa-arrow-left fa-2x"></i></span>
                                        <span class="visually-hidden">Anterior</span>
                                    </button>

                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselColmena" data-bs-slide="next">
                                        <span  aria-hidden="true"><i class="fas fa-arrow-right fa-2x" style="color: white"></i></span>
                                        <span class="visually-hidden">Siguiente</span>
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





<div id="container">
    <div id="map" ></div>
    <div id="listaespecies"></div>
    <div id="species-sidebar" class="species-sidebar collapsed">

            <!-- Flecha expandir / contraer -->
            <div class="sidebar-toggle">
            <i class="fas fa-angle-right"></i>
            </div>

            <li class="species-item">
                <a href="?controlador=Map2022&accion=mostrar#home" class="species-link">
                <i class="far fa-clock"></i>
                <span class="species-name">Ir al año 2022</span>
                </a>
            </li>
            
            <!-- Lista de especies -->
            <ul class="species-list">

            <li class="species-item filtro-especie" id="todas" >
                    <i class="far fa-times-circle"></i>
                    <span class="species-name">Todas</span>
            </li>

                <li class="species-item filtro-especie" id="especie1" >
                    <i class="far fa-circle"></i>
                    <span class="species-name">Abejas no identificadas</span>
                </li>

                <li class="species-item" id="especie3">
                    <i class="far fa-star"></i>
                    <span class="species-name">Enreda Pelo</span>
                </li>

                <li class="species-item" id="especie4"  >
                    <i class="fas fa-play"></i>
                    <span class="species-name">Mariolon, miel de leche...</span>
                </li>

                <li class="species-item" id="especie5">
                    <i class="fas fa-certificate"></i>
                    <span class="species-name">Mariola</span>
                </li>

                <li class="species-item" id="especie6">
                    <i class="fas fa-circle"></i>
                    <span class="species-name">Chicopipe</span>
                </li>

                <li class="species-item" id="especie7">
                    <i class="fas fa-star"></i>
                    <span class="species-name">Soncuano</span>
                </li>

                <li class="species-item" id="especie8">
                    <i class="fas fa-square"></i>
                    <span class="species-name">Euglossa</span>
                </li>
                    <!-- BOTÓN REFERENCIAS -->
                <li class="species-item referencias-toggle">
                    <i class="far fa-bookmark"></i>
                    <span class="species-name">Referencias</span>
                </li>

            </ul>

            <!-- PANEL DE REFERENCIAS -->
            <div class="referencias-panel">
                <h4>Referencias</h4>

                <ol class="referencias-list">
                    <li>
                    Anguebes, F. et al. (2018).
                    <a href="http://www.scielo.org.mx/pdf/ecm/v52/0185-2574-ecm-52-227.pdf" target="_blank">Ver</a>
                    </li>

                    <li>
                    Barquero, L; Stamatti, G. (2014).
                    <a href="http://proyungas.org.ar/wp-content/uploads/2014/12/criaymanejodeabejassinaguijon.pdf" target="_blank">Ver</a>
                    </li>
                </ol>
            </div>
  </div>

                                                
</div>
    <?php

    include_once 'public/footer.php';
    ?>
<script>

    $(document).ready(function () {
        activebuttons();
        initmarkers();
        popups();
        iniModalSidebar();
        alertsColmenas();
        $('#mymodalTutorial').modal('toggle');
        responsiveModals();
    });

    var map = L.map('map', {
        minZoom: 1,
        attributionControl: false,
        maxZoom: 5,
        center: [-140, 494],
        zoom: 0.50,
        zoomControl: false,
        crs: L.CRS.Simple
    });

    // dimensiones de la imagen
    var w = 1920,
            h = 1080,
            url = 'public/img/Mapa.svg';

    // calcula los bordes de la imagen y el espacio de coordenadas

   
    var southWest = map.unproject([0, h]);
    var northEast = map.unproject([w, 0]);
    var bounds = new L.LatLngBounds(southWest, northEast);

    //Se utiliza el metodo imageOverlay para mostrar una sola imagen.
    L.imageOverlay(url, bounds).addTo(map);

    map.doubleClickZoom.disable();

    // El mapa sea exactamente igual de grande que la imagen
    map.setMaxBounds(bounds);
    map.on('drag', function () {
        map.panInsideBounds(bounds, {animate: false});
    });

    L.control.zoom({position: "topleft"}).addTo(map);

    map.on('click', function (e) {
        console.log(e.latlng.lat + "," + e.latlng.lng);
    });

    // var sidebar = L.control.sidebar({
    //     autopan: false, // whether to maintain the centered map point when opening the sidebar
    //     closeButton: true, // whether t add a close button to the panes
    //     container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    //     position: 'right' // left or right
    // }).addTo(map);

    L.control.attribution({
        position: 'bottomleft'
    }).addTo(map);


    function responsiveModals() {
        var environment = $('.tutorial');
        var environmentC = $('#carouselColmena');
        let margin=((window.innerHeight * 0.20) + 44);
        environment.css('height', (window.innerHeight - margin) + 'px');
        environmentC.css('height', (window.innerHeight - margin) + 'px');
        $(window).resize(function () {
            let margin=((window.innerHeight * 0.20) + 44);
            environment.css('height', (window.innerHeight - margin) + 'px');
            environmentC.css('height', (window.innerHeight - margin) + 'px'); 
        });

    }

    showMarkers(map);
   const speciesSidebar = document.getElementById('species-sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');

toggleBtn.addEventListener('click', () => {
  speciesSidebar.classList.toggle('expanded');
  speciesSidebar.classList.toggle('collapsed');
});

document.querySelector('.referencias-toggle')
  .addEventListener('click', () => {
    document.querySelector('.referencias-panel')
      .classList.toggle('show');
  });


</script>



