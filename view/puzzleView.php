<?php
include_once 'public/header.php';

$nivel = isset($nivel) ? $nivel : 1;
$ruta = isset($ruta) ? $ruta : "public/img/puzzles/puzzle1";
$totalPiezas = isset($totalPiezas) ? $totalPiezas : 9;

$dimension = sqrt($totalPiezas);
?>

<script>
    $(document).ready(function () {
        agregarBotonMapaANavbar();
    });

    const TOTAL_PIEZAS = <?php echo $totalPiezas; ?>;
    const NIVEL_ACTUAL = "<?php echo $nivel; ?>";
</script>

<div id="entorno">
    <div class="container">   
        <div class="row">    

            <div id="campo-fondo" class="col-sm-12"> 
                <div class="row" style="padding: 16px;">
                    
                    <div class="col-sm-12">
                        <h3>Rompecabezas - Nivel <?php echo $nivel; ?></h3>
                    </div>

                    <div id="cronometro">
                        Tiempo: <span id="tiempo">00:00</span>
                    </div>

                    <!-- MATRIZ -->
                    <div id="img-fondo" class="col-sm-6">
                        <center style="padding: 16px;">
                            <table id="matriz">
                                <?php 
                                $contador = 0;
                                for ($fila = 0; $fila < $dimension; $fila++): ?>
                                    <tr>
                                        <?php for ($col = 0; $col < $dimension; $col++): ?>
                                            <td id="pieza<?php echo $contador; ?>">
                                                <img 
                                                    class="pieza" 
                                                    id="img_<?php echo $contador; ?>" 
                                                    src=""
                                                />
                                            </td>
                                        <?php 
                                            $contador++;
                                        endfor; ?>
                                    </tr>
                                <?php endfor; ?>
                            </table>
                        </center>
                    </div>

                    <!-- PIEZAS -->
                    <div class="col-sm-6 campo-piezas"> 
                        <?php for ($i = 0; $i < $totalPiezas; $i++): ?>
                            <img 
                                src="public/img/puzzles/puzzle<?php echo $nivel; ?>/<?php echo $i; ?>.png"
                                id="<?php echo $i; ?>" 
                                class="movil"
                            >
                        <?php endfor; ?>
                    </div>

                    <!-- CONTROLES -->
                    <div class="col-sm-6" style="margin: 0 auto;">
                        <div class="row">

                            <div class="col-sm-6" style="margin: 16px 0;">
                                <select id="puzzles" class="form-select">
                                    <option value="1" <?php echo ($nivel == 1) ? 'selected' : ''; ?>>Puzzle 1</option>
                                    <option value="2" <?php echo ($nivel == 2) ? 'selected' : ''; ?>>Puzzle 2</option>
                                    <option value="3" <?php echo ($nivel == 3) ? 'selected' : ''; ?>>Puzzle 3</option>
                                </select>
                            </div>

                            <div class="col-sm-6 d-flex justify-content-center align-items-center">
                                <button type="button" id="reiniciar" class="btn btn-list btn-colmena btn-sm">
                                    Reiniciar
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div> 
        </div>               
    </div>
</div>

<audio id="win" src="public/mp3/sfx-victory4.mp3"></audio>

<script src="public/js/puzzle.js"></script>

<script>
document.getElementById("puzzles").addEventListener("change", function() {
    let nivel = this.value;
    window.location.href = "?controlador=Puzzle&accion=mostrar&nivel=" + nivel;
});
</script>

<?php
include_once 'public/footer.php';
?>