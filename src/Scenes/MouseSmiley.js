class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley"); 
        this.my = {sprite: []};  // store multiple face
    }


    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>';

        this.input.on('pointerdown', (pointer) => {
            let x = pointer.x;
            let y = pointer.y;

            // Create a group of sprites at the mouse click location
            let body = this.add.sprite(x, y, "yellowBody");
            let smile = this.add.sprite(x, y + 20, "smile");

            // Store them if needed later (like for updates)
            this.my.sprite.push({ body: body, smile: smile });
        });
    }

    update() {
        // For now, no dynamic updates needed
    }
}