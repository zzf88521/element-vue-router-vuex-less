import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/'
import store from './store/'
import locales from './locales/'
import VueI18n from 'vue-i18n'

import App from './App.vue'

Vue.use(ElementUI)

//国际化
Vue.use(VueI18n)

Vue.config.lang = 'zh' //默认中文
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
