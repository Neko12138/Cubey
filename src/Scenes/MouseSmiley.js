class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley"); 
        this.my = {sprite: []};  // store multiple face
    }


    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>';
        

        this.input.on('pointerdown', (pointer) => {
            //mouse
            let x = pointer.x;
            let y = pointer.y;

            //create
            let body = this.add.sprite(x, y, "yellowBody");
            let smile = this.add.sprite(x, y + 20, "smile");
        });
    }

}