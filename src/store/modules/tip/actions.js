import { SET, SAVE, RESET, SAVE_RESET } from "./types";

export default {
  [SET]({ commit }, value) {
    commit(SAVE, value);
  },

  [RESET]({ commit }) {
    commit(SAVE_RESET);
  },
};
