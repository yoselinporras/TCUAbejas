<?php
include_once 'public/header.php';
?>
<script>
    $(document).ready(function () {
        agregarBotonMapaANavbar();
    });
</script>

    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
    <script src="public/js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="public/js/maze/phaser.min.js" type="text/javascript"></script>
    <script src="public/js/maze/Scene3.js" type="text/javascript"></script>
    <script src="public/js/maze/Enemy.js" type="text/javascript"></script>
    <script src="public/js/maze/Player.js" type="text/javascript"></script>
    <script src="public/js/maze/maze.js" type="text/javascript"></script>

    <div id="game-container" style="text-align: center; padding: 25px;">      </div>
    

<?php
include_once 'public/footer.php';
?>