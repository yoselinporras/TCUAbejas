var especie1 = [];
var especie2 = [];
var especie3 = [];
var especie4 = [];
var especie5 = [];
var especie6 = [];
var especie7 = [];
var especie8 = [];

function agregarBotonMapaANavbar() {
  $("#pagina-inicio").after(
    '<div class="col-sm-3">' +
      '<li class="nav-item">' +
      '<a class="nav-link"  href="?controlador=Map&accion=mostrar">Mapa</a>' +
      "</li>" +
      "</div>",
  );
 
  $("#pagina-inicio").removeClass("col-sm-4");
  $("#pagina-inicio").addClass("col-sm-3");
  $("#juegos").removeClass("col-sm-4");
  $("#juegos").addClass("col-sm-3");
  $("#sobre-nosotros").removeClass("col-sm-4");
  $("#sobre-nosotros").addClass("col-sm-3");

  showMazegame();
  showMemorygame();
}

function showMazegame() {
  if (window.innerWidth >= 992) {
    if (!$("#maze").length) {
      $("#puzzle").after(
        '<li><a class="dropdown-item" id="maze" href="?controlador=Maze&accion=mostrarMaze">Laberinto</a></li>',
      );
    }
  } else if (window.innerWidth < 992) {
    $("#maze").remove();
  }

  $(window).resize(function () {
    if (window.innerWidth >= 880) {
      if (!$("#maze").length) {
        $("#puzzle").after(
          '<li><a class="dropdown-item" id="maze" href="?controlador=Maze&accion=mostrarMaze">Laberinto</a></li>',
        );
      }
    } else if (window.innerWidth < 880) {
      $("#maze").remove();
    }
  });
}

function showMemorygame() {
  if (window.innerWidth >= 992) {
    if (!$("#memory").length) {
      $("#pollen").after(
        '<li><a class="dropdown-item" id="memory" href="?controlador=MemoryMatch&accion=mostrar">Memoria</a></li>',
      );
    }
  } else if (window.innerWidth < 992) {
    $("#memory").remove();
  }

  $(window).resize(function () {
    if (window.innerWidth >= 880) {
      if (!$("#memory").length) {
        $("#pollen").after(
          '<li><a class="dropdown-item" id="memory" href="?controlador=MemoryMatch&accion=mostrar">Memoria</a></li>',
        );
      }
    } else if (window.innerWidth < 880) {
      $("#memory").remove();
    }
  });
}

function activebuttons() {
  var btnContainer = document.getElementById("listaespecies");

  var btns = btnContainer.getElementsByClassName("btnactive");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("activelistbutton");
      console.log(current[0].className);
      current[0].className = current[0].className.replace(
        " activelistbutton",
        "",
      );
      this.className += " activelistbutton";
    });
  }
}

