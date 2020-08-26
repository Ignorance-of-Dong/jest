/*
 * @Author: zhangzheng
 * @Date: 2020-08-24 11:18:22
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-24 11:40:26
 * @Descripttion:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
