
<?php
include_once 'public/header.php';
?>

<script>
       $(document).ready(function () {
        agregarBotonMapaANavbar();
    });
</script>



<div class="container abs-center">

    <div class="row" style="width:100% ">
        
        <div class="col-sm-12">

            <form class="form-post-comments"  method="POST" action="./public/sendEmail.php">
            
            
            <div class="name-area">
                
                <input type="text" name="user-name" class="form-control " id="user-name" aria-describedby="nameHelp" placeholder="Nombre" required>
                <div id="nameHelp" class="form-text"> </div>
            </div>
            
            
            <div class="email-area">
                
                <input type="email" name="user-email" class="form-control " id="user-email" aria-describedby="emailHelp" placeholder="Correo electrónico" required>
                <div id="emailHelp" class="form-text"></div>
            </div>
           

            <div class="comment-area">
               
                <textarea class="form-control" name="user-comment" id="user-comment" rows="3" placeholder="Mensaje" required></textarea>
            </div>

            <button type="submit" class="btn send-button send-area">Enviar</button>
            
            
        </form>

</div>
    </div>

</div>


<?php
function nombre_de_mi_funcion() {

}
?>



<?php
include_once 'public/footer.php';
?>