function iniModalSidebar() {
  $("#modalespecie1").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("Abejas solitarias no identificadas");
    $("#nombrecomun").text("");
    $("#morfologia").text(
      "Cuentan con dos sub antenas cerca de las antenas principales. Algunas abejas solitarias tienen estructuras en sus cuerpos muy avanzadas para transportar el polen.",
    );
    $("#comportamiento").text(
      "Son solitarias, en el sentido de que cada hembra es fértil y por lo general habitan en un nido que construyen por sí mismas. Cuando se reproducen hacen un nido con varias celdas y cada una de estas celdas acoge un huevo. Las abejas madre tapan la entrada del nido para evitar que entren depredadores y otros enemigos naturales. No hay abejas obreras para estas especies. Las abejas solitarias, con o sin aguijón, son muy poco probable que piquen. No suelen producir ni miel ni cera de abejas. Se alimentan del néctar de flores específicas.",
    );
    $("#caracteristica").text(
      "Las abejas solitarias crean nidos en huecos de juncos o ramas, aberturas en madera y comúnmente construyen sus nidos en túneles en el suelo. La hembra normalmente crea pequeñas celdas con un huevo y acondiciona el espacio para la larva resultante, luego lo sella. Aunque las hembras solitarias hacen nidos individuales, algunas especies prefieren hacer nidos cerca de otros de la misma especie, dando la apariencia para el observador casual que es una abeja social. Es importante aclarar que el material del que están fabricadas todas las colmenas depende de los recursos que se tengan en su alrededor, pueden ser materiales orgánicos como madera masticada, arcillas, barro, ramas, pétalos de flores y lamentablemente en los últimos años inclusive se ha visto que algunas abejas han construido su colmena con plástico.",
    );
    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"> </div>',
    );
    $("#contenidocarousel").append(
      '<div id="itemcarousel2" class="carousel-item"> <img id="img2" class="d-block w-100" alt="Colmena 2"> </div>',
    );

    $("#img1").attr("src", "public/img/abejassolitarias/abejassolitarias1.jpg");
    $("#img2").attr("src", "public/img/abejassolitarias/abejassolitarias2.jpg");
    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    );

    $("#referencias").text("Referencias: 3 y 4");
  });

  //    $("#modalespecie2").on('click', function () {
  //        $('#nombrecientifico').html("");
  //        $('#nombrecientifico').append('<i>Scaptotrigona luteipennis</i>');
  //        $('#nombrecomun').text("Soncuano ala roja o ala dorada");
  //        $('#morfologia').text("La longitud del cuerpo de un adulto puede llegar a ser de 5-7 mm,\n\
  // presenta un color naranja-rojizo en sus alas muy característico de esta especie mientras que el \n\
  //cuerpo es de color negro con poca vellosidad.");
  //        $('#comportamiento').text("A pesar de que no tienen aguijón se defienden eficientemente, \n\
  //algunas huyen pero otras son agresivas atacando por medio de mordiscos y depósito de sustancias \n\
  //resinosas sobre la piel del individuo. Las poblaciones más grandes son más agresivas. Tienen abejas\n\
  // guardianas en la colmena. Guardan sus alimentos en potes de cerumen ovoides, redondos o cilíndricos, unos para polen y otros para miel. ");
  //        $('#caracteristica').text("Estas abejas construyen nidos cubiertos prácticamente en cualquier\n\
  // cavidad (árboles, rocas, paredes). Presenta una estructura cilíndrica y su diámetro aproximado es de \n\
  //1.2 cm y el largo promedio de 5 cm. Estos nidos pueden ubicarse a una altura del suelo desde los 50 \n\
  //centímetros hasta los 5 metros y tienen numerosos orificios para la circulación del aire y de las \n\
  //propias abejas. El tamaño de las colonias puede ser de 2000 a 5000 abejas.");
  //
  //        for (var i = 1; i < 29; i++) {
  //            if ($("#itemcarousel" + i).length) {
  //                $("#itemcarousel" + i).remove();
  //            }
  //        }
  //
  //        $("#contenidocarousel").append('<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>');
  //        $("#contenidocarousel").append('<div id="itemcarousel2" class="carousel-item"> <img id="img2" class="d-block w-100" alt="Colmena 2"></div>');
  //        $("#contenidocarousel").append('<div id="itemcarousel3" class="carousel-item"> <img id="img3" class="d-block w-100" alt="Colmena 3"></div>');
  //
  //        $('#img1').attr("src", "public/img/soncuanoalas/soncuano1.jpg");
  //        $('#img2').attr("src", "public/img/soncuanoalas/soncuano2.jpg");
  //        $('#img3').attr("src", "public/img/soncuanoalas/soncuano3.jpg");
  //        $('#mymodal').modal('show');
  //        $('#img-ubicacion').attr("src", "public/img/ubicaciongeografica/Especies-2.png");
  //
  //        $('#referencias').text('Referencias: 5 y 6');
  //
  //    });

  $("#modalespecie3").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("<i>Partamonas orizabaensis</i>");
    $("#nombrecomun").text("Enreda Pelo");
    $("#morfologia").text(
      "La longitud del cuerpo de una abeja adulta puede llegar a ser de 6 mm. Presenta una coloración negra brillante en el cuerpo con alas oscuras, mientras que la cabeza y tórax no presenta vellosidad. Algo característico de esta especie son las líneas verticales blancas en la parte interior de los ojos.",
    );
    $("#comportamiento").text(
      "Son agresivas frente a cualquier perturbación cerca de su entorno, por lo que en la colmena se presentan un número considerable de abejas guardianas. Además de esto, si se llega a presentar un ataque por parte de estas abejas es duradero y con un número importante de abejas.",
    );
    $("#caracteristica").text(
      "Construyen sus nidos en distintas bases, como huecos subterráneos, asociados a nidos de otros insectos sociales como hormigas, huecos de árboles y nidos de aves abandonados. El material que utilizan para sus nidos generalmente es cera, barro y resinas vegetales, puras o mezcladas con cerumen; el cerumen es un material grasoso que las abejas producen, es una mezcla de propóleo y cera. Algunas especies emplean tierra mezclada con cerumen, en partes estratégicas del nido, para reforzar su sostén y protección.",
    );

    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#img1").attr("src", "public/img/enredapelo/enredapelo.jpg");
    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    );

    $("#referencias").text("Referencias: 6 y 7");
  });

  $("#modalespecie4").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("<i>Tetragona ziegleri</i>");
    $("#nombrecomun").text("Mariolon, miel de leche, barba de buey");
    $("#morfologia").text(
      "Esta especie presenta tonalidades de color naranja en el cuerpo, mientras que la mitad delantera de la cabeza y a los costados del tórax son de color amarillo. El tórax y la parte superior de la cabeza son de color café y finalmente las patas son de color negro. La longitud del cuerpo de un adulto puede llegar a medir entre 5-7 mm.",
    );
    $("#comportamiento").text(
      "La conducta de estas abejas es dócil y no defensivas, por lo que hay muy pocas abejas guardianas en la colmena.",
    );
    $("#caracteristica").text(
      "El nido presenta una estructura tubular sin porosidad. La forma del extremo de la colmena es irregular con forma ovalada. El tamaño se encuentra entre 1 cm de ancho y 15 cm de longitud.",
    );

    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }

    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#contenidocarousel").append(
      '<div id="itemcarousel2" class="carousel-item "> <img id="img2" class="d-block w-100" alt="Colmena 2"></div>',
    );
    $("#img1").attr("src", "public/img/mariolon/mariolon1.jpg");
    $("#img2").attr("src", "public/img/mariolon/mariolon2.jpg");
    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-4-5.png",
    );

    $("#referencias").text("Referencias: 9 y 6");
  });

  $("#modalespecie5").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("<i>Tetragonisca angostula</i>");
    $("#nombrecomun").text("Mariola");
    $("#morfologia").text(
      "Es una especie pequeña en donde las abejas obreras pueden medir de 4 a 5 mm de longitud, tienen cabeza y tórax negro brillante, cuerpo delgado y abdomen amarillo. Las reinas desarrollan mucho el abdomen debido a la activación de los ovarios. Los machos presentan líneas o manchas amarillas en el rostro. No tienen aguijón. Las tibias de las patas posteriores poseen una estructura con forma de canasta para el polen. ",
    );
    $("#comportamiento").text(
      "Se movilizan y reproducen por enjambres (gran número de abejas). Son abejas pasivas, pero pueden defenderse mordiendo a la amenaza en situaciones donde se sientan en peligro. Generalmente, algunas abejas se mantienen sobrevolando en la entrada de la colmena y otras sobre la superficie de esta. Es una de las especies más importantes para la producción de miel en nuestro país. ",
    );
    $("#caracteristica").text(
      "Estas abejas pueden construir sus nidos en cavidades de troncos de árboles o en muros. La entrada del nido es tubular, construido con cera blanda, paredes delgadas y presentan pequeños agujeros. ",
    );
    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#img1").attr("src", "public/img/mariola/mariola1.jpg");
    for (var i = 2; i < 29; i++) {
      $("#contenidocarousel").append(
        '<div id="itemcarousel' +
          i +
          '" class="carousel-item"> <img id="img' +
          i +
          '" class="d-block w-100" alt="Colmena' +
          i +
          '"></div>',
      );
      var name = "#img" + i;
      $(name).attr("src", "public/img/mariola/mariola" + i + ".jpg");
    }
    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-4-5.png",
    );

    $("#referencias").text("Referencias: 10 y 6");
  });

  $("#modalespecie6").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("<i>Nannotrigona mellaria</i>");
    $("#nombrecomun").text("Chicopipe");
    $("#morfologia").text(
      "Es una especie de abeja pequeña en donde puede medir entre 5 a 6 mm de longitud, además de esto se le considera una abeja con cuerpo robusto comparada a las demás. El cuerpo es de color negro con una característica particular como el punteado y rayas amarillas en el tórax. Los ojos presentan tonalidades de color verde.",
    );
    $("#comportamiento").text(
      "Esta especie recolecta polen de una gran variedad de plantas por lo que tiene un gran potencial como polinizador en zonas urbanas. Además, esta especie tiene preferencia en la recolección de polen de leguminosas.",
    );
    $("#caracteristica").text(
      "Construyen las colmenas en cavidades de muros y troncos. Fabrican la entrada del nido en forma de tubo con cera. Son tímidas y tienden a huir cuando se sienten amenazadas. El material que utilizan para construcción de la colmena es principalmente cera con porosidades de color café claro. Puede presentar un tamaño de 1.2 cm de diámetro y de largo puede variar entre 8.5 a 57 cm. ",
    );
    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#img1").attr("src", "public/img/chicopipe/chicopipe1.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel2" class="carousel-item"> <img id="img2" class="d-block w-100" alt="Colmena 2"></div>',
    );
    $("#img2").attr("src", "public/img/chicopipe/chicopipe2.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel3" class="carousel-item"> <img id="img3" class="d-block w-100" alt="Colmena 3"></div>',
    );
    $("#img3").attr("src", "public/img/chicopipe/chicopipe3.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel4" class="carousel-item"> <img id="img4" class="d-block w-100" alt="Colmena 4"></div>',
    );
    $("#img4").attr("src", "public/img/chicopipe/chicopipe4.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel5" class="carousel-item"> <img id="img5" class="d-block w-100" alt="Colmena 5"></div>',
    );
    $("#img5").attr("src", "public/img/chicopipe/chicopipe5.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel6" class="carousel-item"> <img id="img6" class="d-block w-100" alt="Colmena 6"></div>',
    );
    $("#img6").attr("src", "public/img/chicopipe/chicopipe6.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel7" class="carousel-item"> <img id="img7" class="d-block w-100" alt="Colmena 7"></div>',
    );
    $("#img7").attr("src", "public/img/chicopipe/chicopipe7.jpg");

    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-6.png",
    );

    $("#referencias").text("Referencias: 6");
  });

  $("#modalespecie7").on("click", function () {
    $("#nombrecientifico").html("");
    $("#nombrecientifico").append("<i>Scaptotrigona pectoralis</i>");

    $("#nombrecomun").text("Soncuano");
    $("#morfologia").text(
      "El cuerpo de esta especie presenta una coloración amarillenta-anaranjada, con los ojos y tórax negros. Estas abejas son consideradas de tamaño mediano entre 6 a 7 mm de longitud. Presentan poca vellosidad.",
    );
    $("#comportamiento").text(
      "A pesar de que no tienen aguijón se defienden eficientemente, algunas huyen, pero otras son agresivas y atacan por medio de mordiscos y depósito de sustancias resinosas sobre la piel del individuo atacante. Las poblaciones más grandes son más agresivas. Tienen abejas guardianas en la colmena. Son fácilmente diferenciables porque producen varias reinas en celdas similares a las de las obreras. El tamaño de la población de las colonias varía entre 1500 a 6000 abejas. Es una de las principales especies meliponas productoras de miel en Costa Rica, destacando por su excelente calidad y buenas cantidades. ",
    );
    $("#caracteristica").text(
      "Muchos nidos se pueden ubicar en árboles. La forma de la colmena es tubular de color café oscuro y con porosidad muy fina. El extremo de la colmena es ovalado e irregular. Puede llegar a alcanzar entre 2.3 a 3.5 cm de diámetro y 3.5 a 77 cm de longitud. Es una de las especies que presenta mayor longitud de la colmena dentro de las abejas sin aguijón. Se dice que, entre más larga se construya la colmena, esta puede retorcerse en varias secciones.",
    );
    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#img1").attr("src", "public/img/soncuano/soncuano1.jpg");
    for (var i = 2; i < 7; i++) {
      $("#contenidocarousel").append(
        '<div id="itemcarousel' +
          i +
          '" class="carousel-item"> <img id="img' +
          i +
          '" class="d-block w-100" alt="Colmena' +
          i +
          '"></div>',
      );
      var name = "#img" + i;
      $(name).attr("src", "public/img/soncuano/soncuano" + i + ".jpg");
    }

    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    );
    $("#referencias").text("Referencias: 11 y 6");
  });

  $("#modalespecie8").on("click", function () {
    $("#nombrecientifico").html("");
    $("<i>Euglossa</i>").appendTo("#nombrecientifico");
    $("#nombrecomun").text("Abejas de las orquídeas");
    $("#morfologia").text(
      "El cuerpo presenta tonalidades metálicas, azul y verde plateado. Presenta vellosidad al costado del tórax y en las patas. Alas de color negro. Son una especie de abejas robustas de entre 8 y 30 mm de longitud. Una de las características más destacables de esta especie es que su lengua puede medir hasta dos veces más que su cuerpo, es una característica que le permite acceder a fuentes de néctar que otras abejas no pueden alcanzar.",
    );
    $("#comportamiento").text(
      "Es conocida como la abeja de las orquídeas, no se encuentra dentro de las especies de las abejas meliponas, pero cumplen un papel ecológico sumamente importante debido a que estas abejas satisfacen las necesidades de polinización de muchas flores, especialmente de orquídeas. Su comportamiento es muy tranquilo con un estilo de vida solitario, no tienen reina y no producen miel. Las hembras tienen aguijón que puede producir un fuerte dolor si se ven amenazadas. Los machos no tienen aguijón, visitan las flores para alimentarse y polinizarlas, también recolectan y almacenan en su cuerpo una gran variedad de compuestos aromáticos para atraer pareja.",
    );
    $("#caracteristica").text(
      "Pueden hacer nidos en huecos de los troncos de los árboles o en tallos gruesos, ramas y también pueden crear túneles en el suelo. Emplean materiales vegetales que recogen del ambiente, como pedazos de hojas, pétalos y barro. La forma de los nidos puede variar dependiendo del material empleado, pero siempre presentará celdas en el interior.",
    );
    for (var i = 1; i < 29; i++) {
      if ($("#itemcarousel" + i).length) {
        $("#itemcarousel" + i).remove();
      }
    }
    $("#contenidocarousel").append(
      '<div id="itemcarousel1" class="carousel-item active"> <img id="img1" class="d-block w-100" alt="Colmena 1"></div>',
    );
    $("#img1").attr("src", "public/img/euglossa/euglossa1.jpg");
    $("#contenidocarousel").append(
      '<div id="itemcarousel2" class="carousel-item"> <img id="img2" class="d-block w-100" alt="Colmena 2"></div>',
    );
    $("#img2").attr("src", "public/img/euglossa/euglossa2.jpg");
    $("#mymodal").modal("show");
    $("#img-ubicacion").attr(
      "src",
      "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    );
    $("#referencias").text("Referencias: 12 y 13");
  });
}

