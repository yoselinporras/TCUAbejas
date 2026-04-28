var especie1 = [];
var especie2 = [];
var especie3 = [];
var especie4 = [];
var especie5 = [];
var especie6 = [];
var especie7 = [];
var especie8 = [];



//JUEGOS

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


function crearMarkersEspecie(especieArray, coordsArray, iconConfig) {
  for (let i = 0; i < coordsArray.length; i++) {

    especieArray[i + 1] = L.marker(coordsArray[i], {
      icon: L.ExtraMarkers.icon({
        icon: iconConfig.icon,
        iconColor: "white",
        markerColor: iconConfig.color,
        shape: iconConfig.shape,
        prefix: iconConfig.prefix,
      }),
    }).addTo(map);

  }
}

function initmarkers2026() {

  // limpiar arrays (IMPORTANTE)
  especie1 = [];
  especie2 = [];
  especie3 = [];
  especie4 = [];
  especie5 = [];
  especie6 = [];
  especie7 = [];
  especie8 = [];

  // especie 2 - Gicote Gato
  crearMarkersEspecie(especie2,
    [[-97.78125,456.8125]],
    { icon: "fa-circle", color: "blue", shape: "circle", prefix: "far" }
  );

  // especie 5 - Mariola
  crearMarkersEspecie(especie5,
    [
      [-98.59375,455.75],
      [-104.1875,454.9375],
      [-104.1875,454.9375],
      [-109.28125,458.125],
      [-106.75,467.53125],
      [-92.46875,492.3125],
      [-89.9375,472.375],
      [-88.6875,487.9375],
      [-86.09375,493.9375],
      [-82.875,509.03125],
      [-87.84375,502.4375],
      [-87.9375,521.78125],
      [-99.03125,531.4375],
      [-99.6875,530.84375],
      [-90.90625,531.9375],
      [-89.0625,550.875],
      [-87.0625,561.625],
      [-111.5,466.46875],
      [-111.78125,461.6875],
      [-189.84375,422.59375],
      [-196.84375,425.28125],
      [-231.59375,597.34375],
      [-87.9375,462.1875],
      [-93.09375,559.9375],
    ],
    { icon: "fa-certificate", color: "yellow", shape: "star", prefix: "fas" }
  );

  // especie 6 - Chicopipe
  crearMarkersEspecie(especie6,
    [
      [-89.0625,526.71875],
      [-115.625,465.09375],
      [-233.75,603.71875],
      [-88.5,479.65625],
      [-96.4375,454.71875],
      [-95.84375,455.1875],
    ],
    { icon: "fa-circle", color: "black", shape: "circle", prefix: "fas" }
  );

  // especie 7 - Soncuano
  crearMarkersEspecie(especie7,
    [
      [-98.8125,491.03125],
      [-94.40625,493.375],
      [-87.96875,487.6875],
      [-88.25,496.3125],
    ],
    { icon: "fa-star", color: "cyan", shape: "square", prefix: "far" }
  );

}

