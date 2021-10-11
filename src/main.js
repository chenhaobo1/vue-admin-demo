import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import SvgIcon from './components/SvgIcon'
import "element-plus/lib/theme-chalk/index.css";

const req = require.context('./components/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

createApp(App)
.use(store)
.use(ElementPlus)
.use(router)
.component('svg-icon',SvgIcon)
.mount("#app");
