import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";

// Importa Toastification y su CSS
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // Puedes personalizar las opciones aquí
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
};

createApp(App)
  .use(router)
  .use(Toast, options) // Usa el plugin de Toastification
  .mount("#app");
