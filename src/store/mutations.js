import * as types from './mutation-types';

const mutations = {
  [types.SET_ENV](state, env) {
    state.env = env;
  },
  [types.SET_SID](state, sid) {
    state.sid = sid;
  }
};

export default mutations;
