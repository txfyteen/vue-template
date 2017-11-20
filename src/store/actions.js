import * as types from './mutation-types';

export const setEnv = function ({commit, state}, env) {
  commit(types.SET_ENV, env);
};
