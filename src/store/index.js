/**
 * Created by Administrator on 2018/2/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    book
  }
})
