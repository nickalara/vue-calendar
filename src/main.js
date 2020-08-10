import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC021293KbDxXi0HkWkXzFGSQQN_fnXFTQ",
  authDomain: "vue-calendar-c1f62.firebaseapp.com",
  databaseURL: "https://vue-calendar-c1f62.firebaseio.com",
  projectId: "vue-calendar-c1f62",
  storageBucket: "vue-calendar-c1f62.appspot.com",
  messagingSenderId: "386494734247",
  appId: "1:386494734247:web:beb23b46eefc0892192082"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
