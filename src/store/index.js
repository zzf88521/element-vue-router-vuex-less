import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//暂无内容，需要再加
 const store = new Vuex.Store({
  state: {
  	language: 'zh'
  },
  actions: {

  },
  mutations: {
  	changeLanguage(state,lang){
  		state.language = lang;
  		Vue.config.lang = state.language;
  	}
  }
})


 export default store;