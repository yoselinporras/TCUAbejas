/**
 * Datos del modal de especies
 * (puede venir luego de PHP, JSON o fetch)
 */
const infoEspecies = {
  modalespecie1: {
    nombreCientifico: "",
    nombreComun: "Abejas solitarias no identificadas",
    morfologia: "Cuentan con dos sub antenas cerca de las antenas principales. Algunas abejas solitarias tienen estructuras en sus cuerpos muy avanzadas para transportar el polen.",
    comportamiento: "Son solitarias, en el sentido de que cada hembra es fértil y por lo general habitan en un nido que construyen por sí mismas. Cuando se reproducen hacen un nido con varias celdas y cada una de estas celdas acoge un huevo. Las abejas madre tapan la entrada del nido para evitar que entren depredadores y otros enemigos naturales. No hay abejas obreras para estas especies. Las abejas solitarias, con o sin aguijón, son muy poco probable que piquen. No suelen producir ni miel ni cera de abejas. Se alimentan del néctar de flores específicas.",
    caracteristica: "Las abejas solitarias crean nidos en huecos de juncos o ramas, aberturas en madera y comúnmente construyen sus nidos en túneles en el suelo. La hembra normalmente crea pequeñas celdas con un huevo y acondiciona el espacio para la larva resultante, luego lo sella. Aunque las hembras solitarias hacen nidos individuales, algunas especies prefieren hacer nidos cerca de otros de la misma especie, dando la apariencia para el observador casual que es una abeja social. Es importante aclarar que el material del que están fabricadas todas las colmenas depende de los recursos que se tengan en su alrededor, pueden ser materiales orgánicos como madera masticada, arcillas, barro, ramas, pétalos de flores y lamentablemente en los últimos años inclusive se ha visto que algunas abejas han construido su colmena con plástico.",
    ubicacion: "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    referencias: [1,2],
    imagenes: [
      "public/img/abejassolitarias/abejassolitarias1.jpg",
      "public/img/abejassolitarias/abejassolitarias2.jpg"
    ]
  }, 

  modalespecie3: {
    nombreCientifico: "Partamonas orizabaensis",
    nombreComun: "Enreda Pelo",
    morfologia: "La longitud del cuerpo de una abeja adulta puede llegar a ser de 6 mm. Presenta una coloración negra brillante en el cuerpo con alas oscuras, mientras que la cabeza y tórax no presenta vellosidad. Algo característico de esta especie son las líneas verticales blancas en la parte interior de los ojos.",
    comportamiento:  "Son agresivas frente a cualquier perturbación cerca de su entorno, por lo que en la colmena se presentan un número considerable de abejas guardianas. Además de esto, si se llega a presentar un ataque por parte de estas abejas es duradero y con un número importante de abejas.",
    caracteristica:   "Construyen sus nidos en distintas bases, como huecos subterráneos, asociados a nidos de otros insectos sociales como hormigas, huecos de árboles y nidos de aves abandonados. El material que utilizan para sus nidos generalmente es cera, barro y resinas vegetales, puras o mezcladas con cerumen; el cerumen es un material grasoso que las abejas producen, es una mezcla de propóleo y cera. Algunas especies emplean tierra mezclada con cerumen, en partes estratégicas del nido, para reforzar su sostén y protección.",
    ubicacion: "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    referencias: [6,7],
    imagenes: [
      "public/img/enredapelo/enredapelo.jpg",
      
    ]
  },
  modalespecie4: {
    nombreCientifico: "Tetragona ziegleri",
    nombreComun: "Mariolon, miel de leche, barba de buey",
    morfologia:  "Esta especie presenta tonalidades de color naranja en el cuerpo, mientras que la mitad delantera de la cabeza y a los costados del tórax son de color amarillo. El tórax y la parte superior de la cabeza son de color café y finalmente las patas son de color negro. La longitud del cuerpo de un adulto puede llegar a medir entre 5-7 mm.",
    comportamiento: "La conducta de estas abejas es dócil y no defensivas, por lo que hay muy pocas abejas guardianas en la colmena.",
     caracteristica: "El nido presenta una estructura tubular sin porosidad. La forma del extremo de la colmena es irregular con forma ovalada. El tamaño se encuentra entre 1 cm de ancho y 15 cm de longitud.",
     ubicacion: "public/img/ubicaciongeografica/Especies-4-5.png",
    referencias: [6,9],
    imagenes: [
      "public/img/mariolon/mariolon1.jpg",
      "public/img/mariolon/mariolon2.jpg"
      
    ]
  },
  modalespecie5: {
    nombreCientifico: "Tetragonisca angostula",
    nombreComun: "Mariola",
    morfologia:"Es una especie pequeña en donde las abejas obreras pueden medir de 4 a 5 mm de longitud, tienen cabeza y tórax negro brillante, cuerpo delgado y abdomen amarillo. Las reinas desarrollan mucho el abdomen debido a la activación de los ovarios. Los machos presentan líneas o manchas amarillas en el rostro. No tienen aguijón. Las tibias de las patas posteriores poseen una estructura con forma de canasta para el polen. ",
   comportamiento:"Se movilizan y reproducen por enjambres (gran número de abejas). Son abejas pasivas, pero pueden defenderse mordiendo a la amenaza en situaciones donde se sientan en peligro. Generalmente, algunas abejas se mantienen sobrevolando en la entrada de la colmena y otras sobre la superficie de esta. Es una de las especies más importantes para la producción de miel en nuestro país. ",
    caracteristica: "Estas abejas pueden construir sus nidos en cavidades de troncos de árboles o en muros. La entrada del nido es tubular, construido con cera blanda, paredes delgadas y presentan pequeños agujeros. ",
    ubicacion: "public/img/ubicaciongeografica/Especies-4-5.png",
    referencias: [6,10],
    imagenes: [
       "public/img/mariola/mariola1.jpg",
      
    ]
  },
  modalespecie6: {
    nombreCientifico: "Nannotrigona mellaria",
    nombreComun: "Chicopipe",
    morfologia: "Es una especie de abeja pequeña en donde puede medir entre 5 a 6 mm de longitud, además de esto se le considera una abeja con cuerpo robusto comparada a las demás. El cuerpo es de color negro con una característica particular como el punteado y rayas amarillas en el tórax. Los ojos presentan tonalidades de color verde.",
     comportamiento:"Esta especie recolecta polen de una gran variedad de plantas por lo que tiene un gran potencial como polinizador en zonas urbanas. Además, esta especie tiene preferencia en la recolección de polen de leguminosas.",
     caracteristica: "Construyen las colmenas en cavidades de muros y troncos. Fabrican la entrada del nido en forma de tubo con cera. Son tímidas y tienden a huir cuando se sienten amenazadas. El material que utilizan para construcción de la colmena es principalmente cera con porosidades de color café claro. Puede presentar un tamaño de 1.2 cm de diámetro y de largo puede variar entre 8.5 a 57 cm. ",
     ubicacion: "public/img/ubicaciongeografica/Especies-6.png",
    referencias: [6],
    imagenes: [
      "public/img/chicopipe/chicopipe1.jpg",
      "public/img/chicopipe/chicopipe2.jpg",
      "public/img/chicopipe/chicopipe3.jpg",
      "public/img/chicopipe/chicopipe4.jpg",
    ]
  },
  modalespecie7: {
    nombreCientifico: "Scaptotrigona pectoralis",
    nombreComun: "Soncuano",
    morfologia:"El cuerpo de esta especie presenta una coloración amarillenta-anaranjada, con los ojos y tórax negros. Estas abejas son consideradas de tamaño mediano entre 6 a 7 mm de longitud. Presentan poca vellosidad.",
    comportamiento: "A pesar de que no tienen aguijón se defienden eficientemente, algunas huyen, pero otras son agresivas y atacan por medio de mordiscos y depósito de sustancias resinosas sobre la piel del individuo atacante. Las poblaciones más grandes son más agresivas. Tienen abejas guardianas en la colmena. Son fácilmente diferenciables porque producen varias reinas en celdas similares a las de las obreras. El tamaño de la población de las colonias varía entre 1500 a 6000 abejas. Es una de las principales especies meliponas productoras de miel en Costa Rica, destacando por su excelente calidad y buenas cantidades. ",
   caracteristica:"Muchos nidos se pueden ubicar en árboles. La forma de la colmena es tubular de color café oscuro y con porosidad muy fina. El extremo de la colmena es ovalado e irregular. Puede llegar a alcanzar entre 2.3 a 3.5 cm de diámetro y 3.5 a 77 cm de longitud. Es una de las especies que presenta mayor longitud de la colmena dentro de las abejas sin aguijón. Se dice que, entre más larga se construya la colmena, esta puede retorcerse en varias secciones.",
     ubicacion: "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    referencias: [6,11],
    imagenes: [
      "public/img/soncuano/soncuano1.jpg",
      
    ]
  },
  modalespecie8: {
    nombreCientifico: "Euglossa",
    nombreComun: "Abejas de las orquídeas",
    morfologia:"El cuerpo presenta tonalidades metálicas, azul y verde plateado. Presenta vellosidad al costado del tórax y en las patas. Alas de color negro. Son una especie de abejas robustas de entre 8 y 30 mm de longitud. Una de las características más destacables de esta especie es que su lengua puede medir hasta dos veces más que su cuerpo, es una característica que le permite acceder a fuentes de néctar que otras abejas no pueden alcanzar.",
   comportamiento:"Es conocida como la abeja de las orquídeas, no se encuentra dentro de las especies de las abejas meliponas, pero cumplen un papel ecológico sumamente importante debido a que estas abejas satisfacen las necesidades de polinización de muchas flores, especialmente de orquídeas. Su comportamiento es muy tranquilo con un estilo de vida solitario, no tienen reina y no producen miel. Las hembras tienen aguijón que puede producir un fuerte dolor si se ven amenazadas. Los machos no tienen aguijón, visitan las flores para alimentarse y polinizarlas, también recolectan y almacenan en su cuerpo una gran variedad de compuestos aromáticos para atraer pareja.",
     caracteristica: "Pueden hacer nidos en huecos de los troncos de los árboles o en tallos gruesos, ramas y también pueden crear túneles en el suelo. Emplean materiales vegetales que recogen del ambiente, como pedazos de hojas, pétalos y barro. La forma de los nidos puede variar dependiendo del material empleado, pero siempre presentará celdas en el interior.",
   ubicacion: "public/img/ubicaciongeografica/Especies-1-3-7-8.png",
    referencias: [12,13],
    imagenes: [
      "public/img/euglossa/euglossa1.jpg",
      "public/img/euglossa/euglossa2.jpg",
    ]
  }

};
const referencias={
  1:{
    referencia:"1. Anguebes, F; Pat, L; Pat, J; Hernández, P; Ramos, R. (2018). Condición y  perspectivas de la meliponicultura en comunidades mayas de la reserva de la biósfera Los Petenes, Campeche, México. Estudios de Cultura Maya LII: 227-254 (2018). Disponible en:",
    url:" http://www.scielo.org.mx/pdf/ecm/v52/0185-2574-ecm-52-227.pdf "
  },
  2:{
    referencia:"2. Barquero, L; Stamatti, G. (2014). Cría y manejo de abejas sin aguijón. Ediciones del Subtrópico. Fundación ProYungas. Disponible en:",
    url:" http://proyungas.org.ar/wp-content/uploads/2014/12/criaymanejodeabejassinaguijon.pdf "
  },
  3:{
    referencia:"Caldero, L; Pinilla, M; Parra, G. (2017). Abejas Solitarias.   Universidad Nacional de Colombia. Bogotá. Colombia. Recuperado de:",
    url:"https://www.researchgate.net/publication/317605207_Abejas_solitarias "
  },
  4:{
    referencia:"Parra, G. (2005). Abejas silvestres y polinización. Manejo Integrado de Plagas y Agroecología. Universidad Nacional de Colombia, Bogotá. Colombia. Pp: 7-20. Recuperado de:",
    url:"http://orton.catie.ac.cr/repdoc/A1865e/A1865e.pdf "
  },
    5: {
    referencia: "5. Figueroa, G; Prendas, P. (2015). Sistema Automático de Clasificación de Abejas sin Aguijón (Apidae: Meliponini) Basado en el Contorno y Venación de sus alas. Instituto Tecnológico de Costa Rica. Recuperado de:",
    url: "https://repositoriotec.tec.ac.cr/bitstream/handle/2238/6448/informe-doc1-abejas.pdf"
  },
  6: {
    referencia: "6. Espinoza, F; Padilla, S; Hernández, P; Zamora, L. (2015). Guía práctica de identificación de abejas nativas sin aguijón (Apidae, Meliponini) por medio de sus entradas. Facultad de Ciencias de la Tierra y el Mar, Centro de Investigaciones Apícolas Tropicales. Universidad Nacional de Costa Rica.",
    url: ""
  },
  7: {
    referencia: "7. Zepeda, R; Arnold, N; Vásquez, M; Aldasoro, M. (2018). Las abejas sin aguijón y su cultivo en Oaxaca, México: con catálogo de especies. Comisión Nacional para el Conocimiento y Uso de la Biodiversidad. Pp: 117-121. Recuperado de:",
    url: "https://www.ecosur.mx/abejas/wp-content/uploads/sites/4/2018/06/Abejas-sin-aguijo%CC%81n-de-Oaxaca.pdf"
  },
  9: {
    referencia: "9. Figueroa, G; Prendas, J; Ramírez, M; Aguilar, I; Herrera, E; Travieso, G. (2015). Identificación de abejas sin aguijón (Apidae: Meliponini) a partir de la clasificación de los descriptores SIFT de una imagen del ala derecha anterior. Tecnología en Marcha. Edición especial. Pp: 51-63. Recuperado de:",
    url: "https://www.scielo.sa.cr/pdf/tem/v29s2/0379-3982-tem-29-s2-51.pdf"
  },
  10: {
    referencia: "10. Martínez, D. (2015). Estandarización de protocolo para la división de nidos de la especie Tetragonisca angustula y evaluación de su adaptación a diferentes diseños de colmenas en La Mesa (Cundinamarca). Universidad de Cundinamarca, Colombia. Recuperado de:",
    url: "https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1441/Protocolo%20cr%C3%ADa%20In%20vitro%20T.%20angustula.pdf"
  },
  11: {
    referencia: "11. Vásquez, M. (2007). Recursos Polínicos Utilizados por la Abeja Nativa Shuruya (Scaptotrigona pectoralis) (Apidae: Meliponini) en un Meliponario de la parte baja de los Cipresales en Pachalum, Quiché, durante la época seca y lluviosa. Universidad de San Carlos de Guatemala. Recuperado de:",
    url: "https://biblioteca-farmacia.usac.edu.gt/tesis/B167.pdf"
  },
  12: {
    referencia: "12. Weng, Ju. (2005). Morfología comparativa de las tibias posteriores modificadas de los machos en cuatro géneros de abejas Euglosinas (Apinae: Euglossini) y biología de una larva polinívora, Allograpta micrura (Diptera: Syrphidae), en flores de Castilleja talamancensis (Schrophulariaceae). Universidad de Costa Rica. Recuperado de:",
    url: "http://repositorio.sibdi.ucr.ac.cr:8080/jspui/bitstream/123456789/4196/1/25713.pdf"
  },
  13: {
    referencia: "13. Parra, A. (2009). La arquitectura de nidos de Euglossa (Euglossa) hemichlora (Hymenoptera: Apidae: Euglossini). Revista Colombiana de Entomología 35(2): 283-285. Recuperado de:",
    url: "http://www.scielo.org.co/pdf/rcen/v35n2/v35n2a26.pdf"
  }

}

