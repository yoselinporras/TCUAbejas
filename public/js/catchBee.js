$(document).ready(function () {
    var velScene;
    var backrground;
    var backrgroundX;
    var container;
    var gravity = 2500;
    var velY;
    var impulse;
    var time;
    var fly;
    var deltaTime;
    var numBees;
    var bees;
    var gameVel;
    var minVelEnemy;
    var maxVelEnemy;
    var invulnerabilityTime;
    var timeToBee;
    var timeToEnemyMax;
    var timeToEnemyMin;
    var invulnerability;
    var stop;
    var cont;
    var minProbBee;
    var maxProbBee;
    var score;
    var divScore;

    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(Init, 1);
    } else {
        document.addEventListener("DOMContentLoaded", Init);
    }

    function Init() {
        Start();
        Loop();

    }



    function Start() {
        container = $(".container-bee-catcher");
//        container.html("");
        backrground = $(".background");
        backrgroundX = 0;

        container.mouseover(function () {
            document.documentElement.style.cursor = "url('public/img/beeCatcher/box.png'),auto";
        });

        container.mouseleave(function () {
            document.documentElement.style.cursor = "default";

        });
        score = 0;
        divScore = $(".score-catch");
        divScore.text('Puntuación: ' + score);

        velScene = 0.5;
        deltaTime = 0;
        cont = 0;
        velY = 1;
        fly = false;
        numBees = 10;
        bees = [];
        gameVel = 5;
        invulnerabilityTime = 1500;
        timeToBee = 1;
        timeToEnemyMax = 1.5;
        timeToEnemyMin = 0.5;
        invulnerability = false;
        time = new Date();
    }



    function Loop() {
        deltaTime = (new Date() - time) / 1000;
        time = new Date();
        Update();
        requestAnimationFrame(Loop);
    }


    function Update() {
        if (!stop) {
            MoveBackground();
            velY -= gravity * deltaTime;
            decideToCreateBee();
            divScore.text('Puntuación: ' + score);
            if (score < 0) {
                score = 0;
            }
        }
    }

    function decideToCreateBee() {
        timeToBee -= deltaTime;
        if (timeToBee <= 0) {
            createBee();
        }

    }


    function createBee() {
        if (!stop) {
            if (bees.length < numBees) {

                var option = getRandomArbitrary(1, 101);

                if (option <= 30) {



                    var bee;

                    bee = $('<div class="catch-bee"></div>').appendTo('.container-bee-catcher');
                    bee.attr('id', 1);
                    bees.push(bee);
                    randomPositionBee(bee);


                    bee.addClass('bee-respawn');


                    bee.on("click", function () {
                        bee.remove();
                        bees.splice((bees.length - 1), 1);
                        score += 10;
                        divScore.addClass('score-animation');
                        var id1bee = setTimeout(function () {
                            divScore.removeClass('score-animation');
                            clearTimeout(id1bee);
                        }, 1500);

                    });


                    var id1 = setTimeout(function () {
                        bee.removeClass('bee-respawn');
                        bee.addClass('bee-fade');
                        

                        var id12 = setTimeout(function () {
                            bee.remove();
                            bees.splice((bees.length - 1), 1);
                            clearTimeout(id12);
                        }, 900);



                        clearTimeout(id1);


                    }, 900);



                } else if (option >= 31 && option <= 70) {

                    var bee;

                    bee = $('<div class="catch-ant"></div>').appendTo('.container-bee-catcher');
                    bee.attr('id', 2);
                    bees.push(bee);
                    randomPositionBee(bee);


                    bee.addClass('bee-respawn');


                    bee.on("click", function () {
                        bee.remove();
                        bees.splice((bees.length - 1), 1);
                        score -= 20;
                    });


                    var id1 = setTimeout(function () {
                        bee.removeClass('bee-respawn');
                        bee.addClass('bee-fade');

                        var id12 = setTimeout(function () {
                            bee.remove();
                            bees.splice((bees.length - 1), 1);
                            clearTimeout(id12);
                        }, 1000);



                        clearTimeout(id1);


                    }, 1000);



                } else if (option >= 71 && option <= 94) {

                    var bee;

                    bee = $('<div class="catch-wasp"></div>').appendTo('.container-bee-catcher');
                    bee.attr('id', 3);
                    bees.push(bee);
                    randomPositionBee(bee);



                    bee.addClass('bee-respawn');


                    bee.on("click", function () {
                        bee.remove();
                        score -= 50;
                        bees.splice((bees.length - 1), 1);
                    });


                    var id1 = setTimeout(function () {
                        bee.removeClass('bee-respawn');
                        bee.addClass('bee-fade');

                        var id12 = setTimeout(function () {
                            bee.remove();
                            bees.splice((bees.length - 1), 1);
                            clearTimeout(id12);
                        }, 1000);

                        clearTimeout(id1);
                    }, 3000);


                } else if (option >= 95) {

                    var bee;

                    bee = $('<div class="gold-bee"></div>').appendTo('.container-bee-catcher');
                    bee.attr('id', 4);
                    bees.push(bee);
                    randomPositionBee(bee);


                    bee.addClass('bee-gold-move');


                    bee.on("click", function () {
                        bee.remove();
                        score += 100;
                        bees.splice((bees.length - 1), 1);
                        divScore.addClass('score-animation');
                        var id1 = setTimeout(function () {
                            divScore.removeClass('score-animation');
                            clearTimeout(id1);
                        }, 3000);
                    });


                    var id1 = setTimeout(function () {
                        bee.remove();
                        bees.splice((bees.length - 1), 1);
                        clearTimeout(id1);

                    }, 700);

                }


                timeToBee = timeToEnemyMin + Math.random() * (timeToEnemyMax - timeToEnemyMin) / gameVel;
            }
        }
    }






    function randomPositionBee(bee) {

        $campoPiezas = $(".container-bee-catcher");
        $divWidth = $campoPiezas.width() - bee.width();
        $divHeight = $campoPiezas.height() - bee.height();
        beePosition(bee, $divWidth, $divHeight);

    }


    function beePosition(bee, divWidth, divHeight) {

        do {
            randLeft = Math.floor(Math.random() * Number(divWidth));
            randTop = Math.floor(Math.random() * Number(divHeight));
            bee.css({
                'left': randLeft,
                'top': randTop
            });

        } while (coliderDetectionBeeToBee(bee))

    }





    function coliderDetectionBeeToBee(bee) {
        if (bees.length) {
            for (var i = 0; i < bees.length; i++) {
                if (bees[i].posX > bee.posX + bee.width()) {

                    break;
                } else {
                    var index = bees.indexOf(bee);

                    if (i != index) {
                        if (IsCollision(bee, bees[i], 0, 0, 0, 0)) {

                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }


    function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {

        var aRect = a.get(0).getBoundingClientRect();// obtiene el elemento a
        var bRect = b.get(0).getBoundingClientRect();// obtiene el elemento b
        return !(
                ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
                (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
                ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
                (aRect.left + paddingLeft > (bRect.left + bRect.width))
                );
    }





    function MoveBackground() {
        backrgroundX += velScene;
        backrground.css({
            'left': -(backrgroundX % container.width()) + "px"
        });
    }


    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }








});