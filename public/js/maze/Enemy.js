class Enemy extends Phaser.Physics.Arcade.Sprite {
        
    constructor(scene, x, y, imagen) {
        super(scene, x, y, imagen); // The frame is optional 
        this.max = 700;
        this.min = 100;
        this.maxbinario = 3;
        this.minbinario = 1;
        this.rango = 700 - 100 + 1;
        this.rangobinario =0;
        this.rangobinario = 3 - 1 + 1;
        this.direccion = 0;
        this.activo = false;
    }
    move(p_x,p_y, p_width, p_height) {
      //  alert(p_x);
        var x = p_x;
        var y = p_y;
        if (x == -1) {

            this.x = ((Math.random() * this.rango) + this.min);
            this.direccion = Math.round((Math.random() * this.rangobinario) + this.minbinario);
             //alert(this.direccion);
            this.y = 0;

        } //fin if
        if (this.activo == false) {

            this.activo = true;
        }
        if (this.activo == true) {

            if (this.y >= p_height || this.x <= 100 || this.x >= p_width) {

                this.activo = false;
                this.x = -1;

            } else {
                y = this.y + 40;
                this.y = y; //mayoy velocidad 
                switch (this.direccion) {
                    case 1:
                        x = this.x - 30;
                        this.x = x;
                        break;
                    case 2:
                        break;
                    case 3:
                        x = this.x + 30;
                        this.x = x;

                }
            }
        }





    } //move

    collisionPlayer(p_x, p_y) { // deteccion de coliciones entre la abeja y las paredes

        if (p_x <= this.x + 30 && p_x+30 >= this.x
        && p_y <= this.y + 30 && p_y+30 >= this.y) {
            this.x = -1;
            this.y = 0;
            return true; 
        } //end if 
    
    
    } //collisionPlayer
}//end enemy class