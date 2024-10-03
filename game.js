/* Global Phaser */
const config= {
    type: Phaser.AUTO, // webgl, canvas
    width: 256,
    height: 244,
    backgroundColor: "white",
    parent: 'game',
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
}

function create() {
    this.add.image(0,0,'cloud1')
}

function update() {
    console.log('update');    
}