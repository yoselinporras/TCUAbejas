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
            <p>En 2021, frente al reto del distanciamiento social impuesto por la pandemia de Covid-19, los proyectos ED-3514: Establecimiento de meliponarios en la finca experimental interdisciplinaria de modelos agroecológicos y TC-627: Gestión Ambiental, herramientas para el desarrollo de una cultura ambiental, se vieron en la necesidad de reinventarse para continuar con su misión.</p>  

            <p>La reflexión inicial fue clara: si la Universidad promueve la conservación de las abejas nativas y la gestión ambiental, el compromiso debía comenzar en casa. En la Sede de la UCR en Turrialba existía una gran cantidad de colmenas en estado natural dentro de sus instalaciones, aunque no se conocía con precisión cuántas.</p>  

            <p>Con este propósito, el proyecto ED-3514 realizó el primer inventario de colmenas presentes en las edificaciones de la Sede. Una vez recopilada la información, surgió la necesidad de compartirla con la comunidad. Aquí fue fundamental la articulación con el proyecto TC-627, que aportó el talento humano para transformar los datos en un recurso accesible y educativo.</p>  

            <p>De esta colaboración nació la idea de crear un sitio web interactivo, diseñado íntegramente por estudiantes de diversas carreras de la UCR Sede del Atlántico. Este espacio digital no solo visibiliza el valioso patrimonio biológico de la Sede, sino que también destaca su impacto positivo en el cantón a través de la polinización.</p>  

            <p>Hoy, gracias a este esfuerzo conjunto, usted puede explorar y disfrutar de este sitio web, concebido como una herramienta educativa y un homenaje a la riqueza natural que nos rodea.</p>
        </section>

        <section class="divider">
            <p>Tu opinión también forma parte del proyecto</p>
        </section>

        <section class="comentarios">
            <h2>Déjanos tu comentario</h2>
            <p>Queremos saber tu opinión</p>

            <!-- tu formulario -->
            <div class="abs-center">
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
        </section>
    </div> 
</main>

<?php
    function nombre_de_mi_funcion() {}
?>

<?php
    include_once 'public/footer.php';
?>