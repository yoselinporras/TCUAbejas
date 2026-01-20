<?php
include_once 'public/header.php';
?>

<script>
    $(document).ready(function () {
        showMazegame();
        showMemorygame();
    });
</script>

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
                            <p id="comportamiento" class="col-sm-12">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged.</p>

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


<div class="modal fade" id="mymodalTutorial" tabindex="-1" aria-labelledly="Tutorial" aria-hidden=true>
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

                        <div class="col-sm-12">
                            <h3 class="col-sm-12" style="text-align:center">Tutorial del uso del mapa</h3>
                            <iframe class="tutorial"
                                    src="https://www.youtube.com/embed/VkedkWbX-ow?&autoplay=1&mute=1&loop=1&controls=1&vq=hd720" frameborder="0" allowfullscreen>
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div id="container">
    <div id="map" ></div>

    <div id="sidebar" class="leaflet-sidebar collapsed" style=" z-index: 800;">
        <div class="leaflet-sidebar-tabs">
            <ul role="tablist"> <!-- top aligned tabs -->
                <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
               <li><a href="https://goo.gl/maps/xuRgDLER1Y4gzFFT8"  role="tab" target="_blank"><i class="fas fa-map-marked-alt"></i></a></li>
                <li><a href="#referencias-boton"  role="tab"><i class="fa fa-info"></i></a></li>
            </ul>
        </div>

        <!-- Tab panes -->
        <div class="leaflet-sidebar-content">

            <div class="leaflet-sidebar-pane" id="home">
                <h1 class="leaflet-sidebar-header">
                    Colmenas
                    <div class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></div>
                </h1>


                <div class="bd-example" role="tabpanel" style="margin-top: 10px">
                    <div class="row">
                        <div class="col-sm-12">

                            <div class="list-group" id="listaespecies">



                                <p class="plist">
                                <div class="btn-group">

                                    <button type="button" id="todas" class="btn btn-list btnactive btn-sm activelistbutton">Todas</button>


                                </div>

                                </p>

                                <p class="plist">
                                <div class="btn-group">

                                    <button type="button" id="especie1" class="btn btn-list btn-colmena btn-sm btnactive"><i class="far fa-circle"></i> Abejas solitarias no identificadas</button>
                                    <button type="button" class="btn btn-list  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie1">Ver información</button></li>
                                    </ul>

                                </div>

                                </p>

