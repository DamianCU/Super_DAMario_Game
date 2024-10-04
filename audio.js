const INIT_AUDIOS = [
  {
    key: 'gameover',
    path: 'assets/sound/music/gameover.mp3'
  },
  {
    key: 'goomba-stomp',
    path: 'assets/sound/effects/goomba-stomp.wav'
  }
];

export const initAudio = ({ load }) => {
  INIT_AUDIOS.forEach(({ key, path }) => {
    load.audio(key, path);
  });
};

export const playAudio = (id,{sound}, {volume=1} = {}) => {
    try{
        const audio = sound.get(id) || sound.add(id, {volume});
        audio.play();
        return audio;
    } catch(e) {
        console.log(e)
    }
}