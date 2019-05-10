import jikanjs from 'jikanjs';

export default {
  topAnime(num) {
    return jikanjs.loadTop('anime', num, 'airing');
  },
  randomCharacter() {
    let id = Math.floor(Math.random() * Math.floor(20000));
    return jikanjs.loadCharacter(id);
  },
};
