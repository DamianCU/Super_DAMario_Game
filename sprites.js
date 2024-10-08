const INIT_SPRITESHEETS = [
    {
        key: 'mario',
        path: 'assets/entities/mario.png',
        frameWidth: 18,
        frameHeight: 16
    },
    {
        key: 'goomba',
        path: 'assets/entities/overworld/goomba.png',
        frameWidth: 16,
        frameHeight: 16
    },
    {
        key: 'coin',
        path: 'assets/collectibles/coin.png',
        frameWidth: 16,
        frameHeight: 16
    }
]

export const initSpriteSheet = ({load}) => {
    INIT_SPRITESHEETS.forEach(({key, patch, frameWidth, frameHeight}) =>{
        load.spritesheet(key, patch, {frameWidth, frameHeight})
    })
}