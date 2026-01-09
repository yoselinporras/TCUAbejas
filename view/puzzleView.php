<?php
include_once 'public/header.php';
?>

<script>
    $(document).ready(function () {
        agregarBotonMapaANavbar();
    });
</script>


<div id="entorno">
    <div class="container">   
        <div class="row">    

            <div id="campo-fondo" class="col-sm-12"> 
                <div class="row" style="padding: 16px;">
                    <div  class="col-sm-12">
                        <h3>Rompecabezas</h3>
                    </div>
                    <div id="img-fondo" class="col-sm-6">


                        <center style="padding-top: 16px; padding-bottom: 16px;">


                            <table id="matriz">

                                <tr>
                                    <td id="pieza0"><img class="pieza" id="img_0" src="" onclick="" /></td>
                                    <td id="pieza1"><img  class="pieza" id="img_1" src="" onclick="" /></td>
                                    <td id="pieza2"><img class="pieza" id="img_2" src="" onclick="" /></td>
                                </tr>

                                <tr>
                                    <td id="pieza3"><img class="pieza" id="img_3" src="" onclick="" /></td>
                                    <td id="pieza4"><img class="pieza" id="img_4" src="" onclick="" /></td>
                                    <td id="pieza5"><img class="pieza" id="img_5" src="" onclick="" /></td>
                                </tr>
                                <tr>
                                    <td id="pieza6"><img class="pieza" id="img_6" src="" onclick="" /></td>
                                    <td id="pieza7"><img class="pieza" id="img_7" src="" onclick="" /></td>
                                    <td id="pieza8"><img class="pieza" id="img_8" src="" onclick="" /></td>
                                </tr>

                            </table>

                        </center>


                    </div>

                    <div class="col-sm-6 campo-piezas"> 
                        <image src="public/img/puzzles/puzzle1/0.png" id="0" class="movil" >
                        <image src="public/img/puzzles/puzzle1/1.png" id="1" class="movil" >
                        <image src="public/img/puzzles/puzzle1/2.png" id="2" class="movil" >
                        <image src="public/img/puzzles/puzzle1/3.png" id="3" class="movil" >
                        <image src="public/img/puzzles/puzzle1/4.png" id="4" class="movil" >
                        <image src="public/img/puzzles/puzzle1/5.png" id="5" class="movil" >
                        <image src="public/img/puzzles/puzzle1/6.png" id="6" class="movil" >
                        <image src="public/img/puzzles/puzzle1/7.png" id="7" class="movil" >
                        <image src="public/img/puzzles/puzzle1/8.png" id="8" class="movil" >
                    </div>

                    <div  class="col-sm-6" style="margin: 0 auto 0 auto;">
                        <div class="row">
                            <div  class="col-sm-6" style="margin: 16px 0 16px 0;">
                                <select id="puzzles" class="form-select" aria-label="Default select example">
                                    <option selected value="puzzle1">Puzzle 1</option>
                                    <option value="puzzle2">Puzzle 2</option>
                                </select>
                            </div>

                            <div class="col-sm-6" style=" display: flex; flex-direction: column;
                                 justify-content: center;
                                 align-items: center;">
                                <button type="button" id="reiniciar"  class="btn btn-list btn-colmena btn-sm">Reiniciar</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div> 
        </div>               
    </div>
</div>

<audio id="win" src="public/mp3/sfx-victory4.mp3"></audio>

<script type="text/javascript" src="public/js/puzzle.js"></script>

</body>


<?php
include_once 'public/footer.php';
?>