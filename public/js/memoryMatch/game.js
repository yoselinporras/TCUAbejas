const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#b9d989',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    pixelArt: false,
    parent: "game-container",
    scene: [Scene1, Level2, level3]
};

const game = new Phaser.Game(config);

//  Iniciar nivel por defecto
game.scene.start("Scene1");

//  Control del select
const selector = document.getElementById("levelSelect");

selector.addEventListener("change", function () {

    const selectedLevel = this.value;

    if (game.scene.isActive(selectedLevel)) return;

    // detener todas las escenas activas
    game.scene.getScenes(true).forEach(scene => {
        scene.scene.stop();
    });

    game.scene.start(selectedLevel);

});