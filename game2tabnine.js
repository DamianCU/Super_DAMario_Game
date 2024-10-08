/* import { createAnimations } from './animations.js';
import { checkControls } from './controls.js';
import { initAudio, playAudio } from './audio.js';
import { initSpriteSheet } from './sprites.js';



const config = {
  autoFocus: false,
  type: Phaser.AUTO,
  width: 256,
  height: 244,
  backgroundColor: '#049cd8',
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

new Phaser.Game(config);

function preload() {
  this.load.image('cloud1', 'assets/scenery/overworld/cloud1.png');
  this.load.image('floorbricks', 'assets/scenery/overworld/floorbricks.png');

  initSpriteSheet(this);
  initAudio(this);
}

function create() {
  createAnimations(this);

  this.add.image(100, 50, 'cloud1')
    .setOrigin(0.5, 0.5)
    .setScale(0.2);

  this.floor = this.physics.add.staticGroup();

  this.floor
    .create(0, config.height - 16, 'floorbricks')
    .setOrigin(0, 0.5)
    .refreshBody();

  this.floor
    .create(150, config.height - 16, 'floorbricks')
    .setOrigin(0, 0.5)
    .refreshBody();

  this.mario = this.physics.add.sprite(50, 100, 'mario')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(800);

  this.enemy = this.physics.add.sprite(120, config.height - 32, 'goomba')
    .setOrigin(0, 1)
    .setGravityY(300)
    .setVelocityX(-50);

  this.coins = this.physics.add.staticGroup();
  this.coins.create(150, 150, 'coin').anims.play('coin-idle', true);

  this.physics.world.setBounds(0, 0, 2000, config.height);
  this.physics.add.collider(this.mario, this.floor);
  this.physics.add.collider(this.enemy, this.floor);
  this.physics.add.collider(this.mario, this.enemy, onHitEnemy, null, this);

  this.cameras.main.setBounds(0, 0, 2000, config.height);
  this.cameras.main.startFollow(this.mario);

  this.enemy.anims.play('goomba-walk', true);
  this.keys = this.input.keyboard.createCursorKeys();
}

function onHitEnemy(mario, enemy) {
  if (mario.body.touching.down && enemy.body.touching.up) {
    enemy.anims.play('goomba-hurt', true);
    mario.setVelocityY(-200);

    playAudio('goomba-stomp', this);

    setTimeout(() => {
      enemy.destroy();
    }, 500);
  } else {
    killMario(this);
  }
}

function update() {
  checkControls(this);

  if (this.mario.y >= config.height) {
    killMario(this);
  }
}

function killMario({ game }) {
  const { mario, scene } = game;

  if (mario.isDead) return;
  mario.isDead = true;

  mario.anims.play('mario-dead');
  mario.setCollideWorldBounds(false);

  playAudio('gameover', game, { volume: 0.2 });

  mario.body.checkCollision.none = true;
  mario.setVelocityX(0);

  setTimeout(() => {
    mario.setVelocityY(-250);
  }, 100);

  setTimeout(() => {
    scene.restart();
  }, 2000);
} */