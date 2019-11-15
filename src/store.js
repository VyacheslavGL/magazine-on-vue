import Vue from "vue";
import Vuex from "vuex";
import userModel from './store/user'
import generalModel from './store/general'
import booksModel from './store/books'
import userDataModule from "./store/userData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    userModel,
    generalModel,
    booksModel,
    userDataModule
  }
});
