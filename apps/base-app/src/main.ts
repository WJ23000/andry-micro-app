import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import microApp from '@micro-zoe/micro-app';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import "./uiAdapter";
import "./styles/common.styl";
import axios from "axios";
import { RequestService } from "@/login/src/service";

Vue.use(Antd);
microApp.start();

if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('base是基座应用');
}

Vue.config.productionTip = false;

axios.get("./config.json").then(res => {
  const data = res.data;
  const BASE_API = data.BASE_API;
  Vue.prototype.$BASE_API = data.BASE_API;
  Vue.prototype.$HOST = data.HOST;
  RequestService.defaults.baseURL = BASE_API;
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
