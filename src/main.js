import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/styles/main.scss";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error("Error:", err);
  console.error("Info:", info);
};

app.use(router).mount("#app");
