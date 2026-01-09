//import Scene1 from './Scene1.js';
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#69B896',
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
     //zoom: 1, // Since we're working with 16x16 pixel tiles, let's scale up the canvas by 3x
    pixelArt: false, // Force the game to scale images up crisply
    parent: "game-container",
    scene: [Scene1]
  };
  
  const game = new Phaser.Game(config);
  