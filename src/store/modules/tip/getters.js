import { AMOUNT } from "./types";

export default {
  [AMOUNT]: (state) => parseFloat(state.amount) / 100,
};
