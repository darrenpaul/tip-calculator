import { createStore } from "vuex";

import billModule from "./modules/bill";
import peopleModule from "./modules/people";
import tipModule from "./modules/tip";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  bill: billModule,
  people: peopleModule,
  tip: tipModule,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
});
