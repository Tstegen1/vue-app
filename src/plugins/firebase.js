import firebase from 'firebase/app';
import 'firebase/auth';
import store from '../store';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};  

export default {
  init() {
    // 初期化
    firebase.initializeApp(config);
    // 認証状態の永続性を決めるメソッド
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    // googleログイン
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)    
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    // ログイン状態を監視する
    firebase.auth().onAuthStateChanged((user) => {
      // 条件演算子
      user = user ? user : {};
      // user情報をstoreのmutationsに渡す
      store.commit('onAuthStateChanged', user);
      // ログイン状態をstoreのmutationsに渡す
      store.commit('onUserStateChanged', user.uid ? true : false);
    })
  }
}