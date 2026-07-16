<?php
include_once 'public/header.php';
?>

<!-- Modal colmenas -->

<div class="modal fade colmena-modal-unique" id="modalColmena" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content pb-2">

      <div class="modal-header border-0">
        <h3 id="tituloColmena" class="modal-title w-100 text-center"></h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">

        <div id="carouselColmena" class="carousel slide carousel-fade colmena-carousel">
          
          <div class="carousel-inner colmena-carousel-inner" id="carouselContenido"></div>

          <div class="colmena-zoom-controls">
            <button type="button" class="btn btn-light btn-sm" onclick="controlarZoomViaBoton(0.25)" title="Acercar">
              <i class="fas fa-search-plus"></i>
            </button>
            <button type="button" class="btn btn-light btn-sm" onclick="controlarZoomViaBoton(-0.25)" title="Alejar">
              <i class="fas fa-search-minus"></i>
            </button>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselColmena" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselColmena" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>

        </div>

        <button id="btnInfoEspecie" class="btn btn-warning mt-4">
          Ver información de la especie
        </button>

      </div>
    </div>
  </div>
</div>


<div id="container">
  <div id="map"></div>
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

      <li class="species-item filtro-especie" id="todas2026">
        <i class="far fa-times-circle"></i>
        <span class="species-name">Todas</span>
      </li>

      <li class="species-item filtro-especie" id="especie2">
        <i class="far fa-circle"></i>
        <span class="species-name">Gicote Gato</span>
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

    </ul>

  </div>
</div>

<?php
include_once 'view/modalInfo.php';
include_once 'public/footer.php';
?>

<script>
  // Inicialización del Mapa
  var map = L.map('map', {
      minZoom: 1,
      attributionControl: false,
      maxZoom: 5,
      center: [-140, 494],
      zoom: 0.50,
      zoomControl: false,
      crs: L.CRS.Simple
  });

  // Dimensiones de la imagen de fondo
  var w = 1920,
      h = 1080,
      url = 'public/img/Mapa.svg';

  var southWest = map.unproject([0, h]);
  var northEast = map.unproject([w, 0]);
  var bounds = new L.LatLngBounds(southWest, northEast);

  // Cargar imagen en el mapa
  L.imageOverlay(url, bounds).addTo(map);

  map.doubleClickZoom.disable();

  // Limitar arrastre al tamaño del mapa
  map.setMaxBounds(bounds);
  map.on('drag', function () {
      map.panInsideBounds(bounds, {animate: false});
  });

  L.control.zoom({position: "topleft"}).addTo(map);

  // Consola para debug de coordenadas
  map.on('click', function (e) {
      console.log(e.latlng.lat + "," + e.latlng.lng);
  });

  L.control.attribution({
      position: 'bottomleft'
  }).addTo(map);

  // Manejo de modals responsive
  // function responsiveModals() {
  //     var environment = $('.tutorial');
  //     var environmentC = $('#carouselColmena');
  //     let margin=((window.innerHeight * 0.20) + 44);
  //     environment.css('height', (window.innerHeight - margin) + 'px');
  //     environmentC.css('height', (window.innerHeight - margin) + 'px');
  //     $(window).resize(function () {
  //         let margin=((window.innerHeight * 0.20) + 44);
  //         environment.css('height', (window.innerHeight - margin) + 'px');
  //         environmentC.css('height', (window.innerHeight - margin) + 'px'); 
  //     });
  // }
 
  // Ejecución inicial al cargar el documento
  $(document).ready(function () {
      // 1. Cargamos marcadores de 2026 por defecto (inicializa eventos en caliente)
      initmarkers2026();
      
      // 2. Activamos listeners de clics en barra lateral
      showMarkers(map);
      
      // 3. Modales y resize
      $('#mymodalTutorial').modal('toggle');
      // responsiveModals();
  });

  // Sidebar expandir / contraer
  const speciesSidebar = document.getElementById('species-sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');

  toggleBtn.addEventListener('click', () => {
    speciesSidebar.classList.toggle('expanded');
    speciesSidebar.classList.toggle('collapsed');
  });
</script>