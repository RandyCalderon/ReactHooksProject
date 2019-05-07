import jikanjs from 'jikanjs';

export default {
  topAnime(num) {
    return jikanjs.loadTop('anime', num, 'airing');
  },
};