function initmarkers2022() {

  // limpiar arrays
  especie1 = [];
  especie2 = [];
  especie3 = [];
  especie4 = [];
  especie5 = [];
  especie6 = [];
  especie7 = [];
  especie8 = [];

  // especie 1 - Abejas solitarias
  crearMarkersEspecie(especie1,
    [[-211.40234375, 712.125]],
    { icon: "fa-circle", color: "blue", shape: "circle", prefix: "far" }
  );

  // especie 3 - Enredapelo
  crearMarkersEspecie(especie3,
    [[-173.77734375, 546.875]],
    { icon: "fa-star", color: "green", shape: "penta", prefix: "far" }
  );

  // especie 4 - Mariolon
  crearMarkersEspecie(especie4,
    [[-216.15234375, 489.875]],
    { icon: "fa-play", color: "violet", shape: "penta", prefix: "fas" }
  );

  // especie 5 - Mariola
  crearMarkersEspecie(especie5,
    [
      [-193.52734375, 441.5],
      [-87.90234375, 478.75],
      [-103.3046875, 470.5],
      [-111.15234375, 481.5],
      [-120.77734375, 474.375],
      [-118.02734375, 528.75],
      [-101.65234375, 497],
      [-90.40234375, 496.125],
      [-95.02734375, 488.875],
      [-99.02734375, 526.75],
      [-90.951171875, 510.0625],
      [-91.15234375, 547.625],
      [-91.0546875, 556.75],
      [-79.5546875, 503],
      [-85.27734375, 522.25],
      [-89.65234375, 530.25],
      [-105.15234375, 538.375],
      [-79.513671875, 456],
      [-77.40234375, 467.25],
      [-65.65234375, 414.375],
      [-60.77734375, 431.375],
      [-59.15234375, 454],
      [-50.65234375, 655.625],
    ],
    { icon: "fa-certificate", color: "yellow", shape: "star", prefix: "fas" }
  );

  // especie 6 - Chicopipe
  crearMarkersEspecie(especie6,
    [
      [-88.02734375, 426.5],
      [-90.77734375, 458.125],
      [-112.90234375, 469.625],
      [-100.27734375, 514.375],
      [-182.52734375, 556.625],
    ],
    { icon: "fa-circle", color: "black", shape: "circle", prefix: "fas" }
  );

  // especie 7 - Soncuano
  crearMarkersEspecie(especie7,
    [
      [-131.15234375, 380.75],
      [-108.15234375, 399],
      [-117.40234375, 460.875],
      [-128.15234375, 466],
      [-83.40234375, 487.375],
    ],
    { icon: "fa-star", color: "cyan", shape: "square", prefix: "far" }
  );

  // especie 8 - Euglossa
  crearMarkersEspecie(especie8,
    [[-220.40234375, 395]],
    { icon: "fa-square", color: "orange", shape: "star", prefix: "fas" }
  );

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

    
  });

  $("#especie2").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie2.length; i++) {
      if (especie2[i]) {
        especie2[i].addTo(map);
      }
    }

  });

  $("#especie3").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie3.length; i++) {
      if (especie3[i]) {
        especie3[i].addTo(map);
      }
    }

  
  });

  $("#especie4").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie4.length; i++) {
      if (especie4[i]) {
        especie4[i].addTo(map);
      }
    }
    
  });

  $("#especie5").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie5.length; i++) {
      if (especie5[i]) {
        especie5[i].addTo(map);
      }
    }

   
  });

  $("#especie6").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie6.length; i++) {
      if (especie6[i]) {
        especie6[i].addTo(map);
      }
    }

   
  });

  $("#especie7").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie7.length; i++) {
      if (especie7[i]) {
        especie7[i].addTo(map);
      }
    }

   
  });

  $("#especie8").on("click", function (e) {
    quitarTodosLosMarcadores();

    for (var i = 1; i < especie8.length; i++) {
      if (especie8[i]) {
        especie8[i].addTo(map);
      }
    }

    
  });

  $("#todas2026").on("click", function (e) {
    quitarTodosLosMarcadores();

    initmarkers2026();
     alertsColmenas2026();
    

  });
  $("#todas2022").on("click", function (e) {
    quitarTodosLosMarcadores();

    initmarkers2022();
    alertsColmenas2022();

   
  });
}
//ESTA ES PARA QUE SE VEAN LOS NOMBRE CUANDO SE PASA EL MOUSE POR LOS MARCADORES
function popups() {
  // $("#close-tutorial");
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

  especie2.forEach((marker) => {
    if (!marker) return;

    marker
      .on("click", function () {
        // lógica del click
      })
      .on("mouseover", function () {
        this.bindPopup("Jicote Gato").openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      });
  });

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




// 2026


function alertsColmenas2026() {

  for (const idEspecie in especies2026) {

    const especieArray = window["especie" + idEspecie];
    if (!especieArray) continue;

    for (let i = 1; i < especieArray.length; i++) {

      const marker = especieArray[i];
      if (!marker) continue;

      marker.on("click", function () {
        abrirColmena(especies2026, parseInt(idEspecie), i);
      });

    }
  }
}

function alertsColmenas2022() {

  for (const idEspecie in especies2022) {

    const especieArray = window["especie" + idEspecie];
    if (!especieArray) continue;

    for (let i = 1; i < especieArray.length; i++) {

      const marker = especieArray[i];
      if (!marker) continue;

      marker.on("click", function () {
        abrirColmena(especies2022, parseInt(idEspecie), i);
      });

    }
  }
}

function abrirColmena(especiesObj, idEspecie, idColmena = 1) {

  const especie = especiesObj[idEspecie];
  if (!especie) return;

  const colmena = especie.colmenas[idColmena];
  if (!colmena) return;

  // Título dinámico
  const titulo = document.getElementById("tituloColmena");
  if (titulo) {
    titulo.textContent = `${especie.nombre} – ${colmena.nombre}`;
  }

  // Carrusel
  const contenedor = document.getElementById("carouselContenido");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  colmena.imagenes.forEach((img, index) => {
    contenedor.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100">
      </div>
    `;
  });

  // Botón info
  const btn = document.getElementById("btnInfoEspecie");
  if (btn) {
    btn.onclick = () => {
      const modalKey = especie.modalInfo.replace("#", "");

      $("#modalColmena").modal("hide");

      $("#modalColmena").one("hidden.bs.modal", () => {
        abrirModalEspecie(modalKey);
      });
    };
  }

  $("#modalColmena").modal("show");
}

const especies2026 = {

  2: {
    nombre: "Gicote Gato",
    modalInfo: "modalespecie2",

    colmenas: {
      1: {
        nombre: "",
        imagenes: [],
      },
    },
  },

 

  5: {
    nombre: "Mariola",
    modalInfo: "modalespecie5",
    colmenas: {
      1: {
        nombre: "Piquera A2",
        imagenes: ["public/img/mariola/mariola1.jpg"],
      },
      2: {
        nombre: "Piquera A3",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      3: {
        nombre: "Piquera A4",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      4: {
        nombre: "Piquera A5",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      5: {
        nombre: "Piquera A6",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      6: {
        nombre: "Piquera A9",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      7: {
        nombre: "Piquera A10",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      8: {
        nombre: "Piquera A12",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      9: {
        nombre: "Piquera A13",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      10: {
        nombre: "Piquera A15",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      11: {
        nombre: "Piquera A16",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      12: {
        nombre: "Piquera A17",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      13: {
        nombre: "Piquera A19",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      14: {
        nombre: "Piquera A20",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      15: {
        nombre: "Piquera A21",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      16: {
        nombre: "Piquera A22",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      17: {
        nombre: "Piquera A23",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      18: {
        nombre: "Piquera A24",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      19: {
        nombre: "Piquera A25",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      20: {
        nombre: "Piquera A27",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      21: {
        nombre: "Piquera A28",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      22: {
        nombre: "Piquera A29",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      23: {
        nombre: "Piquera A32",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      24: {
        nombre: "Piquera A33",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
      25: {
        nombre: "Piquera A24",
        imagenes: ["public/img/mariola/mariola2.jpg"],
      },
    },
  },

  6: {
    nombre: "Chicopipe",
    modalInfo: "modalespecie6",

    colmenas: {
      1: {
        nombre: "Piquera A18",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
      2: {
        nombre: "Piquera A26",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
      3: {
        nombre: "Piquera A30",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
      4: {
        nombre: "Piquera A31",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
      5: {
        nombre: "Piquera A35",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
      6: {
        nombre: "Piquera A36",
        imagenes: ["public/img/chicopipe/chicopipe1.jpg"],
      },
    },
  },

  7: {
    nombre: "Soncuano",
    modalInfo: "modalespecie7",
    colmenas: {
      1: {
        nombre: "Piquera A7",
        imagenes: ["public/img/soncuano/soncuano1.jpg"],
      },
      2: {
        nombre: "Piquera A8",
        imagenes: ["public/img/soncuano/soncuano2.jpg"],
      },
      3: {
        nombre: "Piquera A11",
        imagenes: ["public/img/soncuano/soncuano2.jpg"],
      },
      4: {
        nombre: "Piquera A14",
        imagenes: ["public/img/soncuano/soncuano2.jpg"],
      },

    },
  },

  
};

const especies2022 = {
  1: {
    nombre: "Abejas Solitarias",
    modalInfo: "modalespecie1",
    colmenas: {
      1: {
        nombre: "Piquera A1",
        imagenes: [
          "public/img/abejassolitarias/abejassolitarias1.jpg",
          "public/img/abejassolitarias/abejassolitarias2.jpg",
        ],
      },
    },
  },

  2: {
    nombre: "Gicote Gato",
    modalInfo: "modalespecie2",

    colmenas: {
      1: {
        nombre: "",
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
    1: { nombre: "", imagenes: ["public/img/mariola/mariola1.jpg"] },
    2: { nombre: "", imagenes: ["public/img/mariola/mariola2.jpg"] },
    3: { nombre: "", imagenes: ["public/img/mariola/mariola4.jpg"] },
    4: { nombre: "", imagenes: ["public/img/mariola/mariola5.jpg","public/img/mariola/mariola6.jpg"] },
    5: { nombre: "", imagenes: ["public/img/mariola/mariola7.jpg","public/img/mariola/mariola8.jpg"] },
    6: { nombre: "", imagenes: ["public/img/mariola/mariola9.jpg"] },
    7: { nombre: "", imagenes: ["public/img/mariola/mariola10.jpg"] },
    8: { nombre: "", imagenes: ["public/img/mariola/mariola11.jpg","public/img/mariola/mariola12.jpg"] },
    9: { nombre: "", imagenes: ["public/img/mariola/mariola13.jpg","public/img/mariola/mariola14.jpg"] },
    10:{ nombre: "", imagenes: ["public/img/mariola/mariola15.jpg"] },
    11:{ nombre: "", imagenes: ["public/img/mariola/mariola16.jpg"] },
    12:{ nombre: "", imagenes: ["public/img/mariola/mariola17.jpg"] },
    13:{ nombre: "", imagenes: ["public/img/mariola/mariola18.jpg"] },
    14:{ nombre: "", imagenes: ["public/img/mariola/mariola19.jpg"] },
    15:{ nombre: "", imagenes: ["public/img/mariola/mariola20.jpg"] },
    16:{ nombre: "", imagenes: ["public/img/mariola/mariola21.jpg"] },
    17:{ nombre: "", imagenes: ["public/img/mariola/mariola22.jpg"] },
    18:{ nombre: "", imagenes: ["public/img/mariola/mariola23.jpg"] },
    19:{ nombre: "", imagenes: ["public/img/mariola/mariola24.jpg"] },
    20:{ nombre: "", imagenes: ["public/img/mariola/mariola25.jpg"] },
    21:{ nombre: "", imagenes: ["public/img/mariola/mariola26.jpg"] },
    22:{ nombre: "", imagenes: ["public/img/mariola/mariola27.jpg"] },
    23:{ nombre: "", imagenes: ["public/img/mariola/mariola28.jpg"] },
  }
},
  5: {
  nombre: "Mariola",
  modalInfo: "modalespecie5",
  colmenas: {
    1: { nombre: "", imagenes: ["public/img/mariola/mariola1.jpg"] },
    2: { nombre: "", imagenes: ["public/img/mariola/mariola2.jpg"] },
    3: { nombre: "", imagenes: ["public/img/mariola/mariola4.jpg"] },
    4: { nombre: "", imagenes: ["public/img/mariola/mariola5.jpg","public/img/mariola/mariola6.jpg"] },
    5: { nombre: "", imagenes: ["public/img/mariola/mariola7.jpg","public/img/mariola/mariola8.jpg"] },
    6: { nombre: "", imagenes: ["public/img/mariola/mariola9.jpg"] },
    7: { nombre: "", imagenes: ["public/img/mariola/mariola10.jpg"] },
    8: { nombre: "", imagenes: ["public/img/mariola/mariola11.jpg","public/img/mariola/mariola12.jpg"] },
    9: { nombre: "", imagenes: ["public/img/mariola/mariola13.jpg","public/img/mariola/mariola14.jpg"] },
    10:{ nombre: "", imagenes: ["public/img/mariola/mariola15.jpg"] },
    11:{ nombre: "", imagenes: ["public/img/mariola/mariola16.jpg"] },
    12:{ nombre: "", imagenes: ["public/img/mariola/mariola17.jpg"] },
    13:{ nombre: "", imagenes: ["public/img/mariola/mariola18.jpg"] },
    14:{ nombre: "", imagenes: ["public/img/mariola/mariola19.jpg"] },
    15:{ nombre: "", imagenes: ["public/img/mariola/mariola20.jpg"] },
    16:{ nombre: "", imagenes: ["public/img/mariola/mariola21.jpg"] },
    17:{ nombre: "", imagenes: ["public/img/mariola/mariola22.jpg"] },
    18:{ nombre: "", imagenes: ["public/img/mariola/mariola23.jpg"] },
    19:{ nombre: "", imagenes: ["public/img/mariola/mariola24.jpg"] },
    20:{ nombre: "", imagenes: ["public/img/mariola/mariola25.jpg"] },
    21:{ nombre: "", imagenes: ["public/img/mariola/mariola26.jpg"] },
    22:{ nombre: "", imagenes: ["public/img/mariola/mariola27.jpg"] },
    23:{ nombre: "", imagenes: ["public/img/mariola/mariola28.jpg"] },
  }
},
6: {
  nombre: "Chicopipe",
  modalInfo: "modalespecie6",
  colmenas: {
    1: { nombre: "", imagenes: ["public/img/chicopipe/chicopipe1.jpg"] },
    2: { nombre: "", imagenes: ["public/img/chicopipe/chicopipe2.jpg"] },
    3: { nombre: "", imagenes: ["public/img/chicopipe/chicopipe3.jpg"] },
    4: { nombre: "", imagenes: ["public/img/chicopipe/chicopipe4.jpg"] },
    5: { nombre: "", imagenes: [
      "public/img/chicopipe/chicopipe5.jpg",
      "public/img/chicopipe/chicopipe6.jpg",
      "public/img/chicopipe/chicopipe7.jpg"
    ] },
  }
},
 7: {
  nombre: "Soncuano",
  modalInfo: "modalespecie7",
  colmenas: {
    1: { nombre: "", imagenes: ["public/img/soncuano/soncuano1.jpg"] },
    2: { nombre: "", imagenes: ["public/img/soncuano/soncuano2.jpg"] },
    3: { nombre: "", imagenes: ["public/img/soncuano/soncuano3.jpg"] },
    4: { nombre: "", imagenes: ["public/img/soncuano/soncuano4.jpg"] },
    5: { nombre: "", imagenes: [
      "public/img/soncuano/soncuano5.jpg",
      "public/img/soncuano/soncuano6.jpg"
    ] },
  }
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

