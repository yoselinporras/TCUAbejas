class Card extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, image, id) {
    super(scene, x, y, image);
    this.id = id;
    this.handler = this;
    this.isActive = false;
    this.isMatch = false;

  } //end constructor
  flipCards() {
    var card = this;
    const timeline = this.scene.tweens.timeline();
    timeline.add({
      targets: this,
      scaleX: 0,
      duration: 200,
      ease: "Linear",
    });
    timeline.add({
      //paused: true,
      targets: this,
      scaleX: 0.9,
      duration: 200,
      ease: "Linear",
      onComplete: () => {
        card.faceUp();
        timeline.destroy();
      }
    });

    timeline.play();
  }
  flipCardDown() {
    var card = this;
    const timeline2 = this.scene.tweens.timeline();
    timeline2.add({
      targets: this,
      scaleX: 0,
      duration: 200,
      ease: "Linear",
    });
    timeline2.add({
      //paused: true,
      targets: this,
      scaleX: 0.9,
      duration: 100,
      ease: "Linear",
      onComplete: () => {
        card.PutDown();
        timeline2.destroy();
      }
    });

    timeline2.play();
  }

  PutDown() {

    this.setTexture('cardBack');
    this.isActive = false;

  } //end put down pone las cartas hacia abajo y solamente se ve la parte de atras


  faceUp() {
    this.setTexture('front' + this.id);
    this.isActive = true;
  } //

  onClick(p_x, p_y) {

    if (p_x <= this.x + 50 && p_x + 50 >= this.x &&
      p_y <= this.y + 50 && p_y + 50 >= this.y) {

      return true;
    } //end if 
    //   this.on('pointerdown', function (p_pointer) {

  }

} //end class card