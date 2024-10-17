import SignUp from "./components/SignUp.vue";
import CancelarTickets from "./components/CancelarTickets.vue";
import RegistrarTickets from "./components/RegistrarTickets.vue";
import RegistrarUsuario from "./components/RegistrarUsuario.vue"; 
import DeliveryTickets from "./components/DeliveryTickets.vue";
import AssignmentTickets from "./components/AssignmentTickets.vue";
import PerfilUsuario from "./components/PerfilUsuario.vue";
import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "./components/Dashboard.vue";

const routes = [
  {
    name: "SignUp",
    component: SignUp,
    path: "/",
  },
  {
    name: "Dashboard", // Ensure you match the name here with the component import
    component: DashboardView, // Use DashboardView instead of Dashboard
    path: "/Dashboard" ,
  },
  {
    name: "CancelarTickets",
    component: CancelarTickets,
    path: "/cancelar-tickets",
  },
  {
    name: "RegistrarTickets",
    component: RegistrarTickets,
    path: "/registrar-tickets"
  },
  {
    name: "DeliveryTickets",
    component: DeliveryTickets, 
    path: "/delivery-tickets"
  },
  {
    name: "AssignmentTickets",  
    component: AssignmentTickets,
    path: "/assignment-tickets"  
  },
  {
    name: "PerfilUsuario",
    component: PerfilUsuario,
    path: "/perfil-usuario",
  },
  {
    name: "RegistrarUsuario",
    component: RegistrarUsuario,
    path: "/registrar-usuario",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
