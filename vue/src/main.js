import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.css";

const app = createApp(App);

if (router) {
  app.use(router);
}

app.mount("#app");
