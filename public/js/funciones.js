// Arreglos globales de almacenamiento para Leaflet
var especie1 = [];
var especie2 = [];
var especie3 = [];
var especie4 = [];
var especie5 = [];
var especie6 = [];
var especie7 = [];
var especie8 = [];

// Mapeo unificado para tooltips en el hover
const nombresEspecies = {
  1: "Abejas solitarias",
  2: "Jicote Gato",
  3: "Enredapelo",
  4: "Mariolón",
  5: "Mariola",
  6: "Chicopipe",
  7: "Soncuano",
  8: "Euglossa"
};

// Variable de estado para controlar la procedencia de datos (2022 o 2026)
let anioActivo = "2026";

// // ==========================================
// // SECCIÓN JUEGOS
// // ==========================================
function showMazegame() {
    var width = window.innerWidth;
    if (width >= 992) {
        if ($('#maze').length) {
            
        } else {
            $('#puzzle').after('<li><a class="dropdown-item" id="maze" href="?controlador=Maze&accion=mostrarMaze">Laberinto</a></li>');
        }
    } else {
        $('#maze').remove();
    }
}

function showMemorygame() {
    var width = window.innerWidth;
    if (width >= 880) {
        if ($('#memory').length) {
            
        } else {
            $('#pollen').after('<li><a class="dropdown-item" id="memory" href="?controlador=MemoryMatch&accion=mostrar">Memoria</a></li>');
        }
    } else {
        $('#memory').remove();
    }
}

$(window).resize(function () {
    showMazegame();
    showMemorygame();
});
// ==========================================
// MOTOR UNIFICADO (Puntos, Popups y Colmenas)
// ==========================================

/**
 * Genera marcadores Leaflet y enlaza inmediatamente eventos click y hover.
 */
function crearMarkersEspecie(especieArray, coordsArray, iconConfig, idEspecie) {
  const nombreEspecie = nombresEspecies[idEspecie] || "Especie";

  for (let i = 0; i < coordsArray.length; i++) {
    const idColmena = i + 1; // Índice incremental de la colmena

    const marker = L.marker(coordsArray[i], {
      icon: L.ExtraMarkers.icon({
        icon: iconConfig.icon,
        iconColor: "white",
        markerColor: iconConfig.color,
        shape: iconConfig.shape,
        prefix: iconConfig.prefix,
      }),
    }).addTo(map);

    // 1. EVENTO HOVER (Mostrar popup con el nombre de la especie)
    marker.on("mouseover", function () {
      this.bindPopup(nombreEspecie).openPopup();
    });
    marker.on("mouseout", function () {
      this.closePopup();
    });

    // 2. EVENTO CLICK (Abrir modal con la colmena de la especie correspondiente)
    marker.on("click", function () {
      const dbEspecies = (anioActivo === "2026") ? especies2026 : especies2022;
      abrirColmena(dbEspecies, idEspecie, idColmena);
    });

    // Guardamos la referencia en el índice correcto
    especieArray[idColmena] = marker;
  }
}

// ==========================================
// INICIALIZADORES POR AÑO
// ==========================================
function limpiarArraysEspecies() {
  especie1 = []; especie2 = []; especie3 = []; especie4 = [];
  especie5 = []; especie6 = []; especie7 = []; especie8 = [];
}

