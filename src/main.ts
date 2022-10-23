import Vue from "vue";

import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import VCA, { createApp, h } from "@vue/composition-api";
import "./style.scss";
import VueRouter from "vue-router";
import elementui from "./utils/element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.scss";
import "tailwindcss/tailwind.css";
import './permission'

Vue.config.productionTip = false;

Vue.use(VCA);
Vue.use(VueRouter);
console.log("elementui", elementui);
elementui.forEach((v: any) => {
  Vue.use(v);
});
const app = createApp({
  router,
  store,
  render: () => h(App),
});

app.mount("#app");
