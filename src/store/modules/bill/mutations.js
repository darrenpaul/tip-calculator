import { SAVE, SAVE_RESET } from "./types";
import getDefaultState from "./state";

export default {
  [SAVE](state, data) {
    state.amount = data;
  },

  [SAVE_RESET](state) {
    Object.assign(state, getDefaultState());
  },
};
