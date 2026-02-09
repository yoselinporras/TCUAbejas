<?php
include_once 'public/header.php';
?>

<!-- Modal colmenas -->
<div class="modal fade" id="modalColmena" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content modal-colmena">

      <div class="modal-header border-0">
        <h3 id="tituloColmena" class="modal-title w-100 text-center"></h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body text-center">

        <!-- Carrusel -->
        <div id="carouselColmena" class="carousel slide carousel-fade">
          <div class="carousel-inner" id="carouselContenido"></div>

          <button class="carousel-control-prev" type="button"
            data-bs-target="#carouselColmena" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>

          <button class="carousel-control-next" type="button"
            data-bs-target="#carouselColmena" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <!-- Botón info -->
        <button id="btnInfoEspecie" class="btn btn-warning">
          Ver información de la especie
        </button>

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

            <li class="species-item filtro-especie" id="todas2026" >
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
              

            </ul>

        
  </div>

                                                
</div>

 

    <?php
    include_once 'view/modalInfo.php';
    include_once 'public/footer.php';
    ?>
<script>

    $(document).ready(function () {
        iniModalSidebar();
        activebuttons();
        initmarkers2026();
        popups();
        
        alertsColmenas2026();
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



</script>