/**
 * Función pública para abrir el modal
 * Recibe: "modalespecie1", "modalespecie2", etc.
 */

function abrirModalEspecie(modalKey) {
 
  const data = infoEspecies[modalKey];
  if (!data) {
    
    console.warn("No existe info para:", modalKey);
    return;
  }
 
  // Texto
  document.getElementById("nombrecientifico").textContent = data.nombreCientifico;
  document.getElementById("nombrecomun").textContent = data.nombreComun;
  document.getElementById("morfologia").textContent = data.morfologia;
  document.getElementById("comportamiento").textContent = data.comportamiento;
  document.getElementById("caracteristica").textContent = data.caracteristica;
  document.getElementById("referencias").innerHTML = referenciasDinamicas(data.referencias);

  // Imagen ubicación
  const imgUbicacion = document.getElementById("img-ubicacion");
  imgUbicacion.src = data.ubicacion;
  imgUbicacion.alt = data.nombreComun;

  // Carousel
  const carousel = document.getElementById("contenidocarousel");
  carousel.innerHTML = "";

  data.imagenes.forEach((img, index) => {
    carousel.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100">
      </div>
    `;
  });

  // Mostrar modal
  $("#mymodals").modal("show");
}

function referenciasDinamicas(listaReferencias) {
  return listaReferencias
    .map(id => {
      if (!referencias[id]) return "";
      return `${referencias[id].referencia}
<a href="${referencias[id].url}" target="_blank">${referencias[id].url}</a>`;
    })
    .join("<br><br>");
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("mymodals")) return;

  document.querySelectorAll(".colmena-card").forEach(card => {
    card.addEventListener("click", () => {
      const especie = card.dataset.especie;
      abrirModalEspecie(especie);
    });
  });
});

