
<?php

include_once 'public/header.php';
?>


<script>
    $(document).ready(function () {
        agregarBotonMapaANavbar();

    });
</script>


<div class="container mb-4">
    <div class="row">
        <div class="environment-pollen-catcher" style="padding-top: 1.5rem;">


            <div class="uid container uid-border-animation"> 
                <div class="row">
                    <ul class ="hp-list" >
                    </ul>

                    <div class="hi-score">Puntuación más alta: 0</div>

                    <div class="score">Puntuación: 0</div>

                </div>

            </div>


            <div class="container-pollenCatcher">


            </div>



        </div>

    </div>

</div>





<script type="text/javascript" src="public/js/pollenCatcher.js"></script>


<?php

include_once 'public/footer.php';
?>