function initmarkers2026() {
  anioActivo = "2026";
  limpiarArraysEspecies();

  // Especie 2 - Gicote Gato
  crearMarkersEspecie(especie2, [[-97.78125, 456.8125]], { icon: "fa-circle", color: "blue", shape: "circle", prefix: "far" }, 2);

  // Especie 5 - Mariola
  crearMarkersEspecie(especie5, [
    [-98.59375, 455.75], //A2
    [-104.1875, 454.9375],//A3
    [-109.28125, 458.125],//A4
    [-106.75, 467.53125],//A5
    [-106.001220703125, 460.34375], //A6
    [-99.1458330154419,490.0625],//A9
    [-92.35416650772095,469.84375],//A10
    [-86.09375,493.9375],//A11
    [-88.43749904632568,491.66666412353516],//A12
    [-88.3333330154419,495.375], //A14
    [-87.9375,521.78125],//A15
    [-87.875,519.375],//A16
    [-87.4375,514.1875],//A17
    [-91.375,516.0625],//A19
    [-102.75,533.75],//A20
    [-94.25,530.625],//A21
    [-93.625,539.75],//A22
    [-89.625,559.75],//A23
    [-112.8125,465.75],//A24
    [-112.5,468.3125],//A25
    [-200.625,435.375],//A27
    [-191.75,435.25],//A28
    
    [-87,459.625],//A32
    [-110.9375,478.8125],//A37
    [-50.625,655.375],//A34
    [-104.78125,463.53125],//A38
    [-89.71875,413.96875],//A39
    [-91.21875,479.34375],//A43
    [-86.125,525.59375],//A44
    [-85.75,499.875],//A46
    [-97.375,533],//A48
    [-98.78125,534.09375],//A49
    [-104.4375,471.59375],//A42
    [-103.75,529.75],//A50
    [-91.46875,472.375],//A51
    [-91.0625,500.90625],//A52
    [-65.4375,454.9375],//A53
      // [-121.40625,470.1875],
      // [-140.1875,385.7291660308838],
      // [-205.8125,436.5625]

  ], { icon: "fa-certificate", color: "yellow", shape: "star", prefix: "fas" }, 5);

  // Especie 6 - Chicopipe
  crearMarkersEspecie(especie6, [
   [-99.3125,456.9375],//A35
    [-102.0625,457.1875],//A36
    [-91.625,513.5625],//A18|
    [-112.875,469.875],//A26
    [-250,600.5],//A30
    [-91.875,459.5],//A31
    [-162.75,400.5],//A47
    [-251.75,592.5],//A29
   
  ], { icon: "fa-circle", color: "black", shape: "circle", prefix: "fas" }, 6);

  // Especie 7 - Soncuano
  crearMarkersEspecie(especie7, [
    [-100.9375,490.25],//A7
    [-99.53125,490.46875],//A8
    [-88.65625,493.15625],//A13
    [-62.25,469.5],//A33
    //[-99.71875, 488.21875],//A40
    [-159.875,423.625],//A41
    // [-105.90625, 491.21875],
    // [-89.3125, 498],
    // [-161.1666660308838, 423.0208330154419]
  ], { icon: "fa-star", color: "cyan", shape: "square", prefix: "far" }, 7);
}

function initmarkers2022() {
  anioActivo = "2022";
  limpiarArraysEspecies();

  // Especie 1
  crearMarkersEspecie(especie1, [[-211.40234375, 712.125]], { icon: "fa-circle", color: "blue", shape: "circle", prefix: "far" }, 1);

  // Especie 3
  crearMarkersEspecie(especie3, [[-173.77734375, 546.875]], { icon: "fa-star", color: "green", shape: "penta", prefix: "far" }, 3);

  // Especie 4
  crearMarkersEspecie(especie4, [[-216.15234375, 489.875]], { icon: "fa-play", color: "violet", shape: "penta", prefix: "fas" }, 4);

  // Especie 5
  crearMarkersEspecie(especie5, [
    [-193.52734375, 441.5], [-87.90234375, 478.75], [-103.3046875, 470.5],
    [-111.15234375, 481.5], [-120.77734375, 474.375], [-118.02734375, 528.75],
    [-101.65234375, 497], [-90.40234375, 496.125], [-95.02734375, 488.875],
    [-99.02734375, 526.75], [-90.951171875, 510.0625], [-91.15234375, 547.625],
    [-91.0546875, 556.75], [-79.5546875, 503], [-85.27734375, 522.25],
    [-89.65234375, 530.25], [-105.15234375, 538.375], [-79.513671875, 456],
    [-77.40234375, 467.25], [-65.65234375, 414.375], [-60.77734375, 431.375],
    [-59.15234375, 454], [-50.65234375, 655.625]
  ], { icon: "fa-certificate", color: "yellow", shape: "star", prefix: "fas" }, 5);

  // Especie 6
  crearMarkersEspecie(especie6, [
    [-88.02734375, 426.5], [-90.77734375, 458.125], [-112.90234375, 469.625],
    [-100.27734375, 514.375], [-182.52734375, 556.625]
  ], { icon: "fa-circle", color: "black", shape: "circle", prefix: "fas" }, 6);

  // Especie 7
  crearMarkersEspecie(especie7, [
    [-131.15234375, 380.75], [-108.15234375, 399], [-117.40234375, 460.875],
    [-128.15234375, 466], [-83.40234375, 487.375]
  ], { icon: "fa-star", color: "cyan", shape: "square", prefix: "far" }, 7);

  // Especie 8
  crearMarkersEspecie(especie8, [[-220.40234375, 395]], { icon: "fa-square", color: "orange", shape: "star", prefix: "fas" }, 8);
}

