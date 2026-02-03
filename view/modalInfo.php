<div class="modal fade" id="mymodals" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content modal-colmena">

      <div class="modal-header border-0">
        <h3 id="nombrecomun" class="modal-title w-100 text-center"></h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">

        <div class="row">

          <!-- TEXTO -->
          <div class="col-sm-6">
            <h2 id="nombrecientifico"></h2>

            <h3>Morfología</h3>
            <p id="morfologia"></p>

            <h3>Comportamiento</h3>
            <p id="comportamiento"></p>

            <h3>Característica de la colmena</h3>
            <p id="caracteristica"></p>
          </div>

          <!-- IMÁGENES -->
          <div class="col-sm-6">

            <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div id="contenidocarousel" class="carousel-inner"></div>

              <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselExample" data-bs-slide="prev">
                <span><i class="fas fa-arrow-left fa-2x"></i></span>
              </button>

              <button class="carousel-control-next" type="button"
                data-bs-target="#carouselExample" data-bs-slide="next">
                <span><i class="fas fa-arrow-right fa-2x"></i></span>
              </button>
            </div>

            <h3 class="text-center pt-3">Ubicación geográfica</h3>
            <img id="img-ubicacion" style="width:100%;" alt="Ubicación geográfica">
          </div>

          <div class="col-sm-12 pt-3">
            <h3>Referencias</h3>
            <p id="referencias"></p>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
