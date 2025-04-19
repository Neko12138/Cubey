

class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = { sprite: {} };
    }

    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>';

        this.input.on('pointerdown', (pointer) => {
            // Create Cubey: head and smiley face at the click position
            let x = pointer.x;
            let y = pointer.y;

            // Head
            this.add.sprite(x, y, "yellowBody");

            // Eyes and smile (same as regular smile)
            this.add.sprite(x, y + 20, "smile");
        });
    }
}