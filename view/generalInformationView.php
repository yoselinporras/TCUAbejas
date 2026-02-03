<?php
    include_once 'public/header.php';
    $bannerTitle = "Abejas nativas sin aguijón";
    include 'view/bannerView.php';
?>
 

<script>
    $(document).ready(function () {
        showMazegame();
        showMemorygame();
    });
</script>

<div class="page page--inicio">
    <div class="inicio__box">
        <section class="inicio">
            <div class="inicio__contenido">
                <div class="row align-items-start">
                    <div class="col-lg-7 col-12 inicio__texto">
                        <p class="inicio__parrafo">
                            Las abejas meliponas son abejas que no tienen aguijón, estas son originarias del continente americano mientras que la abeja común es originaria de África. Las meliponas son un grupo de insectos sociales que habitan en áreas con un clima cálido por ejemplo en zonas tropicales. Existen más de 350 especies identificadas alrededor de todo el continente americano y algunas de estas especies tienen la capacidad de producir miel de excelente calidad. Además desempeñan una función fundamental como la polinización; en su búsqueda de alimento como el polen y néctar de las flores, trabajan como agentes polinizadores.<br>
                        </p>
                        
                        <p class="inicio__parrafo">
                            Por lo que cumplen un papel muy importante en el desarrollo de la agricultura, bosques y en la supervivencia de las   especies que polinizan.
                        </p>

                        <p class="inicio__parrafo">
                            Las abejas tienen características físicas muy diferentes a otros insectos que permiten identificarlas fácilmente, dentro de las características principales se encuentran las siguientes: Las abejas tienen dos pares de alas mientras que las moscas tienen un solo par de esta manera se pueden diferenciar.
                        </p>
                    </div>

                    <div class="col-lg-5 col-12 inicio__imagen">
                        <img src="./public/img/partesabeja.png"
                             alt="Partes de abeja"
                             class="img-fluid">
                    </div>

                    <div class="col-12 mt-3">
                        

                        <p>
                            También se diferencian de las avispas por la contextura de su cuerpo, ya que las avispas son menos robustas y no presentan pelos en el cuerpo.
                        </p>    

                        <p>
                            Existen especies de abejas sin aguijón, estas se pueden diferenciar de las demás en el comportamiento, ya que las meliponas no pican, sin embargo; tienen otros mecanismos de defensa como cortar alas de otros insectos, las colmenas están cubiertos con materiales resistentes y con una estructura de difícil acceso para insectos intrusos, estos nidos pueden ser largos y estrechos además de esto pueden estar fabricados con resinas y semillas repelentes, también en la entrada de la colmena tienen abejas guardianas y cuando se sienten amenazadas pueden esconderse dentro del nido o con un ataque masivo como enredándose en el pelo o expulsando resinas pegajosas.
                        </p>

                        <p>
                            Actualmente, las abejas meliponas se encuentran en peligro debido a la destrucción de los bosques nativos los cuales son hábitats naturales de estas abejas, esto a raíz de la producción agrícola e industrial, por lo que el objetivo de este proyecto es identificar las especies de abejas meliponas que se encuentran dentro del campus de la Universidad de Costa Rica Sede del Atlántico en el recinto de Turrialba para dar a conocer y comprender su comportamiento y desarrollo en espacios semiurbanos.
                        </p>

                        <h2 class="h2">¿Cómo podemos proteger a los polinizadores?</h2>
                            <p>
                                Se puede crear un espacio agradable para los polinizadores, para esto se recomienda disminuir el uso de agroquímicos utilizando productos amigables con el ambiente como por ejemplo abonos orgánicos y el control de plagas con combate biológico. Otra forma de proteger a los polinizadores es promoviendo el uso de sistemas agroforestales en donde exista variedad de plantas y flores atrayentes de los polinizadores.
                            </p>

                        <h2 class="h2">¿Qué tipo de flores?</h2>
                            <p>
                                Pueden ser de diversos colores, tamaños y formas. Generalmente, las flores moradas, amarillas, anaranjadas y en forma de campana atraen a diferentes tipos de abejas; por eso, se recomienda sembrar diversos tipos de flores para atraer una mayor variedad de polinizadores. Además, es importante sembrar plantas de diferentes tamaños. Las abejas de mayor tamaño frecuentan recursos alimenticios a mayor altura en las copas de los árboles, así que es recomendable sembrar plantas herbáceas, arbustivas y arbóreas. Por último, pero no menos relevante, es preferible buscar especies nativas que favorezcan la biodiversidad local y provean fuentes alimenticias más ricas y diversas. En nuestro país las especies que se recomiendan para atraer las abejas meliponas son: Rabo de zorro 
                                (<i>Verbenaceae: Stachytarpheta jamaicensis</i>), abejoncillo (<i>Fabaceae: Senna pallida</i>), Santa Lucía 
                                (<i>Asteraceae: Ageratum conyzoides</i>), flor amarilla (<i>Asteraceae: Melampodium divaricatum</i>), Paira 
                                (<i>Asteraceae: Melanthera</i>), bejuco de agua (<i>Vitaceae: Cissus verticillata</i>), menta, lavanda, romero, albahaca, tomillo, margaritas y girasoles.
                            </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="colmenas">
            <h2 class="colmenas__titulo">Tipos de colmenas identificados en la sede</h2>

            <div class="grid-colmenas">

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/enredaPelo.png" alt="Enreda Pelo">
                    <p>Enreda Pelo</p>
                </div>

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/tetragona.png" alt="Mariolon">
                    <p>Mariolon</p>
                </div>

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/Tetragonisca.png" alt="Mariola">
                    <p>Mariola</p>
                </div>

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/chicopipe.png" alt="Chicopipe">
                    <p>Chicopipe</p>
                </div>

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/soncuano.png" alt="Soncuano">
                    <p>Soncuano</p>
                </div>

                <div class="colmena-card">
                    <img src="./public/img/infoGeneral/Euglossa.png" alt="Abejas de las orquídeas">
                    <p>Abejas de las orquídeas</p>
                </div>

                <div class="colmena-card colmena-card--center">
                    <img src="img/solitarias.png" alt="Abejas solitarias">
                    <p>Abejas solitarias<br>no identificadas</p>
                </div>
            
        </section>

        <div class="ver-mapa-container">
            <input type="button" id="vermapabutton" value="Ver mapa"
                   onclick="location.href='?controlador=Map2026&accion=mostrar'"/>
        </div>
    
    </div>
    <div class="col-md-12 referencias">
        <div class="col-12">
            <p>
                <strong>Referencias:</strong>
                <br>
                Anguebes, F; Pat, L; Pat, J; Hernández, P; Ramos, R. (2018).
                Condición y perspectivas de la meliponicultura en comunidades mayas
                de la reserva de la biósfera Los Petenes, Campeche, México.
                Estudios de Cultura Maya LII: 227-254 (2018).
                Disponible en:
                <a href="http://www.scielo.org.mx/pdf/ecm/v52/0185-2574-ecm-52-227.pdf" target="_blank">
                    aquí
                </a>
                <br>
                Barquero, L; Stamatti, G. (2014).
                Cría y manejo de abejas sin aguijón.
                Ediciones del Subtrópico.
                Fundación ProYungas.
                Disponible en:
                <a href="http://proyungas.org.ar/wp-content/uploads/2014/12/criaymanejodeabejassinaguijon.pdf" target="_blank">
                    aquí
                </a>
            </p>
        </div>
    </div>
</div>


<?php

include_once 'public/footer.php';
?>