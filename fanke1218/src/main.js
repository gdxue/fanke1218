// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//导入懒加载模块
import VueLazyload from 'vue-lazyload'

//导入下拉加载模块
import vuedropload from 'vue-dropload'
Vue.use(vuedropload);

Vue.use(VueAwesomeSwiper);



//全局注册
Vue.use(VueLazyload, {
	// error: logoSrc,
	// loading: logoSrc,
	// try: 2
});


// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
