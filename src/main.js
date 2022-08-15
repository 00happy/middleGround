import Vue from 'vue'
import App from './App.vue'
import { Button, Icon,Carousel,CarouselItem,Pagination,Popover,Input } from 'element-ui';
import router from './router'
Vue.use(Button)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Popover)
Vue.use(Input)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
