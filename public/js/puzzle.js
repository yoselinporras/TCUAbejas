

var piezasUbicadas = [];

var puzzleImage = "";
var puzzleName = "";



$(document).ready( function () {
    
   

    puzzleImage = 'public/img/puzzles/fondos/puzzle1.png';
    puzzleName = 'puzzle1';

    $('#matriz').css({
        'background': 'linear-gradient(rgba(200,200,200,.5), rgba(200,200,200,.5)) ,' + ' url(' + puzzleImage + ')',
        'background-repeat': 'no-repeat',
        'background-size': 'contain'
    });

    if (window.innerWidth < 540) {
        $('#matriz').css('width', (window.innerWidth * 0.53) + 'px');
        $('#matriz').css('height', (window.innerWidth * 0.53) + 'px');
    } else {
        $('#matriz').css('width', (window.innerWidth * 0.33) + 'px');
        $('#matriz').css('height', (window.innerWidth * 0.33) + 'px');
    }


    $('.movil').attr("width", ($('#matriz').width()) / 3);
    $('.movil').attr("height", ($('#matriz').height()) / 3);

    $('td').attr("width", ($('#matriz').width()) / 3);
    $('td').attr("height", ($('#matriz').width()) / 3);

    $('.campo-piezas').css('width', ($('.movil').width() * 3) + 'px');
    $('.campo-piezas').css('height', ($('.movil').width() * 3) + 'px');
    


    randomizarPosicionDePiezas();


    $('.movil').draggable({
        containment: $("#campo-fondo"),
        scroll: false});



    $("#pieza0").droppable({
        accept: "#0",
        tolerance: "intersect",

        drop: function (event, ui) {
            var path = $('#0').attr('src');

            $('#img_0').attr('src', path);
            $('#0').css('visibility', 'hidden');
            comprobar_piezas(0);
        }
    });

    $("#pieza1").droppable({
        accept: "#1",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#1').attr('src');

            $('#img_1').attr('src', path);
            $('#1').css('visibility', 'hidden');
            comprobar_piezas(1);
        }
    });

    $("#pieza2").droppable({
        accept: "#2",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#2').attr('src');

            $('#img_2').attr('src', path);
            $('#2').css('visibility', 'hidden');
            comprobar_piezas(2);
        }
    });

    $("#pieza3").droppable({
        accept: "#3",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#3').attr('src');

            $('#img_3').attr('src', path);
            $('#3').css('visibility', 'hidden');
            comprobar_piezas(3);
        }
    });

    $("#pieza4").droppable({
        accept: "#4",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#4').attr('src');

            $('#img_4').attr('src', path);
            $('#4').css('visibility', 'hidden');
            comprobar_piezas(4);
        }
    });

    $("#pieza5").droppable({
        accept: "#5",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#5').attr('src');

            $('#img_5').attr('src', path);
            $('#5').css('visibility', 'hidden');
            comprobar_piezas(5);
        }
    });

    $("#pieza6").droppable({
        accept: "#6",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#6').attr('src');

            $('#img_6').attr('src', path);
            $('#6').css('visibility', 'hidden');
            comprobar_piezas(6);
        }
    });

    $("#pieza7").droppable({
        accept: "#7",
        tolerance: "intersect",
        drop: function (event, ui) {
            var path = $('#7').attr('src');

            $('#img_7').attr('src', path);
            $('#7').css('visibility', 'hidden');
            comprobar_piezas(7);
        }
    });

    $("#pieza8").droppable({
        accept: "#8",
        tolerance: "intersect",
        containment: $(".container"),
        drop: function (event, ui) {
            var path = $('#8').attr('src');

            $('#img_8').attr('src', path);
            $('#8').css('visibility', 'hidden');
            comprobar_piezas(9);
        }
    });

    responsivepuzzle();

    $('#reiniciar').on('click', function () {
        reiniciar(puzzleName);
    });

    $("#puzzles").change(function () {
        puzzleName = $("#puzzles option:selected").val();
        puzzleImage = 'public/img/puzzles/fondos/' + puzzleName + '.png';
        reiniciar(puzzleName);
        $('#matriz').css({
            'background': 'linear-gradient(rgba(200,200,200,.5), rgba(200,200,200,.5)) ,' + ' url(' + puzzleImage + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'contain'
        });
    });

});


function responsivepuzzle() {

    $(window).resize(function () {

        if (window.innerWidth < 540) {
            $('#matriz').css('width', (window.innerWidth * 0.43) + 'px');
            $('#matriz').css('height', (window.innerWidth * 0.43) + 'px');

        } else {
            $('#matriz').css('width', (window.innerWidth * 0.33) + 'px');
            $('#matriz').css('height', (window.innerWidth * 0.33) + 'px');

        }

        $('.campo-piezas').css('width', ($('.movil').width() * 3) + 'px');
        $('.movil').attr("width", ($('#matriz').width()) / 3);
        $('.movil').attr("height", ($('#matriz').height()) / 3);
        $('td').attr("width", ($('#matriz').width()) / 3);
        $('td').attr("height", ($('#matriz').width()) / 3);

        randomizarPosicionDePiezas();

    });

}



function comprobar_piezas(pieza) {

    piezasUbicadas.push(pieza);

    if (piezasUbicadas.length == 9) {
        win.volume =0.6;
        win.play();

        Swal.fire({
            title: 'Felicidades ganaste!',
            text: '',
            imageUrl: puzzleImage,
            imageWidth: 500,
            imageHeight: 500,
            imageAlt: 'Custom image'
        });

        reiniciar(puzzleName);

    }

}



function randomizarPosicionDePiezas() {
    $('.movil').each(function () {
        $campoPiezas = $('.campo-piezas');
        $divWidth = $campoPiezas.width() - $('.movil').width();
        $divHeight = $campoPiezas.height() - $('.movil').height();
        randLeft = Math.floor(Math.random() * Number($divWidth));
        randTop = Math.floor(Math.random() * Number($divHeight));
        $(this).css({
            'left': randLeft,
            'top': randTop
        });

    });
    
    
}

function reiniciar(puzzleName) {

    for (var i = 0; i < 9; i++) {
        $('#' + i).css('visibility', 'visible');
        $('#' + i).attr('src', 'public/img/puzzles/' + puzzleName + '/' + i + '.png');
        $('#img_' + i).attr('src', '');
    }
    piezasUbicadas = [];
    randomizarPosicionDePiezas();

}