<!--                                <p class="plist">
                                <div class="btn-group">
                                    <button type="button" id="especie2" class="btn btn-list btn-sm btn-colmena btnactive"><i class="far fa-square"></i> Soncuano ala roja o ala dorada</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie2">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>-->

                                <p class="plist">
                                <div class="btn-group">
                                    <button type="button" id="especie3" class="btn btn-list btn-sm btn-colmena btnactive"><i class="far fa-star"></i> Enreda Pelo</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie3">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>
                                <p class="plist">
                                <div class="btn-group">
                                    <button type="button" id="especie4" class="btn btn-list btn-sm btn-colmena  btnactive"><i class="fas fa-play"></i>  Mariolon, miel de leche...</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie4">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>
                                <p class="plist">
                                <div class="btn-group">
                                    <button type="button" id="especie5" class="btn btn-list btn-sm btn-colmena btnactive"><i class="fas fa-certificate"></i> Mariola</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie5">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>


                                <p class="plist">
                                <div class="btn-group">
                                    <button type="button" id="especie6" class="btn btn-list btn-colmena  btn-sm btnactive"><i class="fas fa-circle"></i> Chicopipe</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie6">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>

                                <p class="plist">
                                <div class="btn-group ">
                                    <button type="button" id="especie7" class="btn btn-list btn-colmena btn-sm btnactive"><i class="fas fa-star"></i> Soncuano</button>
                                    <button type="button" class="btn btn-list dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie7">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>

                                <p class="plist">
                                <div class="btn-group ">
                                    <button type="button" id="especie8" class="btn btn-list btn-colmena btn-sm btnactive"><i class="fas fa-square"></i> Euglossa</button>
                                    <button type="button" class="btn btn-list  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button class="dropdown-item" id="modalespecie8">Ver información</button></li>
                                    </ul>
                                </div>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="leaflet-sidebar-pane" id="referencias-boton">
                <h1 class="leaflet-sidebar-header">
                    Referencias
                    <div class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></div>
                </h1>

                <div class="bd-example" role="tabpanel" style="margin-top: 10px">
                    <div class="row">
                        <div class="col-sm-12">

                            <div class="list-group" id="listareferencias">

                                <ol class="list-group">
                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            1. Anguebes, F; Pat, L; Pat, J; Hernández, P; Ramos, R. (2018). Condición y 
                                            perspectivas de la meliponicultura en comunidades mayas de la reserva de la 
                                            biósfera Los Petenes, Campeche, México. Estudios de Cultura Maya LII: 227-254
                                            (2018). Disponible en: <a href="http://www.scielo.org.mx/pdf/ecm/v52/0185-2574-ecm-52-227.pdf" target="_blank">Aquí</a> 
                                        </h4>

                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            2. Barquero, L; Stamatti, G. (2014). Cría y manejo de abejas sin aguijón. 
                                            Ediciones del Subtrópico. Fundación ProYungas. Disponible 
                                            en: <a href="http://proyungas.org.ar/wp-content/uploads/2014/12/criaymanejodeabejassinaguijon.pdf " target="_blank">Aquí</a>
                                        </h4>

                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            3.	Caldero, L; Pinilla, M; Parra, G. (2017). Abejas Solitarias.   Universidad Nacional de Colombia. Bogotá. Colombia. Recuperado de:
                                            <a href="https://www.researchgate.net/publication/317605207_Abejas_solitarias" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            4.	Parra, G. (2005). Abejas silvestres y polinización. Manejo Integrado de Plagas y Agroecología. Universidad Nacional de Colombia,
                                            Bogotá. Colombia. Pp: 7-20. Recuperado de: <a href="http://orton.catie.ac.cr/repdoc/A1865e/A1865e.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            5.	Figueroa, G; Prendas, P. (2015). Sistema Automático de Clasificación de Abejas sin Aguijón (Apidae: Meliponini) Basado en
                                            el Contorno y Venación de sus alas. Instituto Tecnológico de Costa Rica. Recuperado de: 
                                            <a href="https://repositoriotec.tec.ac.cr/bitstream/handle/2238/6448/informe-doc1-abejas.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            6.	Espinoza, F; Padilla, S; Hernández, P; Zamora, L. (2015). Guía práctica de identificación de abejas nativas sin aguijón 
                                            (Apidae, Meliponini) por medio de sus entradas. Facultad de Ciencias de la Tierra y el Mar Centro de Investigaciones Apícolas 
                                            Tropicales. Universidad Nacional de Costa Rica.
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            7.	Zepeda, R; Arnold, N; Vásquez, M; Aldasoro, M. (2018). Las abejas sin aguijón y su cultivo en Oaxaca, 
                                            México: con catálogo de especies. Comisión Nacional para el Conocimiento y Uso de la Biodiversidad:
                                            Rémy Benoit Marie Vandame. Pp: 117-121. Recuperado de: <a href="https://www.ecosur.mx/abejas/wp-content/uploads/sites/4/2018/06/Abejas-sin-aguijo%CC%81n-de-Oaxaca.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            9.	Figueroa, G; Prendas, J; Ramírez, M; Aguilar, I; Herrera, E; Travieso, G. (2015). Identificación de abejas sin aguijón 
                                            (Apidae: Meliponini) a partir de la clasificación de los descriptores SIFT de una imagen del ala derecha anterior. Tecnología en Marcha. Edición especial. Pp: 51-63. Recuperado de: 
                                            <a href="https://www.scielo.sa.cr/pdf/tem/v29s2/0379-3982-tem-29-s2-51.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            10.	Martínez, D. (2015). Estandarización de protocolo para la división de nidos de la especie Tetragonisca angustula y evaluación de su adaptación a diferentes diseños de colmenas
                                            en La Mesa (Cundinamarca). Universidad de Cundinamarca. Colombia. Recuperado de: <a href="https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1441/Protocolo%20cr%C3%ADa%20In%20vitro%20T.%20angustula.pdf?sequence=1&isAllowed=y" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            11.	Vásquez, M. (2007). Recursos Polínicos Utilizados por la Abeja Nativa Shuruya (scaptotrigona pectoralis) (apidae: meliponini) en un Meliponario de la parte baja de los Cipresales en Pachalum, Quiché, durante la época seca y lluviosa. 
                                            Universidad de San Carlos de Guatemala. Recuperado de: <a href="https://biblioteca-farmacia.usac.edu.gt/tesis/B167.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            12.	Weng, Ju. (2005). Morfología comparativa de las tibias posteriores modificadas de los machos en cuatro géneros de 
                                            abejas Euglosinas (Apinae: Euglossini) y biología de una larva polinívora, Allograpta micrura (Diptera: Syrphidae), 
                                            en flores de Castilleja talamancensis (Schrophulariaceae). Universidad de Costa Rica. San Pedro, San José. Recuperado de: <a href="http://repositorio.sibdi.ucr.ac.cr:8080/jspui/bitstream/123456789/4196/1/25713.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>

                                    <li class="list-group-item">
                                        <h4 class="h4-referencias">
                                            13.	Parra, A. (2009). La arquitectura de nidos de Euglossa (Euglossa) hemichlora (Hymenoptera: Apidae: Euglossini). 
                                            Revista Colombiana de Entomología 35 (2): 283-285. Recuperado de: <a href="http://www.scielo.org.co/pdf/rcen/v35n2/v35n2a26.pdf" target="_blank">Aquí</a>
                                        </h4>
                                    </li>


                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


</div>

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

    var sidebar = L.control.sidebar({
        autopan: false, // whether to maintain the centered map point when opening the sidebar
        closeButton: true, // whether t add a close button to the panes
        container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
        position: 'right' // left or right
    }).addTo(map);

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

</script>



