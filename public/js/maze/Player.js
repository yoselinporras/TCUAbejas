class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, imagen) {
        super(scene, x, y, imagen); // The frame is optional 
        this.life = 3;
    }

    collision(p_x, p_y, isGameOver) { // deteccion de coliciones entre la abeja y la meta

        if (isGameOver == false) {

            if ((this.x + 32 >= p_x && this.x <= p_x + 32) &&
                (this.y + 32 >= p_y && this.y <= p_y + 32)) {
                return true;
            } //fin if collision

        } //fin if isGameover
    }//end collision
    collisionWall(index) { // deteccion de coliciones entre la abeja y las paredes

        if (index == 134 || (index >= 141 && index <= 143) ||
            (index >= 149 && index <= 151) ||
            (index >= 157 && index <= 159)) {
            return true;
        } //end



    } //collisionWall  function

}//end player class