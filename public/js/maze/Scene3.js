class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

    player
    goal
    cursors
    controls
    ding
    layer2
    camera
    dialog
    isGameOver = false;
    enemy1
    isCollision = false;
    activo = false;
    life
    scoreBoard
    group
    win

    preload() {

        this.load.image('tiles', 'public/img/laberinto/tiled/tileset-shinygold2.png');
        this.load.image('buildings', 'public/img/laberinto/tiled/tileset-shinygold2(1).png');
        this.load.image('goal', 'public/img/laberinto/flor.png');
        this.load.tilemapTiledJSON('map', 'public/img/laberinto/tiled/mapa2.json');
        this.load.image("player", "public/img/laberinto/abeja.png");
        this.load.image("enemy1", "public/img/laberinto/carro.png");
        this.load.image("enemy2", "public/img/laberinto/veneno.png");
        this.load.audio("collision", ["public/img/laberinto/collision.mp3"]);
        this.load.audio("win", ["public/img/laberinto/win.mp3"]);
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });



    }
    create() {

        this.ding = this.sound.add("collision", {
            loop: false
        });
        this.win = this.sound.add("win", {
            loop: false
        });
        const map = this.make.tilemap({
            key: "map"
        });
        const tileset = map.addTilesetImage("tileset-shinygold2", "tiles");
        const buildings = map.addTilesetImage("tileset-shinygold2(1)", "buildings");
        const layer = map.createLayer("Capa de patrones 1", tileset);
        const layer3 = map.createLayer("Capa de patrones 3", buildings);
        this.layer2 = map.createLayer("Capa de patrones 2", tileset);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = new Player(this, 120, 400, "player");
        this.goal = this.add.sprite(1850, 3170, 'goal');

        this.cameras.main.setBounds(0, 0, layer.displayWidth, layer.displayHeight);
        this.cameras.main.startFollow(this.player);

        this.life = this.physics.add.staticGroup();
   

        this.life = this.add.text(this.player.x, 120, this.player.life, {
            font: '600 30px Poppins'
        });
        this.scoreBoard = this.add.image(this.player.x, 120, "player");
        this.enemy2 = new Enemy(this, -1, 0, "enemy2", map.tileWidth, map.tileHeight);
        this.enemy1 = new Enemy(this, -1, 0, "enemy1", map.tileWidth, map.tileHeight);


        this.add.existing(this.enemy2);
        this.add.existing(this.enemy1);
        this.add.existing(this.player);

        setInterval(() => {
            this.enemy2.move(this.enemy2.x, this.enemy2.y);
            this.enemy1.move(this.enemy1.x, this.enemy1.y);
        }, 1000);
    }
    update() {

        updateLife(this.life, this.cameras, this.player.life, this.scoreBoard);
        if (this.cursors.left.isDown) {
            var tile = this.layer2.getTileAtWorldXY(this.player.x - 10, this.player.y, true);
            if (this.player.collisionWall(tile.index)) {
                this.player.x += 5;
            } else {
                this.player.x -= 5;
            }


        }
        if (this.cursors.right.isDown) {
            var tile = this.layer2.getTileAtWorldXY(this.player.x + 10, this.player.y, true);
            if (this.player.collisionWall(tile.index)) {
                this.player.x -= 5;
            } else {
                this.player.x += 5;
            }
        }
        if (this.cursors.up.isDown) {
            var tile = this.layer2.getTileAtWorldXY(this.player.x, this.player.y - 10, true);
            if (this.player.collisionWall(tile.index)) {
                this.player.y += 15;
            } else {
                this.player.y -= 10;
            }
        }
        if (this.cursors.down.isDown) {
            var tile = this.layer2.getTileAtWorldXY(this.player.x, this.player.y + 10, true);
            if (this.player.collisionWall(tile.index)) {
                this.player.y -= 15;
            } else {
                this.player.y += 10;
            }
        }
        if (this.player.collision(this.goal.x, this.goal.y, this.isGameOver)) {
            this.win.play();
            this.isGameOver = true;
            dialo(this, this.isGameOver, this.player.x + 100, this.player.y - 60);
        }

        if ((this.enemy2.collisionPlayer(this.player.x, this.player.y) && this.isCollision == false) ||
            (this.enemy1.collisionPlayer(this.player.x, this.player.y) && this.isCollision == false)) {
            if (this.player.life != 0) {
                this.ding.play();
                this.player.life = this.player.life - 1;
            }

        }
        if (this.player.life == 0 && this.isGameOver == false) {
            this.isGameOver = true;
            dialoGameOver(this, this.player.x + 40, this.player.y + 40);

        }

    } //end update


}
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
var dialo = function (scene, isGameOver, p_x, p_y) {
    var dialog = scene.rexUI.add.dialog({
            x: p_x,
            y: p_y,


            background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x1565c0),

            title: scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x003c8f),
                text: scene.add.text(0, 0, 'Ganaste', {
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
        // .drawBounds(this.add.graphics(), 0xff0000)
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

var updateLife = function (life, cameras, playerLife, image) {
    life.x = cameras.main.worldView.x + cameras.main.width / 2;
    life.y = cameras.main.worldView.y;
    image.x = (cameras.main.worldView.x + cameras.main.width / 2) + 30;
    image.y = cameras.main.worldView.y + 12;
    life.setText(playerLife);
}