export const createAnimations = (game) => {
    // MARIO ANIMATIONS
    game.anims.create({
        key: 'mario-walk',
        frames: game.anims.generateFrameNumbers('mario', {start: 1, end: 3}),
        frameRate: 12,
        repeat: -1
    });

    game.anims.create({
        key: 'mario-idle',
        frames: [{key: 'mario', frame: 0}],
        frameRate: 12
    });

    game.anims.create({
        key: 'mario-jump',
        frames: [{key: 'mario', frame: 5}],
        frameRate: 12
    });

    game.anims.create({
        key: 'mario-dead',
        frames: [{key: 'mario', frame: 4}],
        frameRate: 12
    });

    // GOOMBA ANIMATIONS
    game.anims.create({
        key: 'goomba-walk',
        frames: game.anims.generateFrameNumbers('goomba', {start: 0, end: 1}),
        frameRate: 6,
        repeat: -1
    });

    game.anims.create({
        key: 'goomba-hurt',
        frames: [{key: 'goomba', frame: 2}],
        frameRate: 6
    });

    game.anims.create({
        key: 'coin-idle',
        frames: game.anims.generateFrameNumbers('coin', {start: 0, end: 3}),
        frameRate: 12,
        repeat: -1
    });
}
