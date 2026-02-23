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
<script src="public/js/memoryMatch/Scene1.js"   type="text/javascript"></script>  
<script src="public/js/memoryMatch/Level2.js"   type="text/javascript"></script> 
<script src="public/js/memoryMatch/level3.js"   type="text/javascript"></script>   
<!-- <script src="public/js/memoryMatch/gamelvl2.js" type="text/javascript"></script> -->


  <!--<script src="public/js/maze/maze.js" type="text/javascript"></script>-->

<div class="memory-container">

    <div class="level-selector">
        <!-- <select name="forma" onchange="location = this.value;">
            <option value="?controlador=MemoryMatch&accion=mostrarlvl2">Nivel 2</option>
            <option value="?controlador=MemoryMatch&accion=mostrar">Nivel 1</option>
        </select> -->
        <select id="levelSelect">
            <option value="Scene1">Nivel 1</option>
    <option value="Level2">Nivel 2</option>
    
    <option value="level3">Nivel 3</option>
</select>
    </div>

    <div class="game-wrapper">
        <div id="game-container"></div>
    </div>

</div>
<script src="public/js/memoryMatch/game.js" type="text/javascript"></script>


<?php

include_once 'public/footer.php';
//?>