// ==========================================
// VISIBILIDAD DE CAPAS (MARCADORES)
// ==========================================
function quitarTodosLosMarcadores() {
  [especie1, especie2, especie3, especie4, especie5, especie6, especie7, especie8].forEach(quitarMarcadoresDeArray);
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
  // Configuración de clics individuales dinámicos (#especie1, #especie2, etc.)
  for (let i = 1; i <= 8; i++) {
    $(`#especie${i}`).on("click", function () {
      quitarTodosLosMarcadores();
      const especieArray = window[`especie${i}`];
      for (let j = 1; j < especieArray.length; j++) {
        if (especieArray[j]) {
          especieArray[j].addTo(map);
        }
      }
    });
  }

  // Mostrar todos los marcadores 2026
  $("#todas2026").on("click", function () {
    quitarTodosLosMarcadores();
    initmarkers2026();
  });

  // Mostrar todos los marcadores 2022
  $("#todas2022").on("click", function () {
    quitarTodosLosMarcadores();
    initmarkers2022();
  });
}

// ==========================================
// SISTEMA DE MODAL DE COLMENAS
// // ==========================================
// Variables de estado de Zoom globales y persistentes para el componente Colmena
let zoomScale = 1; 
let translateX = 0;
let translateY = 0;
const ZOOM_SPEED = 0.15;
const MAX_ZOOM = 10;
const MIN_ZOOM = 1;

// Variables para el control de arrastre (compatible con mouse y táctil)
let isDragging = false;
let startX = 0;
let startY = 0;

// Variables específicas para el gesto táctil de pellizco (Pinch-to-Zoom)
let isPinching = false;
let startTouchDistance = 0;
let startTouchScale = 1;

