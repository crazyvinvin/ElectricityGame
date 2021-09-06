import "phaser";
let scene1 = new Phaser.Scene('Game');

let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: scene1,
};

let game = new Phaser.Game(config);
console.log(game);