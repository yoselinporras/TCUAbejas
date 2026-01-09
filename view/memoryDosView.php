<?php

include_once 'public/header.php';
?>

<script>
    $(document).ready(function () {
        agregarBotonMapaANavbar();
    });
</script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>

<script src="public/js/memoryMatch/CountDown.js" type="text/javascript"></script>
<script src="public/js/memoryMatch/Card.js"   type="text/javascript"></script>   
<script src="public/js/memoryMatch/Level2.js"   type="text/javascript"></script>   
<script src="public/js/memoryMatch/gamelvl2.js" type="text/javascript"></script>

  <!--<script src="public/js/maze/maze.js" type="text/javascript"></script>-->

<div  class="col-sm-5" style="margin: 0 auto 0 auto;">
    <div class="row">
        <div  class="col-sm-5" style="margin: 16px 0 16px 0;">
            <select name="forma" onchange="location = this.value;">
                <option value="?controlador=MemoryMatch&accion=mostrarlvl2">Nivel 2</option>
                <option value="?controlador=MemoryMatch&accion=mostrar">Nivel 1</option>
         
            </select>

        </div>
    </div>
</div>

<div id="game-container" style="text-align: center; padding: 25px;"> </div>

<script type="text/javascript" src="public/js/MemorySelection.js"></script>

<?php

include_once 'public/footer.php';
//?>