function abrirColmena(especiesObj, idEspecie, idColmena = 1) {
  const especie = especiesObj[idEspecie];
  if (!especie) return;

  const colmena = especie.colmenas[idColmena];
  if (!colmena) return;

  const titulo = document.getElementById("tituloColmena");
  if (titulo) {
    titulo.textContent = `${especie.nombre} – ${colmena.nombre || "Colmena sin nombre"}`;
  }

  const contenedor = document.getElementById("carouselContenido");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  
  // Resetear estados al abrir
  zoomScale = 1; 
  translateX = 0;
  translateY = 0;
  isDragging = false;
  isPinching = false;

  colmena.imagenes.forEach((imgUrl, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item colmena-carousel-item ${index === 0 ? "active" : ""}`;

    const zoomContainer = document.createElement("div");
    zoomContainer.className = "zoom-container";

    const img = document.createElement("img");
    img.className = "zoomable-img";
    img.src = imgUrl;

    zoomContainer.appendChild(img);
    item.appendChild(zoomContainer);
    contenedor.appendChild(item);
  });

  const $carousel = $('#carouselColmena');
  $carousel.carousel({
    interval: false,
    ride: false,
    touch: false // Desactiva el cambio de imagen táctil nativo de Bootstrap para evitar conflictos
  });

  inicializarZoomEnActivo();

  const btn = document.getElementById("btnInfoEspecie");
  if (btn) {
    btn.onclick = () => {
      const modalKey = especie.modalInfo.replace("#", "");
      $("#modalColmena").modal("hide");
      $("#modalColmena").one("hidden.bs.modal", () => {
        if (typeof abrirModalEspecie === 'function') {
          abrirModalEspecie(modalKey);
        }
      });
    };
  }

  $("#modalColmena").modal("show");
}

function inicializarZoomEnActivo() {
  zoomScale = 1;
  translateX = 0;
  translateY = 0;
  isDragging = false;
  isPinching = false;

  const activeItem = document.querySelector('.colmena-carousel-item.active');
  if (!activeItem) return;

  const img = activeItem.querySelector('.zoomable-img');
  const container = activeItem.querySelector('.zoom-container');

  if (img && container) {
    img.style.transform = 'scale(1) translate(0px, 0px)';
    container.style.cursor = 'grab';

    // Limpiamos los eventos previos clonando el nodo de forma segura
    const oldContainer = container;
    const newContainer = oldContainer.cloneNode(true);
    oldContainer.parentNode.replaceChild(newContainer, oldContainer);

    const newImg = newContainer.querySelector('.zoomable-img');

    // --- ZOOM CON RUEDA DEL MOUSE & TRACKPAD ---
    newContainer.addEventListener('wheel', function(e) {
      e.preventDefault();
      const oldScale = zoomScale;
      
      // Control de zoom fino para mousepads y ruedas rápidas
      let factor = ZOOM_SPEED;
      if (Math.abs(e.deltaY) < 50) {
        factor = 0.05; // Ajuste ultra-suave para trackpads (scroll fino)
      }

      if (e.deltaY < 0) {
        zoomScale = Math.min(zoomScale + factor, MAX_ZOOM);
      } else {
        zoomScale = Math.max(zoomScale - factor, MIN_ZOOM);
      }

      if (zoomScale === 1) {
        translateX = 0;
        translateY = 0;
      } else {
        translateX = translateX * (zoomScale / oldScale);
        translateY = translateY * (zoomScale / oldScale);
      }

      aplicarTransformacion(newImg, translateX, translateY);
    }, { passive: false });

    // --- MANEJO DE EVENTOS DE ARRASTRE Y PELLIZCO (PANTALLAS TÁCTILES & RATÓN) ---
    
    // Iniciar evento táctil
    newContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        // Un solo dedo: Arrastre (Pan)
        isPinching = false;
        iniciarArrastre(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length === 2) {
        // Dos dedos: Zoom (Pinch)
        isDragging = false;
        isPinching = true;
        startTouchDistance = calcularDistancia(e.touches[0], e.touches[1]);
        startTouchScale = zoomScale;
      }
    }, { passive: true });

    // Iniciar evento de mouse tradicional
    newContainer.addEventListener('mousedown', (e) => {
      iniciarArrastre(e.clientX, e.clientY);
      e.preventDefault();
    });

    function iniciarArrastre(clientX, clientY) {
      if (zoomScale > 1) {
        isDragging = true;
        newContainer.style.cursor = 'grabbing';
        startX = clientX - translateX;
        startY = clientY - translateY;
      }
    }

    // Calcular distancia geométrica entre dos puntos táctiles
    function calcularDistancia(t1, t2) {
      return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
    }

    // Procesar movimientos globales del mouse
    const alMoverMouse = (e) => {
      if (!isDragging) return;
      moverArrastre(e.clientX, e.clientY);
    };

    // Procesar movimientos globales táctiles (Arrastre o Pellizco)
    const alMoverTouch = (e) => {
      if (isPinching && e.touches.length === 2) {
        // Multi-touch Zoom
        const currentDistance = calcularDistancia(e.touches[0], e.touches[1]);
        if (startTouchDistance > 0) {
          const ratio = currentDistance / startTouchDistance;
          const oldScale = zoomScale;
          
          zoomScale = Math.min(Math.max(startTouchScale * ratio, MIN_ZOOM), MAX_ZOOM);
          
          if (zoomScale === 1) {
            translateX = 0;
            translateY = 0;
          } else {
            translateX = translateX * (zoomScale / oldScale);
            translateY = translateY * (zoomScale / oldScale);
          }
          aplicarTransformacion(newImg, translateX, translateY);
        }
      } else if (isDragging && e.touches.length === 1) {
        // Arrastre con un solo dedo
        moverArrastre(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    function moverArrastre(clientX, clientY) {
      translateX = clientX - startX;
      translateY = clientY - startY;
      aplicarTransformacion(newImg, translateX, translateY);
    }

    // Finalizar interacciones (ratón o táctil)
    const finalizarInteraccion = () => {
      if (isDragging) {
        isDragging = false;
        newContainer.style.cursor = zoomScale > 1 ? 'grab' : 'default';
      }
      isPinching = false;
      window.removeEventListener('mousemove', alMoverMouse);
      window.removeEventListener('touchmove', alMoverTouch);
      window.removeEventListener('mouseup', finalizarInteraccion);
      window.removeEventListener('touchend', finalizarInteraccion);
    };

    // Agregar escuchadores dinámicos al iniciar la acción
    newContainer.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', alMoverMouse);
      window.addEventListener('mouseup', finalizarInteraccion);
    });

    newContainer.addEventListener('touchstart', () => {
      window.addEventListener('touchmove', alMoverTouch, { passive: true });
      window.addEventListener('touchend', finalizarInteraccion);
    });
  }
}

function aplicarTransformacion(elemento, tx = 0, ty = 0) {
  if (!elemento) return;
  if (zoomScale === 1) {
    translateX = 0;
    translateY = 0;
    elemento.style.transform = `scale(1) translate(0px, 0px)`;
  } else {
    elemento.style.transform = `scale(${zoomScale}) translate(${tx / zoomScale}px, ${ty / zoomScale}px)`;
  }
}

// Escuchar cambios de carrusel de forma segura
$(document).off('slid.bs.carousel', '#carouselColmena').on('slid.bs.carousel', '#carouselColmena', function () {
  inicializarZoomEnActivo();
});

// Control de botones de lupa
function controlarZoomViaBoton(incremento) {
  const activeImg = document.querySelector('.colmena-carousel-item.active .zoomable-img');
  if (activeImg) {
    const oldScale = zoomScale;
    zoomScale = Math.min(Math.max(zoomScale + incremento, MIN_ZOOM), MAX_ZOOM);
    
    if (zoomScale === 1) {
      translateX = 0;
      translateY = 0;
    } else {
      translateX = translateX * (zoomScale / oldScale);
      translateY = translateY * (zoomScale / oldScale);
    }
    
    aplicarTransformacion(activeImg, translateX, translateY);
  }
}

// ==========================================
// DICCIONARIOS DE INFORMACIÓN DE COLMENAS
// ==========================================
const especies2026 = {
  2: {
    nombre: "Gicote Gato",
    modalInfo: "modalespecie2",
    colmenas: {
      1: { nombre: "Piquera A1", imagenes: ["public/img/jicote-gato/A1.jpg"] }
    }
  },
  5: {
    nombre: "Mariola",
    modalInfo: "modalespecie5",
    colmenas: {
      1: { nombre: "Piquera A2", imagenes: ["public/img/mariola/2026/A2.jpg"] },
      2: { nombre: "Piquera A3", imagenes: ["public/img/mariola/2026/A3.jpg", "public/img/mariola/2026/A3-2.jpg"] },
      3: { nombre: "Piquera A4", imagenes: ["public/img/mariola/2026/A4.JPG"] },
      4: { nombre: "Piquera A5", imagenes: ["public/img/mariola/2026/A5.jpg"] },
      5: { nombre: "Piquera A6", imagenes: ["public/img/mariola/2026/A6 .jpg"] },
      6: { nombre: "Piquera A9", imagenes: ["public/img/mariola/2026/A9.jpg", "public/img/mariola/2026/A9-2.jpg"] },
      7: { nombre: "Piquera A10", imagenes: ["public/img/mariola/2026/A10-1.jpg", "public/img/mariola/2026/A10-2.jpg", "public/img/mariola/2026/A10-3.jpg", "public/img/mariola/2026/A10-4.jpg"] },
      8: { nombre: "Piquera A11", imagenes: ["public/img/mariola/2026/A11-1.jpg", "public/img/mariola/2026/A11-2.jpg"] },
      9: { nombre: "Piquera A12", imagenes: ["public/img/mariola/2026/A12.jpg"] },
      10: { nombre: "Piquera A14", imagenes: ["public/img/mariola/2026/A14.jpg"] },
      11: { nombre: "Piquera A15", imagenes: ["public/img/mariola/2026/A15-1.jpg", "public/img/mariola/2026/A15-2.jpg", "public/img/mariola/2026/A15-3.jpg"] },
      12: { nombre: "Piquera A16", imagenes: ["public/img/mariola/2026/A16-1.jpg", "public/img/mariola/2026/A16-2.jpg"] },
      13: { nombre: "Piquera A17", imagenes: ["public/img/mariola/2026/A17-1.jpg", "public/img/mariola/2026/A17-2.jpg"] },
      14: { nombre: "Piquera A19", imagenes: ["public/img/mariola/2026/A19-1.jpg", "public/img/mariola/2026/A19-2.jpg"] },
      15: { nombre: "Piquera A20", imagenes: ["public/img/mariola/2026/A20.jpg"] },
      16: { nombre: "Piquera A21", imagenes: ["public/img/mariola/2026/A21-1.jpg", "public/img/mariola/2026/A21-2.jpg"] },
      17: { nombre: "Piquera A22", imagenes: ["public/img/mariola/2026/A22.jpg"] },
      18: { nombre: "Piquera A23", imagenes: ["public/img/mariola/2026/A23.jpg"] },
      19: { nombre: "Piquera A24", imagenes: ["public/img/mariola/2026/A24-1.jpg", "public/img/mariola/2026/A24-2.jpg"] },
      20: { nombre: "Piquera A25", imagenes: ["public/img/mariola/2026/A25-1.jpg", "public/img/mariola/2026/A25-2.jpg", "public/img/mariola/2026/A25-3.jpg"] },
      21: { nombre: "Piquera A27", imagenes: ["public/img/mariola/2026/A27-1.jpg", "public/img/mariola/2026/A27-2.jpg", "public/img/mariola/2026/A27-3.jpg"] },
      22: { nombre: "Piquera A28", imagenes: ["public/img/mariola/2026/A28.jpg"] },
    
      23: { nombre: "Piquera A32", imagenes: ["public/img/mariola/2026/A32.jpg"] },
      24: { nombre: "Piquera A37", imagenes: ["public/img/mariola/2026/A37-1.jpg","public/img/mariola/2026/A37-2.jpg"] },
      25: { nombre: "Piquera A34", imagenes: ["public/img/mariola/2026/A34.jpg"] },
      26: { nombre: "Piquera A38", imagenes: ["public/img/mariola/2026/A38.jpg"] },
      27: { nombre: "Piquera A39", imagenes: ["public/img/mariola/2026/A39.jpg"] },
      28: { nombre: "Piquera A43", imagenes: ["public/img/mariola/2026/A43.jpg"] },
      29: { nombre: "Piquera A44", imagenes: ["public/img/mariola/2026/A44-1.jpg","public/img/mariola/2026/A44-2.jpg","public/img/mariola/2026/A44-3.jpg"] },
      30: { nombre: "Piquera A46", imagenes: ["public/img/mariola/2026/A46.jpg"] },
      31: { nombre: "Piquera A48", imagenes: ["public/img/mariola/2026/A48.jpg"] },
      32: { nombre: "Piquera A49", imagenes: ["public/img/mariola/2026/A49.jpg"] },
      33: { nombre: "Piquera A42", imagenes: ["public/img/mariola/2026/A42.jpg"] },
      34: { nombre: "Piquera A50", imagenes: ["public/img/mariola/2026/A50-1.jpg", "public/img/mariola/2026/A50-2.jpg", "public/img/mariola/2026/A50-3.jpg", "public/img/mariola/2026/A50-4.jpg"] },
      35: { nombre: "Piquera A51", imagenes: ["public/img/mariola/2026/A51-1.jpg", "public/img/mariola/2026/A51-2.jpg", "public/img/mariola/2026/A51-3.jpg"] },
      36: { nombre: "Piquera A52", imagenes: ["public/img/mariola/2026/A52-1.jpg", "public/img/mariola/2026/A52-2.jpg"] },
      37: { nombre: "Piquera A53", imagenes: ["public/img/mariola/2026/A53-1.jpg"] }
    }
  },
  6: {
    nombre: "Chicopipe",
    modalInfo: "modalespecie6",
    colmenas: {
      1: { nombre: "Piquera A35", imagenes: ["public/img/chicopipe/2026/A35.jpg"] },
      2: { nombre: "Piquera A36", imagenes: ["public/img/chicopipe/2026/A36-1.jpg","public/img/chicopipe/2026/A36-2.jpg"] },
      3: { nombre: "Piquera A18", imagenes: ["public/img/chicopipe/2026/A18.jpg"] },
      4: { nombre: "Piquera A26", imagenes: ["public/img/chicopipe/2026/A26-1.jpg","public/img/chicopipe/2026/A26-2.jpg"] },
      5: { nombre: "Piquera A30", imagenes: ["public/img/chicopipe/2026/A30.jpg","public/img/chicopipe/2026/A30-2.jpg"] },
      6: { nombre: "Piquera A31", imagenes: ["public/img/chicopipe/2026/A31-1.jpg","public/img/chicopipe/2026/A31-2.jpg"] },
      7: { nombre: "Piquera A47", imagenes: ["public/img/chicopipe/2026/A47-1.jpg","public/img/chicopipe/2026/A47-2.jpg"] },
      8: { nombre: "Piquera A29", imagenes: ["public/img/chicopipe/2026/A29-1.jpg", "public/img/chicopipe/2026/A29-2.jpg", "public/img/chicopipe/2026/A29-3.jpg"] },
    }
  },
  7: {
    nombre: "Soncuano",
    modalInfo: "modalespecie7",
    colmenas: {
      1: { nombre: "Piquera A7", imagenes: ["public/img/soncuano/2026/A7.jpg"] },
      2: { nombre: "Piquera A8", imagenes: ["public/img/soncuano/2026/A8-1.jpg","public/img/soncuano/2026/A8-2.jpg"] },
      3: { nombre: "Piquera A13", imagenes: ["public/img/soncuano/2026/A13-1.jpg", "public/img/soncuano/2026/A13-2.jpg", "public/img/soncuano/2026/A13-3.jpg"] },
      4: { nombre: "Piquera A33", imagenes: ["public/img/soncuano/2026/A33.jpg"] },
      5: { nombre: "Piquera A41", imagenes: ["public/img/soncuano/2026/A41.jpg","public/img/soncuano/2026/A41-2.jpg", "public/img/soncuano/2026/A41-3.jpg"] }
    }
  }
};

const especies2022 = {
  1: {
    nombre: "Abejas Solitarias",
    modalInfo: "modalespecie1",
    colmenas: {
      1: { nombre: "Piquera A1", imagenes: ["public/img/abejassolitarias/abejassolitarias1.jpg", "public/img/abejassolitarias/abejassolitarias2.jpg"] }
    }
  },
  2: {
    nombre: "Gicote Gato",
    modalInfo: "modalespecie2",
    colmenas: {
      1: { nombre: "Colmena Única", imagenes: [] }
    }
  },
  3: {
    nombre: "Enredapelo",
    modalInfo: "modalespecie3",
    colmenas: {
      1: { nombre: "Colmena Única", imagenes: ["public/img/enredapelo/enredapelo.jpg"] }
    }
  },
  4: {
    nombre: "Mariolón",
    modalInfo: "modalespecie4",
    colmenas: {
      1: { nombre: "Colmena Principal", imagenes: ["public/img/mariolon/mariolon1.jpg", "public/img/mariolon/mariolon2.jpg"] }
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
      23:{ nombre: "", imagenes: ["public/img/mariola/mariola28.jpg"] }
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
      5: { nombre: "", imagenes: ["public/img/chicopipe/chicopipe5.jpg","public/img/chicopipe/chicopipe6.jpg","public/img/chicopipe/chicopipe7.jpg"] }
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
      5: { nombre: "", imagenes: ["public/img/soncuano/soncuano5.jpg","public/img/soncuano/soncuano6.jpg"] }
    }
  },
  8: {
    nombre: "Euglossa",
    modalInfo: "modalespecie8",
    colmenas: {
      1: { nombre: "Colmena Principal", imagenes: ["public/img/euglossa/euglossa1.jpg", "public/img/euglossa/euglossa2.jpg"] }
    }
  }
};