function initmarkers2026() {
  //    Abejas solitarias inicio
  especie1[1] = L.marker([-211.40234375, 712.125], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "blue",
      shape: "circle",
      prefix: "far",
    }),
  }).addTo(map);
  //    Abejas solitarias fin

  //soncuano ala roja o dorada inicio

  //soncuano ala roja o dorada fin

  //Enreda pelo inicio
  especie3[1] = L.marker([-173.77734375, 546.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "green",
      shape: "penta",
      prefix: "far",
    }),
  }).addTo(map);
  //Enreda pelo fin

  //Mariolon inicio
  especie4[1] = L.marker([-216.15234375, 489.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-play",
      iconColor: "white",
      markerColor: "violet",
      shape: "penta",
      prefix: "fas",
    }),
  }).addTo(map);
  //Mariolon fin

  //Mariola inicio
  especie5[1] = L.marker([-193.52734375, 441.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[2] = L.marker([-87.90234375, 478.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  //Mariola fin

  //Chicopipe inicio
  especie6[1] = L.marker([-88.02734375, 426.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);

  //Chicopipe fin

  //Soncuano inicio
  especie7[1] = L.marker([-131.15234375, 380.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
    // recordar poner el numero del campo en el array
  }).addTo(map);especie7[2] = L.marker([-145.15234375, 390.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);


  //Soncuano fin

  //Euglossa inicio
  especie8[1] = L.marker([-220.40234375, 395], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-square",
      iconColor: "white",
      markerColor: "orange",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);
  //Euglossa fin
}
function initmarkers2022() {
  //    Abejas solitarias inicio
  especie1[1] = L.marker([-211.40234375, 712.125], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "blue",
      shape: "circle",
      prefix: "far",
    }),
  }).addTo(map);
  //    Abejas solitarias fin

  //soncuano ala roja o dorada inicio

  //soncuano ala roja o dorada fin

  //Enreda pelo inicio
  especie3[1] = L.marker([-173.77734375, 546.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "green",
      shape: "penta",
      prefix: "far",
    }),
  }).addTo(map);
  //Enreda pelo fin

  //Mariolon inicio
  especie4[1] = L.marker([-216.15234375, 489.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-play",
      iconColor: "white",
      markerColor: "violet",
      shape: "penta",
      prefix: "fas",
    }),
  }).addTo(map);
  //Mariolon fin

  //Mariola inicio
  especie5[1] = L.marker([-193.52734375, 441.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[2] = L.marker([-87.90234375, 478.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[3] = L.marker([-103.3046875, 470.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[4] = L.marker([-111.15234375, 481.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[5] = L.marker([-120.77734375, 474.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[6] = L.marker([-118.02734375, 528.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[7] = L.marker([-101.65234375, 497], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[8] = L.marker([-90.40234375, 496.125], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[9] = L.marker([-95.02734375, 488.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[10] = L.marker([-99.02734375, 526.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[11] = L.marker([-90.951171875, 510.0625], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[12] = L.marker([-91.15234375, 547.625], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[13] = L.marker([-91.0546875, 556.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[14] = L.marker([-79.5546875, 503], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[15] = L.marker([-85.27734375, 522.25], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[16] = L.marker([-89.65234375, 530.25], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[17] = L.marker([-105.15234375, 538.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[18] = L.marker([-79.513671875, 456], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[19] = L.marker([-77.40234375, 467.25], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[20] = L.marker([-65.65234375, 414.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[21] = L.marker([-60.77734375, 431.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[22] = L.marker([-59.15234375, 454], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);

  especie5[23] = L.marker([-50.65234375, 655.625], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-certificate",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);
  //Mariola fin

  //Chicopipe inicio
  especie6[1] = L.marker([-88.02734375, 426.5], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);

  especie6[2] = L.marker([-90.77734375, 458.125], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);

  especie6[3] = L.marker([-112.90234375, 469.625], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);

  especie6[4] = L.marker([-100.27734375, 514.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);

  especie6[5] = L.marker([-182.52734375, 556.625], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-circle",
      iconColor: "white",
      markerColor: "black",
      shape: "circle",
      prefix: "fas",
    }),
  }).addTo(map);
  //Chicopipe fin

  //Soncuano inicio
  especie7[1] = L.marker([-131.15234375, 380.75], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);

  especie7[2] = L.marker([-108.15234375, 399], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);

  especie7[3] = L.marker([-117.40234375, 460.875], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);

  especie7[4] = L.marker([-128.15234375, 466], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);

  especie7[5] = L.marker([-83.40234375, 487.375], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-star",
      iconColor: "white",
      markerColor: "cyan",
      shape: "square",
      prefix: "far",
    }),
  }).addTo(map);
  //Soncuano fin

  //Euglossa inicio
  especie8[1] = L.marker([-220.40234375, 395], {
    icon: L.ExtraMarkers.icon({
      icon: "fa-square",
      iconColor: "white",
      markerColor: "orange",
      shape: "star",
      prefix: "fas",
    }),
  }).addTo(map);
  //Euglossa fin
}
function quitarTodosLosMarcadores() {
  [
    especie1,
    especie2,
    especie3,
    especie4,
    especie5,
    especie6,
    especie7,
    especie8,
  ].forEach(quitarMarcadoresDeArray);
}

function quitarMarcadoresDeArray(arr) {
  if (!Array.isArray(arr)) return;

  arr.forEach((marker) => {
    if (marker && map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
}

function showMarkers(map) {
  $("#especie1").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie1.length; i++) {
      if (especie1[i]) {
        especie1[i].addTo(map);
      }
    }

    // especie1[1].addTo(map);
    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 24; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie2").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie2.length; i++) {
      if (especie2[i]) {
        especie2[i].addTo(map);
      }
    }

    // especie2[1].addTo(map);

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 24; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie3").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie3.length; i++) {
      if (especie3[i]) {
        especie3[i].addTo(map);
      }
    }

    // especie3[1].addTo(map);

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 24; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie4").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie4.length; i++) {
      if (especie4[i]) {
        especie4[i].addTo(map);
      }
    }
    // especie4[1].addTo(map);

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 23; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie5").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie5.length; i++) {
      if (especie5[i]) {
        especie5[i].addTo(map);
      }
    }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 23; i++) {
    //     especie5[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie6").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie6.length; i++) {
      if (especie6[i]) {
        especie6[i].addTo(map);
      }
    }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 24; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie6[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#especie7").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie7.length; i++) {
      if (especie7[i]) {
        especie7[i].addTo(map);
      }
    }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // if (map.hasLayer(especie8[1])) {
    //     map.removeLayer(especie8[1]);
    // }

    // for (var i = 1; i <= 24; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie7[i].addTo(map);
    // }
  });

  $("#especie8").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie8.length; i++) {
      if (especie8[i]) {
        especie8[i].addTo(map);
      }
    }

    // if (map.hasLayer(especie4[1])) {
    //     map.removeLayer(especie4[1]);
    // }

    // if (map.hasLayer(especie1[1])) {
    //     map.removeLayer(especie1[1]);
    // }

    // if (map.hasLayer(especie2[1])) {
    //     map.removeLayer(especie2[1]);
    // }

    // if (map.hasLayer(especie3[1])) {
    //     map.removeLayer(especie3[1]);
    // }

    // especie8[1].addTo(map);

    // for (var i = 1; i <= 23; i++) {
    //     if (map.hasLayer(especie5[i])) {
    //         map.removeLayer(especie5[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie6[i])) {
    //         map.removeLayer(especie6[i]);
    //     }
    // }

    // for (var i = 1; i <= 5; i++) {
    //     if (map.hasLayer(especie7[i])) {
    //         map.removeLayer(especie7[i]);
    //     }
    // }
  });

  $("#todas2026").on("click", function (e) {
    quitarTodosLosMarcadores();

    initmarkers2026();

    // for (var i = 1; i <= 24; i++) {
    //     especie5[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie6[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie7[i].addTo(map);
    // }
  });
  $("#todas2022").on("click", function (e) {
    quitarTodosLosMarcadores();

    initmarkers2022();

    // for (var i = 1; i <= 24; i++) {
    //     especie5[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie6[i].addTo(map);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     especie7[i].addTo(map);
    // }
  });
}

function popups() {
  $("#close-tutorial");
  especie1.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Abejas solitarias").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  //    especie2[1].on('mouseover', function (e) {
  //        this.bindPopup("Soncuano ala roja o dorada").openPopup();
  //    }).on('mouseout', function (e) {
  //        this.closePopup();
  //    });
  //     especie1.forEach(marker => {
  //   if (!marker) return;

  //   marker
  //     .on('click', function () {
  //       // lógica del click
  //     })
  //     .on('mouseover', function () {
  //       this.bindPopup("Soncuano ala roja").openPopup();
  //     })
  //     .on('mouseout', function () {
  //       this.closePopup();
  //     });
  // });

  especie3.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Ereda Pelo").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  especie4.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Marilon").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  especie5.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Mariola").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  especie6.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Chicopipe").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  especie7.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Soncuano").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

  especie8.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Euglossa").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });
}
function alertsColmenas() {
  especie1[1].on("click", function (e) {
    creacionItemsCarrousel(2, 1);
    $("#img1Colmena").attr(
      "src",
      "public/img/abejassolitarias/abejassolitarias1.jpg",
    );
    $("#img2Colmena").attr(
      "src",
      "public/img/abejassolitarias/abejassolitarias2.jpg",
    );
  });

  //    especie2[1].on('click', function (e) {
  //
  //        creacionItemsCarrousel(3, 2);
  //        $('#img1Colmena').attr("src", "public/img/soncuanoalas/soncuano1.jpg");
  //        $('#img2Colmena').attr("src", "public/img/soncuanoalas/soncuano2.jpg");
  //        $('#img3Colmena').attr("src", "public/img/soncuanoalas/soncuano3.jpg");
  //
  //
  //    });

  especie3[1].on("click", function (e) {
    creacionItemsCarrousel(1, 3);
    $("#img1Colmena").attr("src", "public/img/enredapelo/enredapelo.jpg");
  });

  especie4[1].on("click", function (e) {
    creacionItemsCarrousel(2, 4);

    $("#img1Colmena").attr("src", "public/img/mariolon/mariolon1.jpg");
    $("#img2Colmena").attr("src", "public/img/mariolon/mariolon2.jpg");
  });

  especie5[1].on("click", function (e) {
    creacionItemsCarrousel(1, 5);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola1.jpg");
  });

  especie5[2].on("click", function (e) {
    creacionItemsCarrousel(1, 11);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola2.jpg");
  });

  especie5[3].on("click", function (e) {
    creacionItemsCarrousel(1, 12);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola4.jpg");
  });

  especie5[4].on("click", function (e) {
    creacionItemsCarrousel(2, 13);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola5.jpg");
    $("#img2Colmena").attr("src", "public/img/mariola/mariola6.jpg");
  });

  especie5[5].on("click", function (e) {
    creacionItemsCarrousel(2, 17);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola7.jpg");
    $("#img2Colmena").attr("src", "public/img/mariola/mariola8.jpg");
  });

  especie5[6].on("click", function (e) {
    creacionItemsCarrousel(1, 18);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola9.jpg");
  });

  especie5[7].on("click", function (e) {
    creacionItemsCarrousel(1, 19);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola10.jpg");
  });

  especie5[8].on("click", function (e) {
    creacionItemsCarrousel(2, 21);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola11.jpg");
    $("#img2Colmena").attr("src", "public/img/mariola/mariola12.jpg");
  });

  especie5[9].on("click", function (e) {
    creacionItemsCarrousel(2, 22);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola13.jpg");
    $("#img2Colmena").attr("src", "public/img/mariola/mariola14.jpg");
  });

  especie5[10].on("click", function (e) {
    creacionItemsCarrousel(1, 23);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola15.jpg");
  });

  especie5[11].on("click", function (e) {
    creacionItemsCarrousel(1, 25);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola16.jpg");
  });

  especie5[12].on("click", function (e) {
    creacionItemsCarrousel(1, 26);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola17.jpg");
  });

  especie5[13].on("click", function (e) {
    creacionItemsCarrousel(1, 27);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola18.jpg");
  });

  especie5[14].on("click", function (e) {
    creacionItemsCarrousel(1, 28);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola19.jpg");
  });

  especie5[15].on("click", function (e) {
    creacionItemsCarrousel(1, 29);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola20.jpg");
  });

  especie5[16].on("click", function (e) {
    creacionItemsCarrousel(1, 30);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola21.jpg");
  });

  especie5[17].on("click", function (e) {
    creacionItemsCarrousel(1, 31);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola22.jpg");
  });

  especie5[18].on("click", function (e) {
    creacionItemsCarrousel(1, 32);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola23.jpg");
  });

  especie5[19].on("click", function (e) {
    creacionItemsCarrousel(1, 33);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola24.jpg");
  });

  especie5[20].on("click", function (e) {
    creacionItemsCarrousel(1, 34);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola25.jpg");
  });

  especie5[21].on("click", function (e) {
    creacionItemsCarrousel(1, 35);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola26.jpg");
  });

  especie5[22].on("click", function (e) {
    creacionItemsCarrousel(1, 36);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola27.jpg");
  });

  especie5[23].on("click", function (e) {
    creacionItemsCarrousel(1, 37);
    $("#img1Colmena").attr("src", "public/img/mariola/mariola28.jpg");
  });

  especie6[1].on("click", function (e) {
    creacionItemsCarrousel(1, 9);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe1.jpg");
  });

  especie6[2].on("click", function (e) {
    creacionItemsCarrousel(1, 10);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe2.jpg");
  });

  especie6[3].on("click", function (e) {
    creacionItemsCarrousel(1, 14);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe3.jpg");
  });

  especie6[4].on("click", function (e) {
    creacionItemsCarrousel(1, 24);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe4.jpg");
  });

  especie6[5].on("click", function (e) {
    creacionItemsCarrousel(3, 2);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe5.jpg");
    $("#img2Colmena").attr("src", "public/img/chicopipe/chicopipe6.jpg");
    $("#img3Colmena").attr("src", "public/img/chicopipe/chicopipe7.jpg");
  });

  especie7[4].on("click", function (e) {
    creacionItemsCarrousel(1, 24);
    $("#img1Colmena").attr("src", "public/img/chicopipe/chicopipe5.jpg");
  });

  especie7[1].on("click", function (e) {
    creacionItemsCarrousel(1, 7);
    $("#img1Colmena").attr("src", "public/img/soncuano/soncuano1.jpg");
  });

  especie7[2].on("click", function (e) {
    creacionItemsCarrousel(1, 8);
    $("#img1Colmena").attr("src", "public/img/soncuano/soncuano2.jpg");
  });

  especie7[3].on("click", function (e) {
    creacionItemsCarrousel(1, 15);
    $("#img1Colmena").attr("src", "public/img/soncuano/soncuano3.jpg");
  });

  especie7[4].on("click", function (e) {
    creacionItemsCarrousel(1, 16);
    $("#img1Colmena").attr("src", "public/img/soncuano/soncuano4.jpg");
  });

  especie7[5].on("click", function (e) {
    creacionItemsCarrousel(2, 20);
    $("#img1Colmena").attr("src", "public/img/soncuano/soncuano5.jpg");
    $("#img2Colmena").attr("src", "public/img/soncuano/soncuano6.jpg");
  });

  especie8[1].on("click", function (e) {
    creacionItemsCarrousel(2, 6);
    $("#img1Colmena").attr("src", "public/img/euglossa/euglossa1.jpg");
    $("#img2Colmena").attr("src", "public/img/euglossa/euglossa2.jpg");
  });
}

function creacionItemsCarrousel(numeroItems, numeroColmena) {
  for (var i = 1; i < 29; i++) {
    if ($("#itemColmena" + i).length) {
      $("#itemColmena" + i).remove();
    }
  }

  for (var i = 1; i <= numeroItems; i++) {
    if ($("#itemColmena1").length) {
      $("#contenidocarouselColmena").append(
        '<div  id="itemColmena' +
          i +
          '" class="carousel-item "> <img id="img' +
          i +
          'Colmena" class="d-block w-100" alt="Colmena ' +
          numeroColmena +
          '"> </div>',
      );
    } else {
      var element = $(
        '<div id="itemColmena' +
          i +
          '" class="carousel-item active "> <img id="img' +
          i +
          'Colmena" class="d-block w-100" alt="Colmena ' +
          numeroColmena +
          '"> </div>',
      ).appendTo("#contenidocarouselColmena");
    }
  }

  $("#colmenatitulo").text("Colmena " + numeroColmena);
  $("#mymodalColmena").modal("show");
}
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
// 2026
function alertsColmenas2026() {
  especie1[1].on("click", function () {
    abrirColmena(1, 1);
  });

  // especie2[1].on('click', function () {
  //   abrirColmena(2, 1);
  // });

  especie3[1].on("click", function () {
    abrirColmena(3, 1);
  });

  especie4[1].on("click", function () {
    abrirColmena(4, 1);
  });

  // 👇 ESPECIE 5 (DOS COLMENAS)
  especie5[1].on("click", function () {
    abrirColmena(5, 1);
  });

  // ejemplo futuro:
  especie5[2].on("click", function () {
    abrirColmena(5, 2);
  });

  especie6[1].on("click", function () {
    abrirColmena(6, 1);
  });

  especie7[1].on("click", function () {
    abrirColmena(7, 1);
  });
  especie7[2].on("click", function () {
    abrirColmena(7, 2);
  });

  especie8[1].on("click", function () {
    abrirColmena(8, 1);
  });
}

const especies = {
  1: {
    nombre: "Abejas Solitarias",
    modalInfo: "modalespecie1",
    colmenas: {
      1: {
        nombre: "Colmena 1",
        imagenes: [
          "public/img/abejassolitarias/abejassolitarias1.jpg",
          "public/img/abejassolitarias/abejassolitarias2.jpg",
        ],
      },
    },
  },

  2: {
    nombre: "Especie 2",
    modalInfo: "modalespecie2",

    colmenas: {
      1: {
        nombre: "Colmena Única",
        imagenes: [],
      },
    },
  },

  3: {
    nombre: "Enredapelo",
   modalInfo: "modalespecie3",
    colmenas: {
      1: {
        nombre: "Colmena Única",
        imagenes: ["public/img/enredapelo/enredapelo.jpg"],
      },
    },
  },

  4: {
    nombre: "Mariolón",
    modalInfo: "modalespecie4",
    colmenas: {
      1: {
        nombre: "Colmena Principal",
        imagenes: [
          "public/img/mariolon/mariolon1.jpg",
          "public/img/mariolon/mariolon2.jpg",
        ],
      },
    },
  },

  5: {
    nombre: "Mariola",
    modalInfo: "modalespecie5",
    colmenas: {
      1: {
        nombre: "Colmena Norte",
        imagenes: ["public/img/mariola/mariola1.jpg"],
      },
      2: {
        nombre: "Colmena Sur",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
    },
  },

  6: {
    nombre: "Chicopipe",
    modalInfo: "modalespecie6",

    colmenas: {
      1: {
        nombre: "Colmena Única",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
    },
  },

  7: {
    nombre: "Soncuano",
    modalInfo: "modalespecie7",
    colmenas: {
      1: {
        nombre: "Colmena Única",
        imagenes: ["public/img/soncuano/soncuano1.jpg"],
      },
      2: {
        nombre: "Colmena Única",
        imagenes: ["public/img/soncuano/soncuano2.jpg"],
      },
    },
  },

  8: {
    nombre: "Euglossa",
    modalInfo: "modalespecie8",
    colmenas: {
      1: {
        nombre: "Colmena Principal",
        imagenes: [
          "public/img/euglossa/euglossa1.jpg",
          "public/img/euglossa/euglossa2.jpg",
        ],
      },
    },
  },
};

function abrirColmena(idEspecie, idColmena = 1) {
  const especie = especies[idEspecie];
  if (!especie) return;

  const colmena = especie.colmenas[idColmena];
  if (!colmena) return;

  // Título dinámico
  document.getElementById("tituloColmena").textContent =
    `${especie.nombre} – ${colmena.nombre}`;

  // Carrusel
  const contenedor = document.getElementById("carouselContenido");
  contenedor.innerHTML = "";

  colmena.imagenes.forEach((img, index) => {
    contenedor.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100">
      </div>
    `;
  });

  // Botón info (siempre a la especie)
document.getElementById("btnInfoEspecie").onclick = () => {
  const modalKey = especie.modalInfo.replace("#", "");

  // Cerrar modal actual
  $("#modalColmena").modal("hide");

  // Cuando termine de cerrarse, abrir el otro
  $("#modalColmena").one("hidden.bs.modal", () => {
    abrirModalEspecie(modalKey);
  });
};


  // Modal (jQuery + Bootstrap, como tu proyecto)
  $("#modalColmena").modal("show");
}
