$(document).ready(function () {
    var bee;
    var container;
    var time;
    var deltaTime;
    var pollens;
    var numofpollens;
    var numEnemies;
    var enemies;
    var gameVel;
    var minVelEnemy;
    var maxVelEnemy;
    var invulnerabilityTime;
    var timeToEnemy;
    var timeToEnemyMax;
    var timeToEnemyMin;
    var invulnerability;
    var numBeeHp;
    var hearts;
    var stop;
    var gameOver;
    var score;
    var divScore;
    var divHiScore;
    var hiScore = 0;
    var buttonRestart;
    var minProbEnemies;
    var maxProbEnemies;
    var antSize = 1;

    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(Init, 1);
    } else {
        document.addEventListener("DOMContentLoaded", Init);
    }

    function Init() {
        Start();
        responsive();
        Loop();

    }

    function Start() {
        container = $(".container-pollenCatcher");
        container.html("");
        $('<div class="bee bee-move"></div>').appendTo(container);
        divScore = $(".score");
        divHiScore = $(".hi-score");
        score = 0;
        minProbEnemies = 49;
        maxProbEnemies = 98;


        divScore.text('Puntuación: ' + score);
        bee = $(".bee");
        bee.draggable();
        deltaTime = 0;
        stop = false;
        pollens = [];
        numofpollens = 3;
        numEnemies = 5;
        enemies = [];
        gameVel = 1;
        minVelEnemy = 1;
        maxVelEnemy = 5;
        invulnerabilityTime = 1500;
        timeToEnemy = 3;
        timeToEnemyMax = 3;
        timeToEnemyMin = 1;
        invulnerability = false;
        numBeeHp = 4;
        hearts = [];
        time = new Date();
        createBeeHp();
    }

    function Loop() {
        deltaTime = (new Date() - time) / 1000;
        time = new Date();
        Update();
        requestAnimationFrame(Loop);
    }


    function Update() {
        if (!stop) {
            createPollen();
            coliderDetectionBeeToPollen();
            decideToCreateEnemies();
            moveEnemies();
            coliderDetectionBeeToEnemies();
            dificultyUp();

        }
    }


    function decideToCreateEnemies() {
        timeToEnemy -= deltaTime;
        if (timeToEnemy <= 0) {
            createEnemy();
        }

    }

    function createBeeHp() {

        if (hearts.length < numBeeHp) {


            if ($('.bee-hp').length < numBeeHp) {
                for (var i = 0; i <= numBeeHp; i++) {
                    var beeHp = $('<li><div class="bee-hp"></div> </li>').appendTo('.hp-list');
                    hearts.push(beeHp);
                }
                hearts[numBeeHp].addClass('heart-beat');
            }
        }
    }


    function cureBee(numBeeHp) {

        if ($('.bee-hp').length <= numBeeHp) {
            var beeHp = $('<li><div class="bee-hp"></div> </li>').appendTo('.hp-list');
            hearts.push(beeHp);


            for (var i = 0; i < numBeeHp; i++) {

                hearts[i].removeClass('heart-beat');
            }
            hearts[numBeeHp].addClass('heart-beat');

        }

    }


    function createEnemy() {
        if (!stop) {
            if (enemies.length < numEnemies) {

                var option = getRandomArbitrary(1, 5);
                if (option == 1) {


                    var typeEnemie = getRandomArbitrary(1, 101);
                    var enemy;
                    if (typeEnemie <= minProbEnemies) {
                        enemy = $('<div class="toxic-barrel toxic-barrel-rotate"> </div>').appendTo('.container-pollenCatcher');
                    } else if (typeEnemie >= (minProbEnemies + 1) && typeEnemie <= maxProbEnemies) {
                        enemy = $('<div class="ant ant-move"> </div>').appendTo('.container-pollenCatcher');
                        enemy.css({
                            'transform': 'rotate(' + -90 + 'deg' + ') scale(' + antSize + ')'
                        });
                    } else {
                        enemy = $('<div class="bee-hp-on-field"></div> ').appendTo('.container-pollenCatcher');
                        enemy.addClass('heart-beat');
                    }



                    enemy.attr('vel', getRandomArbitrary(minVelEnemy, maxVelEnemy));
                    enemy.posX = container.width();
                    enemy.css({
                        'top': getRandomArbitrary(enemy.width(), container.height() - enemy.width()),
                        'left': container.width()

                    });
                    enemy.attr('id', 1);
                    enemies.push(enemy);
                } else if (option == 2) {


                    var typeEnemie = getRandomArbitrary(1, 101);
                    var enemy;
                    if (typeEnemie <= minProbEnemies) {
                        enemy = $('<div class="toxic-barrel toxic-barrel-rotate"> </div>').appendTo('.container-pollenCatcher');
                    } else if (typeEnemie >= (minProbEnemies + 1) && typeEnemie <= maxProbEnemies) {
                        enemy = $('<div class="ant ant-move"> </div>').appendTo('.container-pollenCatcher');
                        enemy.css({
                            'transform': 'rotate(' + 0 + 'deg' + ') scale(' + antSize + ')'
                        });

                    } else {
                        enemy = $('<div class="bee-hp-on-field"></div> ').appendTo('.container-pollenCatcher');
                        enemy.addClass('heart-beat');
                    }


                    enemy.posY = container.height();
                    enemy.attr('vel', getRandomArbitrary(minVelEnemy, maxVelEnemy));
                    enemy.css({
                        'top': container.height(),
                        'left': getRandomArbitrary(enemy.width(), container.width() - enemy.width())
                    });
                    enemy.attr('id', 2);
                    enemies.push(enemy);
                } else if (option == 3) {

                    var typeEnemie = getRandomArbitrary(1, 101);
                    var enemy;
                    if (typeEnemie <= minProbEnemies) {
                        enemy = $('<div class="toxic-barrel toxic-barrel-rotate"> </div>').appendTo('.container-pollenCatcher');
                    } else if (typeEnemie >= (minProbEnemies + 1) && typeEnemie <= maxProbEnemies) {
                        enemy = $('<div class="ant ant-move"> </div>').appendTo('.container-pollenCatcher');
                        enemy.css({
                            'transform': 'rotate(' + 180 + 'deg' + ') scale(' + antSize + ')'
                        });
                    } else {
                        enemy = $('<div class="bee-hp-on-field"></div> ').appendTo('.container-pollenCatcher');
                        enemy.addClass('heart-beat');
                    }


                    enemy.posY = 0;
                    enemy.attr('vel', getRandomArbitrary(minVelEnemy, maxVelEnemy));
                    enemy.css({
                        'top': 0,
                        'left': getRandomArbitrary(enemy.width(), container.width() - enemy.width())
                    });
                    enemy.attr('id', 3);
                    enemies.push(enemy);
                } else if (option == 4) {
                    var typeEnemie = getRandomArbitrary(1, 101);
                    var enemy;
                    if (typeEnemie <= minProbEnemies) {
                        enemy = $('<div class="toxic-barrel toxic-barrel-rotate"> </div>').appendTo('.container-pollenCatcher');
                    } else if (typeEnemie >= (minProbEnemies + 1) && typeEnemie <= maxProbEnemies) {
                        enemy = $('<div class="ant ant-move"> </div>').appendTo('.container-pollenCatcher');
                        enemy.css({
                            'transform': 'rotate(' + 90 + 'deg' + ') scale(' + antSize + ')'
                        });
                    } else {
                        enemy = $('<div class="bee-hp-on-field"></div> ').appendTo('.container-pollenCatcher');
                        enemy.addClass('heart-beat');
                    }
                    enemy.posX = -enemy.width();
                    enemy.attr('vel', getRandomArbitrary(minVelEnemy, maxVelEnemy));
                    enemy.css({
                        'top': getRandomArbitrary(enemy.width(), container.height() - enemy.width()),
                        'left': -enemy.width()
                    });
                    enemy.attr('id', 4);
                    enemies.push(enemy);
                }


                timeToEnemy = timeToEnemyMin + Math.random() * (timeToEnemyMax - timeToEnemyMin) / gameVel;
            }
        }
    }


    function dificultyUp() {
        if (score == 200) {
            numEnemies = 7;
            timeToEnemyMin = 0.7;
            timeToEnemyMax = 2.5;
            numofpollens = 4;
            gameVel = 2;

        }

        if (score == 500) {
            numEnemies = 10;
            timeToEnemyMin = 0.5;
            timeToEnemyMax = 2.2;
            minVelEnemy = 2;
            numofpollens = 5;
            gameVel = 3;

        }

        if (score == 800) {
            numEnemies = 10;
            timeToEnemyMin = 0.5;
            timeToEnemyMax = 2.0;
            minVelEnemy = 3;
            maxVelEnemy = 6;
            numofpollens = 6;
            gameVel = 5;
        }
    }

    function moveEnemies() {

        if (enemies.length) {
            for (var i = enemies.length - 1; i >= 0; i--) {
                if (enemies[i].attr('id') == 1) {
                    if (enemies[i].posX < -enemies[i].width()) {
                        enemies[i].remove();
                        enemies.splice(i, 1);
                    } else {
                        enemies[i].posX -= parseInt(enemies[i].attr('vel'));
                        enemies[i].css({
                            'left': enemies[i].posX
                        });
                    }
                } else if (enemies[i].attr('id') == 2) {


                    if (enemies[i].posY < -enemies[i].height()) {
                        enemies[i].remove();
                        enemies.splice(i, 1);
                    } else {
                        enemies[i].posY -= parseInt(enemies[i].attr('vel'));
                        enemies[i].css({
                            'top': enemies[i].posY
                        });
                    }

                } else if (enemies[i].attr('id') == 3) {

                    if (enemies[i].posY > container.height()) {
                        enemies[i].remove();
                        enemies.splice(i, 1);
                    } else {
                        enemies[i].posY += parseInt(enemies[i].attr('vel'));
                        enemies[i].css({
                            'top': enemies[i].posY
                        });
                    }
                } else if (enemies[i].attr('id') == 4) {

                    if (enemies[i].posX > container.width()) {
                        enemies[i].remove();
                        enemies.splice(i, 1);
                    } else {
                        enemies[i].posX += parseInt(enemies[i].attr('vel'));
                        enemies[i].css({
                            'left': enemies[i].posX
                        });
                    }

                }

            }
        }

    }



    function coliderDetectionBeeToPollen() {
        for (var i = 0; i < pollens.length; i++) {
            if (pollens[i].posX > bee.posX + bee.width()) {

                break;
            } else {
                if (IsCollision(bee, pollens[i], 40, 50, 40, 50)) {
                    pollens[i].remove();
                    score += 1;
                    divScore.text('Puntuación: ' + score);
                    pollens.splice(i, 1);

                    if (score >= hiScore) {
                        hiScore = score;
                        divHiScore.text('Puntuación más alta: ' + hiScore);
                    }

                }
            }
        }
    }



    function coliderDetectionBeeToEnemies() {

        if (!invulnerability) {
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].posX > bee.posX + bee.width()) {

                    break;
                } else {
                    if (IsCollision(bee, enemies[i], enemies[i].height(), enemies[i].width(), enemies[i].height(), enemies[i].width())) {
                        enemies[i].remove();

                        if (!enemies[i].hasClass('bee-hp-on-field')) {
                            if (hearts.length > 0) {

                                if (numBeeHp > 0) {
                                    numBeeHp -= 1;
                                    hearts[numBeeHp].remove();
                                    hearts[numBeeHp].addClass('heart-beat');
                                    hearts.splice(numBeeHp, 1);
                                } else {
                                    hearts[0].remove();
                                    hearts.splice(0, 1);
                                    Stop();
                                }
                            }

                            enemies.splice(i, 1);
                            bee.addClass('bee-hit');

                            invulnerability = true;

                            var id1 = setTimeout(function () {
                                bee.removeClass('bee-hit');
                                clearTimeout(id1);
                                invulnerability = false;
                            }, invulnerabilityTime);

                        } else {

                            if (numBeeHp < 4) {

                                numBeeHp += 1;
                                cureBee(numBeeHp);
                            }
                        }

                    }
                }
            }
        }
    }


    function coliderDetectionPollenToPollen(pollen) {
        if (pollens.length) {
            for (var i = 0; i < pollens.length; i++) {
                if (pollens[i].posX > pollen.posX + pollen.width()) {

                    break;
                } else {
                    if (IsCollision(pollen, pollens[i], 0, 0, 0, 0)) {
                        return true;
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


    function createPollen() {
        if ($('.pollen').length < numofpollens) {
            for (var i = $('.pollen').length; i < numofpollens; i++) {
                var pollen = $('<div class="pollen pollen-beat"> </div>').appendTo('.container-pollenCatcher');
                randomPositionPollen(pollen);
                pollens.push(pollen);
            }
        }

    }

    function randomPositionPollen(pollen) {

        pollen.each(function () {
            $campoPiezas = $('.container-pollenCatcher');
            $divWidth = $campoPiezas.width() - pollen.width();
            $divHeight = $campoPiezas.height() - pollen.height();
            pollenPosition($(this), $divWidth, $divHeight);
        });
    }


    function pollenPosition(pollen, divWidth, divHeight) {

        do {
            randLeft = Math.floor(Math.random() * Number(divWidth));
            randTop = Math.floor(Math.random() * Number(divHeight));
            pollen.css({
                'left': randLeft,
                'top': randTop
            });
        } while (IsCollision(bee, pollen, 40, 50, 40, 50) || coliderDetectionPollenToPollen(pollen))

    }

    function Stop() {
        stop = true;
        container.html("");
        score = 0;
        var containerGameOver = $('<div class="container-gameOver"></div>').appendTo(container);
        gameOver = $('<div class="game-over">Juego Terminado</div>').appendTo(containerGameOver);
        gameOver = gameOver.get(0).style.display = "block";
        buttonRestart = $('<button type="button" class="btn btn-list btn-block button-restart"><i class="fas fa-redo-alt fa-3x"></i></button>').appendTo(containerGameOver);
        buttonRestart.get(0).style.display = "block";
        buttonRestart.on('click', function () {
            Start();
        });
    }


    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    function responsive() {
        var uid = $('.uid');
        var environment = $('.environment-pollen-catcher');
        environment.css('height', (window.innerHeight - 130) + 'px');
        let size = environment.height() - uid.height();
        container.css('height', size + 'px');
        mediaQuerys();

        $(window).resize(function () {
            mediaQuerys();
            environment.css('height', (window.innerHeight - 130) + 'px');
            size = environment.height() - uid.height();
            container.css('height', size + 'px');

            console.log("Entre");

        });

    }

    function mediaQuerys() {
        if (window.innerWidth >= 1200) {
            antSize = 1.3;
        } else if (window.innerWidth >= 992) {
            antSize = 1.2;
        } else if (window.innerWidth >= 768) {
            antSize = 1.0;
        } else if (window.innerWidth >= 600) {
            antSize = 0.9;
        } else if (window.innerWidth <= 600) {
            antSize = 0.7;
        }


    }

});