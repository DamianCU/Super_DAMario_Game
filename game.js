import {createAnimations} from './animations.js';
import { checkControls } from './controls.js';

/* Global Phaser */
const config= {
    autoFocus: false,
    type: Phaser.AUTO, // webgl, canvas
    width: 256,
    height: 244,
    backgroundColor: "#049cd8",
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    scene: {
        preload, // se ejecutará para precargar recursos
        create, // se ejecuta cuando el juego comienza
        update  // se ejecuta en cada frame
    }
}

new Phaser.Game(config)
// this -> game -> el juego que estamos construyendo
function preload() {
    this.load.image(
        'cloud1', 'assets/scenery/overworld/cloud1.png'
    )
    
    this.load.image(
        'floorbricks',
        'assets/scenery/overworld/floorbricks.png'
    )
    this.load.spritesheet(
        'mario',
        'assets/entities/mario.png',
        {frameWidth: 18, frameHeight:16}
    )
    this.load.audio('gameover', 'assets/sound/music/gameover.mp3')

}

function create() {
    // image(x, y, id-del-aset)
    this.add.image(100,50,'cloud1')
        .setOrigin(0.5, 0.5)
        .setScale(0.2);
    
    //Esto es para que los suelos sean firmes
    this.floor = this.physics.add.staticGroup()

    this.floor 
        .create(0, config.height - 16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()

    this.floor 
        .create(150, config.height - 16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()


    this.mario = this.physics.add.sprite(50, 100, 'mario')
        .setOrigin(0, 1)
        .setCollideWorldBounds(true)
        .setGravityY(800)
    
    this.mario.isDead = false
    
    this.physics.world.setBounds(0, 0, 2000, config.height)
    this.physics.add.collider(this.mario, this.floor)

    this.cameras.main.setBounds(0, 0, 2000, config.height)
    this.cameras.main.startFollow(this.mario)

    createAnimations(this)

    this.keys = this.input.keyboard.createCursorKeys()
}



function update() {
    checkControls(this)

    const {mario, sound, scene} = this

    if(mario.y >= config.height){
        mario.isDead = true
        mario.anims.play('mario-dead')
        mario.setCollideWorldBounds(false)
        try {
          sound.add('gameover', {volume: 0.2}).play()
        }catch(e){

        }

        setTimeout(() => {
          mario.setVelocityY(-300)
        },2000)

        setTimeout(() => {
          scene.restart()
        },2000)
    }
}