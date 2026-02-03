<?php
    include_once 'public/header.php';
    $bannerTitle = "Acerca del proyecto";
    $bannerSubtitle = "Abejas Meliponas en la Sede del Atlántico";
    include 'view/bannerView.php';
?>

<script>
       $(document).ready(function () {
        agregarBotonMapaANavbar();
    });
</script>

<main class="page-content post-comments">
    <div class="content-box">
        <section class="historia container">
            <h2>¿Cómo nace el proyecto?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled 
                it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged.</p>
        </section>

        <section class="divider">
            <p>Tu opinión también forma parte del proyecto</p>
        </section>

        <section class="comentarios container">
            <h2>Déjanos tu comentario</h2>
            <p>Queremos escucharte</p>

            <!-- tu formulario -->
            <div class="container abs-center">
                <div class="row" style="width:100% ">
                    <div class="col-sm-12">
                        <form class="form-post-comments"  method="POST" action="./public/sendEmail.php">
                            <div class="name-area">
                                <input type="text" name="user-name" class="form-control " id="user-name" aria-describedby="nameHelp" placeholder="Ingresa tu nombre" required>
                                <div id="nameHelp" class="form-text"> </div>
                            </div>

                            <div class="email-area">
                                <input type="email" name="user-email" class="form-control " id="user-email" aria-describedby="emailHelp" placeholder="Ingresa tu correo electrónico" required>
                                <div id="emailHelp" class="form-text"></div>
                            </div>

                            <div class="comment-area">
                                <textarea class="form-control" name="user-comment" id="user-comment" rows="3" placeholder=" Escribe tu mensaje" required></textarea>
                            </div>

                            <button type="submit" class="btn send-button send-area">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<?php
    function nombre_de_mi_funcion() {}
?>

<?php
    include_once 'public/footer.php';
?>