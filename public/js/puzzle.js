var piezasUbicadas = [];

var puzzleImage = "";
var puzzleName = "";

let segundos = 0;
let intervalo = null;

function iniciarCronometro() {
    intervalo = setInterval(() => {
        segundos++;
        actualizarTiempo();
    }, 1000);
}

function actualizarTiempo() {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;

    const formato =
        String(minutos).padStart(2, '0') + ":" +
        String(seg).padStart(2, '0');

    document.getElementById("tiempo").textContent = formato;
}

function detenerCronometro() {
    clearInterval(intervalo);
}

$(document).ready(function () {

    puzzleName = "puzzle" + NIVEL_ACTUAL;
    puzzleImage = 'public/img/puzzles/fondos/' + puzzleName + '.png';

    configurarFondo();
    configurarDimensiones();
    configurarDragAndDrop();

    randomizarPosicionDePiezas();

    iniciarCronometro();

    $('#reiniciar').on('click', function () {
        reiniciar();
    });

});

function configurarFondo() {
    $('#matriz').css({
        'background': 'linear-gradient(rgba(200,200,200,.5), rgba(200,200,200,.5)), url(' + puzzleImage + ')',
        'background-repeat': 'no-repeat',
        'background-size': 'contain'
    });
}

function configurarDimensiones() {

    let dimension = Math.sqrt(TOTAL_PIEZAS);

    if (window.innerWidth < 540) {
        $('#matriz').css('width', (window.innerWidth * 0.53) + 'px');
        $('#matriz').css('height', (window.innerWidth * 0.53) + 'px');
    } else {
        $('#matriz').css('width', (window.innerWidth * 0.33) + 'px');
        $('#matriz').css('height', (window.innerWidth * 0.33) + 'px');
    }

    $('.movil').attr("width", ($('#matriz').width()) / dimension);
    $('.movil').attr("height", ($('#matriz').height()) / dimension);

    $('td').attr("width", ($('#matriz').width()) / dimension);
    $('td').attr("height", ($('#matriz').width()) / dimension);

    $('.campo-piezas').css('width', ($('.movil').width() * dimension) + 'px');
    $('.campo-piezas').css('height', ($('.movil').width() * dimension) + 'px');
}

function configurarDragAndDrop() {

    $('.movil').draggable({
        containment: $("#campo-fondo"),
        scroll: false
    });

    let dimension = Math.sqrt(TOTAL_PIEZAS);

    for (let i = 0; i < TOTAL_PIEZAS; i++) {

        $("#pieza" + i).droppable({
            accept: "#" + i,
            tolerance: "intersect",

            drop: function (event, ui) {

                let path = $('#' + i).attr('src');

                $('#img_' + i).attr('src', path);
                $('#' + i).css('visibility', 'hidden');

                comprobar_piezas(i);
            }
        });
    }
}

function comprobar_piezas(pieza) {

    piezasUbicadas.push(pieza);

    if (piezasUbicadas.length == TOTAL_PIEZAS) {

        detenerCronometro();
        win.volume = 0.6;
        win.play();

        let tiempoFinal = document.getElementById("tiempo").textContent;

        Swal.fire({
            title: '¡Felicidades ganaste!',
            text: 'Terminaste en ' + tiempoFinal,
            imageUrl: puzzleImage,
            imageWidth: 400
        });

        reiniciar();
    }
}

function randomizarPosicionDePiezas() {

    $('.movil').each(function () {

        let $campoPiezas = $('.campo-piezas');
        let divWidth = $campoPiezas.width() - $(this).width();
        let divHeight = $campoPiezas.height() - $(this).height();

        let randLeft = Math.floor(Math.random() * divWidth);
        let randTop = Math.floor(Math.random() * divHeight);

        $(this).css({
            'left': randLeft,
            'top': randTop
        });

    });
}

function reiniciar() {

    detenerCronometro();   
    segundos = 0;          
    actualizarTiempo();    
    iniciarCronometro();

    for (let i = 0; i < TOTAL_PIEZAS; i++) {
        $('#' + i).css('visibility', 'visible');
        $('#' + i).attr('src', 'public/img/puzzles/' + puzzleName + '/' + i + '.png');
        $('#img_' + i).attr('src', '');
    }

    piezasUbicadas = [];
    randomizarPosicionDePiezas();
}