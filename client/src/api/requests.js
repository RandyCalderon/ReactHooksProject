import jikanjs from 'jikanjs';

export default {
  topAnime() {
    return jikanjs.loadTop('anime', 1, 'airing');
  },
};
