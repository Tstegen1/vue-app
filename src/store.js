import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}, //ログイン情報
    status: false, //ログイン状態
  },
  mutations: {
    //firebaseが返したユーザー情報
    onAuthStateChanged(state, user) {
      state.user = user;
    },
    // ログインしているかどうか
    onUserStateChanged(state, status) {
      state.status = status;
    }
  },
  getters: {
    //ログイン情報取得
    user(state) {
      return state.user;
    },
    // ログイン状態取得
    isSignIn(state) {
      return state.status;
    }
  }
})