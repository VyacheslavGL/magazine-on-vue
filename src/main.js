/*import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");*/

import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VuetifyConfirm from 'vuetify-confirm'
import firebaseConfig from "./config/firebase";
import firebase from 'firebase';
import "firebase/firestore"
import VueYouTubeEmbed from 'vue-youtube-embed'
import FormattedDate from './filters/formattedDate'


Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
});

Vue.filter('formattedDate', FormattedDate);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
db.settings({
  // timestampsInSnapshots:true
});

// Vue.prototype.$db = firebase.database();
Vue.$db = db;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
            // console.log('vm.$store.dispatch:', vm.$store.dispatch);
          vm.$store.dispatch('STATE_CHANGED', user)

    });

    this.$store.dispatch('LOAD_BOOKS')
  }
}).$mount('#app');