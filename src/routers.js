import SignUp from "./components/SignUp.vue";
import CancelarTickets from "./components/CancelarTickets.vue";
import RegistrarTickets from "./components/RegistrarTickets.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "SignUp",
    component: SignUp,
    path: "/",
  },

  {
    name: "CancelarTickets",
    component: CancelarTickets,
    path: "/cancelar-tickets",
  },
  
  {
    name: "RegistrarTickets",
    component: RegistrarTickets,
    path:"/registrar-tickets"
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
