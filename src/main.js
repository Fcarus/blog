import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from 'vue-router'
import Routes from './router'
import axios from "axios";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;


const router=new VueRouter({
   routes:Routes,
   mode:'history'
})

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.filter("to-uppercase",function (value){return value.toUpperCase();
});
Vue.filter("s-length",function (value){return value.slice(0,100);
});
/*
Vue.directive('rainbow',{
  bind(el){
    el.style.color = "#" +  Math.random().toString(16).slice(2,8);
  }
}),
 */
Vue.directive('theme',{
  bind(el,binding){
    if (binding.value=='wide'){
      el.style.maxWidth="1260px";
    }else if (binding.value=='narrow'){
      el.style.maxWidth="560px"
    }
  }
})
new Vue({
  render: h => h(App),
  router:router,
}).$mount("#app");
