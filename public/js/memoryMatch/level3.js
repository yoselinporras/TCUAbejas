class level3 extends Phaser.Scene {

    constructor() {
        super("level3");
    }

    // CONFIGURACIÓN
    numAnimals = 8;     //  SOLO CAMBIA ESTO para más parejas
    cols = 4;           // columnas del tablero
    maxImageHeight = 160;
    maxImageWidth = 128;

    cards = [];
    SelectedCards = [];
    contMatch = 0;
    canMove = true;

    countdown;
    Score;
    ScoreLabel;
    match;
    fail;

    preload() {
        // Eliminar texturas viejas si existen
        for (let i = 1; i <= 8; i++) {
            const key = 'front' + i;

            if (this.textures.exists(key)) {
                this.textures.remove(key);
            }
        }

        this.load.image('cardBack', 'public/img/memoria/Cards/back.png');

        this.load.image('front1', 'public/img/memoria/Cards/card8.png');
        this.load.image('front2', 'public/img/memoria/Cards/card9.png');
        this.load.image('front3', 'public/img/memoria/Cards/card10.png');
        this.load.image('front4', 'public/img/memoria/Cards/card1.png');
        this.load.image('front5', 'public/img/memoria/Cards/card12.png');
        this.load.image('front6', 'public/img/memoria/Cards/card13.png');
        this.load.image('front7', 'public/img/memoria/Cards/card14.png');
        this.load.image('front8', 'public/img/memoria/Cards/card7.png');

        this.load.audio("match", ["public/img/memoria/sounds/match.wav"]);
        this.load.audio("fail", ["public/img/memoria/sounds/fail.mp3"]);

        this.load.bitmapFont(
            'carrier_command',
            'public/img/memoria/fonts/carrier_command.png',
            'public/img/memoria/fonts/carrier_command.xml'
        );
    }

    create() {
         this.cards = [];
    this.SelectedCards = [];
    this.contMatch = 0;
    this.canMove = true;

    if (this.input) {
        this.input.removeAllListeners();
    }

    if (this.time) {
        this.time.removeAllEvents();
    }

    // =========================
    // TIMER
    // =========================
    const timerLabel = this.add.text(
        this.scale.width * 0.5,
        50,
        '45',
        { fontSize: 48 }
    ).setOrigin(0.5);

    this.countdown = new CountDown(this, timerLabel);
    this.countdown.start(this.handleCountdownFinished.bind(this));

    // =========================
    // SCORE
    // =========================
    this.Score = "0/" + this.numAnimals;

    this.ScoreLabel = this.add.bitmapText(
        10,
        5,
        "carrier_command",
        "Parejas Ganadas: " + this.Score,
        14
    );

    this.match = this.sound.add("match");
    //this.fail = this.sound.add("fail");

    // =========================
    // CONFIG TABLERO
    // =========================

    this.cols = 6;

    let spacingX = 15;
    let spacingY = 15;

    let totalCards = this.numAnimals * 2;
    let rows = Math.ceil(totalCards / this.cols);

    //  Reservar espacio arriba para UI
    let topMargin = 120;   // espacio para timer + score
    let bottomMargin = 40;

    let availableWidth = this.scale.width - 40;
    let availableHeight = this.scale.height - topMargin - bottomMargin;

    // Calcular tamaño máximo posible
    this.maxImageWidth = (availableWidth / this.cols) - spacingX;
    this.maxImageHeight = this.maxImageWidth * (320 / 256);

    //  Si verticalmente no cabe, reducir tamaño
    if ((rows * (this.maxImageHeight + spacingY)) > availableHeight) {

        this.maxImageHeight = (availableHeight / rows) - spacingY;
        this.maxImageWidth = this.maxImageHeight * (256 / 320);
    }

    // Centrado horizontal
    let boardWidth = this.cols * (this.maxImageWidth + spacingX);
    let startX = (this.scale.width - boardWidth) / 2 + this.maxImageWidth / 2;

    // Centrado vertical dentro del espacio disponible
    let boardHeight = rows * (this.maxImageHeight + spacingY);
    let startY = topMargin + (availableHeight - boardHeight) / 2 + this.maxImageHeight / 2;

    // =========================
    // IDS DUPLICADOS
    // =========================
    let ids = [];
    for (let i = 1; i <= this.numAnimals; i++) {
        ids.push(i);
        ids.push(i);
    }

    Phaser.Utils.Array.Shuffle(ids);

    // =========================
    // CREAR GRID
    // =========================
    let index = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < this.cols; col++) {

            if (index >= totalCards) break;

            let x = startX + col * (this.maxImageWidth + spacingX);
            let y = startY + row * (this.maxImageHeight + spacingY);

            let card = new Card(this, x, y, 'cardBack', ids[index]);
            card.setInteractive();

            card.displayWidth = this.maxImageWidth;
            card.displayHeight = this.maxImageHeight;

            this.cards.push(card);
            this.add.existing(card);

            index++;
        }
    }

    this.input.on('pointerdown', this.handleMouseDown, this);
}




    handleMouseDown(pointer) {

        if (!this.canMove) return;

        for (let i = 0; i < this.cards.length; i++) {

            if (this.cards[i].onClick(pointer.x, pointer.y)) {

                if (!this.cards[i].isMatch && !this.cards[i].isActive) {

                    this.cards[i].flipCards();
                    this.SelectedCards.push(this.cards[i]);
                }
            }
        }

        if (this.SelectedCards.length === 2) {

            this.canMove = false;

            let g1 = this.SelectedCards[0].id;
            let g2 = this.SelectedCards[1].id;

            if (g1 === g2) {

                this.contMatch++;

                this.SelectedCards[0].isMatch = true;
                this.SelectedCards[1].isMatch = true;

                this.SelectedCards = [];
                this.canMove = true;

                this.match.play();

                this.Score = this.contMatch + "/" + this.numAnimals;
                this.ScoreLabel.text = "Parejas Ganadas: " + this.Score;

                // GANAR
                if (this.contMatch === this.numAnimals) {
                    this.handleWin();
                }

            } else {

                // this.fail.play();

                this.time.addEvent({
                    delay: 800,
                    callback: () => {

                        this.SelectedCards[0].flipCardDown();
                        this.SelectedCards[1].flipCardDown();

                        this.SelectedCards = [];
                        this.canMove = true;
                    }
                });
            }
        }
    }

    handleWin() {

        this.countdown.stop();

        this.add.text(
            this.scale.width * 0.5,
            this.scale.height * 0.5,
            '¡Ganaste!',
            {
                fontSize: 48,
                color: '#fff',
                backgroundColor: '#b9d989',
                padding: 15
            }
        ).setOrigin(0.5);
        this.input.removeAllListeners();

this.cards.forEach(card => {
    card.disableInteractive();
});

       this.time.addEvent({
    delay: 2500,
    callback: () => {
        this.scene.restart();
    }
});
    }

    handleCountdownFinished() {

    //  Bloquear todo inmediatamente
    this.canMove = false;
    this.input.removeAllListeners();

    //  Detener temporizador
    if (this.countdown) {
        this.countdown.stop();
    }

    //  Desactivar interacción de todas las cartas
    this.cards.forEach(card => {
        card.disableInteractive();
    });

    this.add.text(
        this.scale.width * 0.5,
        this.scale.height * 0.5,
        '¡Perdiste!',
        {
            fontSize: 48,
            color: '#fff',
            backgroundColor: '#b9d989',
            padding: 15
        }
    ).setOrigin(0.5);

    this.time.delayedCall(2000, () => {

        //  Limpieza manual segura
        this.cards = [];
        this.SelectedCards = [];
        this.contMatch = 0;

        this.scene.restart();

    });
}

    update() {
        if (this.countdown) {
            this.countdown.update();
        }
    }
}
