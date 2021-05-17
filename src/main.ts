import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
process.env.NODE_ENV == "development" && require("@/mock/index");

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
