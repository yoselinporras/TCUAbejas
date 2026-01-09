class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }
    scene = this;
    cards = [];
    cont = 1;
    waitChance = false;
    numAnimals = 6;
    maxImageHeight = 320 / 2;
    maxImageWidth = 256 / 2;
    offsetX = 10;
    gameHeight = this.maxImageHeight * 3;
    x;
    y;
    shuffleArray = new Array();
    Score;
    ScoreLabel;
    SelectedCards = [];
    canMove = true;
    carta
    input
    contMatch = 0;
    scene3 = this.scene;
    match;
    fail;


    preload() {

        this.x = game.config.width / 2;
        this.y = (game.config.height / 2) - (this.maxImageHeight / 2);
        this.load.image('cardBack', 'public/img/memoria/Cards/back.png');

        this.load.image('front1', 'public/img/memoria/Cards/card1.png');
        this.load.image('front2', 'public/img/memoria/Cards/card2.png');
        this.load.image('front3', 'public/img/memoria/Cards/card3.png');
        this.load.image('front4', 'public/img/memoria/Cards/card4.png');
        this.load.image('front5', 'public/img/memoria/Cards/card5.png');
        this.load.image('front6', 'public/img/memoria/Cards/card6.png');
        

        this.load.audio("match", ["public/img/memoria/sounds/match.wav"]);
        this.load.audio("fail", ["public/img/memoria/sounds/fail.mp3"]);

        this.load.bitmapFont('carrier_command', 'public/img/memoria/fonts/carrier_command.png', 'public/img/memoria/fonts/carrier_command.xml');

    }
    create() {
        //score Label
        this.Score = "0/6";
        this.ScoreLabel = this.add.bitmapText(10, 5, "carrier_command", "Parejas Ganadas", 14);
        this.ScoreLabel.text = "Parejas Ganadas:" + this.Score;

        //sonido
        this.match = this.sound.add("match", {
            loop: false
        });
        //acomoda las cartas
        for (let row = 0; row < 2; row++) {
            let cont = 1;
            for (let col = 0; col < this.numAnimals; col++) {

                this.x = this.offsetX + (this.maxImageWidth * col) + (this.maxImageWidth / 2);
                let cardBack = new Card(this, this.x, this.y, 'cardBack', cont);

                this.shuffleArray.push(cardBack.setInteractive());
                cont++;
            } //for 2
            this.y += this.maxImageHeight;
        } //for 1

        this.cards = this.shuffle(this.shuffleArray);
        for (let row = 0; row < this.cards.length; row++) {
            this.cards[row].setScale(0.9);
            this.add.existing(this.cards[row]);
        }

        this.input.on('pointerdown', this.handleMouseDown, this);

    }

    handleMouseDown(mousePointer) {


        for (let row = 0; row < this.cards.length; row++) {
            if (this.cards[row].onClick(mousePointer.x, mousePointer.y)) { //verifica si se selecciona la carta deseada
                if (this.canMove && !this.cards[row].isMatch && !this.cards[row].isActive) { //si aun se puede mover va a poder voltearse
                  
                    this.cards[row].flipCards();
                    this.SelectedCards.push(this.cards[row]); //ingresa a las cartas seleccionadas
                }
                ///    console.log("choca con " + this.cards[row].id); //es verdad
            }
        } //
//

        if (this.SelectedCards.length > 1) { //cuando existan al menos dos cartas dentro del arreglo
            this.canMove = false; //evita que si se toca otra carta esta se vuelva

            // compara los id de cada carta
            let g1 = this.SelectedCards[0].id;
            let g2 = this.SelectedCards[1].id;

            if (g1 == g2) {
                // alert("son iguales");
                this.contMatch += 1;
                this.SelectedCards[0].isMatch = true;
                this.SelectedCards[1].isMatch = true;
                this.SelectedCards.length = 0; //se borran los datos del array
                // this.numMatches++;
              
                this.canMove = true;
                this.match.play();
                this.Score = this.contMatch + "/6";
                this.ScoreLabel.text = "Parejas Ganadas:" + this.Score;

            } else {
                //Salert("no son iguales");
                this.time.addEvent({
                    delay: 1000,
                    callbackScope: this,
                    callback: function () {
                        for (let n = 0; n < this.SelectedCards.length; n++) {
                            this.SelectedCards[n].flipCardDown(); //pongo abajo las cartas
                        }

                        this.SelectedCards.length = 0;
                        this.canMove = true; //habilito que se puedan volver las cartas 
                    },
                });
            }
        }

        if (this.contMatch == this.numAnimals) {

            let scene2 = this.scene;
            this.add.text(game.config.width * 0.5, game.config.height * 0.5, '¡Ganaste!', {
                    fontSize: 48,
                    // fontSize: '48px',
                    color: '#fff',
                    backgroundColor: '#69B896',
                    padding: {
                        right: 10,
                        left: 10,
                        top: 10,
                        bottom: 10
                    },
                    autoRound:true
                })
                .setOrigin(0.5);
            this.time.addEvent({
                delay: 2500,
                callbackScope: this,
                callback: function () {

                    this.registry.destroy();
                    this.events.off();
                    this.contMatch = 0;
                    this.SelectedCards = [];
                    this.cards = [];
                    this.shuffleArray = [];
                    this.scene.restart();
                    // this.reinicio();

                },
            });
            //this.restart(this.scene);
        }
    }

    reinicio() {
        this.registry.destroy();
        this.events.off();
        this.start("Scene1");
        //  dialoGameOver(this, game.config.width * 0.5, game.config.height * 0.5);

    }
    update() {

    } //end update
    shuffle(array) {
        let currentIndex = array.length,
            randomIndex;


        while (currentIndex != 0) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex].id, array[randomIndex].id] = [
                array[randomIndex].id, array[currentIndex].id
            ];
        }
        return array;
    }



} //fin clase 
var createLabel = function (scene, text) {
    return scene.rexUI.add.label({
        // width: 40,
        // height: 40,

        background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x5e92f3),

        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),

        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    });
}
var dialoGameOver = function (scene, p_x, p_y) {
    var dialog = scene.rexUI.add.dialog({

            x: p_x,
            y: p_y,

            background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x1565c0),

            title: scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x003c8f),
                text: scene.add.text(0, 0, 'Perdiste', {
                    fontSize: '24px'
                }),
                space: {
                    left: 15,
                    right: 15,
                    top: 10,
                    bottom: 10
                }
            }),

            content: scene.add.text(0, 0, 'Desea volver a Jugar?', {
                fontSize: '24px'
            }),

            actions: [
                createLabel(scene, 'Si'),
                createLabel(scene, 'No')
            ],

            space: {
                title: 25,
                content: 25,
                action: 15,

                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            },

            align: {
                actions: 'right', // 'center'|'left'|'right'
            },

            expand: {
                content: false, // Content is a pure text object
            }
        })
        .layout()
        //.drawBounds(this.add.graphics(), 0xff0000)
        .popUp(1000);

    scene.print = scene.add.text(0, 0, '');
    dialog
        .on('button.click', function (button, groupName, index) {
            if (button.text == 'Si') {
                // alert(isGameOver);
                this.isGameOver = false;
                scene.registry.destroy(); // destroy registry
                scene.events.off();
                scene.scene.restart();

            } else if (button.text == 'No') {
                dialog.destroy();
            }

        }, scene)
        .on('button.over', function (button, groupName, index) {
            button.getElement('background').setStrokeStyle(1, 0xffffff);
        })
        .on('button.out', function (button, groupName, index) {
            button.getElement('background').setStrokeStyle();
        });
}