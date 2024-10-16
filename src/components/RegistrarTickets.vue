<template>
  <div class="top-rectangle"></div>
  <div class="container">
    <!-- Menú de Navegación Vertical -->
    <aside class="sidebar">
      <img class="logo" src="../assets/logo.png" alt="Logo">
      <nav class="menu">
        <a href="#" class="menu-item active">
          <img :src="this.registerIcon" alt="Register Ticket Icon" class="icon">
          Register Ticket
        </a>
        <a href="#" class="menu-item">
          <img :src="this.dashboardIcon" alt="Dashboard Icon" class="icon">
          Dashboard
        </a>
        <a href="#" class="menu-item" @click="goDeliveryTickets">
          <img :src="this.deliveryIcon" alt="Delivery Ticket Icon" class="icon">
          Delivery Ticket
        </a>
        <a href="#" class="menu-item" @click="goAssignmentTickets">
          <img :src="assignmentIcon" alt="Assignment Ticket Icon" class="icon">
          Assignment Ticket
        </a>
        <a href="#" class="menu-item">
          <img :src="this.reportsIcon" alt="Reports Icon" class="icon">
          Reports
        </a>
        <a href="#" class="menu-item" @click="gocancelar">
          <img :src="this.cancelIcon" alt="Cancel Ticket Icon" class="icon">
          Cancel Ticket
        </a>
        <a href="#" class="menu-item logout" @click="logout">
          <img :src="this.logoutIcon" alt="Logout Icon" class="icon">
          Logout
        </a>
      </nav>
    </aside>

    <!-- Área de Contenido Principal -->
    <main class="content">
      <div class="content-box">
        <!-- Contador de tickets centrado -->
        <div class="ticket-counter-centered">
          <div class="counter-circle">
            <span>{{ tickets.length }}</span>
          </div>
          <p>Tickets creados</p>
        </div>

        <!-- Formulario de Registro -->
        <div class="form">
          <div class="form-group">
            <label for="denomination">Denomination</label>
            <select id="denomination" v-model="newTicket.denomination">
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
            </select>
          </div>
          <div class="form-group">
            <label for="registerDate">Fecha de registro</label>
            <input type="date" id="registerDate" v-model="newTicket.registerDate">
          </div>
          <div class="form-group">
            <label for="sequentialTicket">Ticket Secuencial</label>
            <input type="text" id="sequentialTicket" v-model="newTicket.sequentialTicket" placeholder="Ingrese ticket secuencial">
          </div>
          <div class="form-group">
            <label for="barcode">Barcode</label>
            <input type="text" id="barcode" v-model="newTicket.barcode" placeholder="Ingrese código de barras">
          </div>
          <div class="form-buttons">
            <button @click="addTicket" class="save-button">Guardar</button>
            <button @click="clearForm" class="cancel-button">Cancelar</button>
            <button @click="finalizeTicket" class="finalize-button">Finalizar</button>
          </div>
        </div>

        <!-- Tabla de Tickets Recientes -->
        <h3>Tickets creados recientemente</h3>
        <table class="recent-tickets">
          <thead>
            <tr>
              <th>Fecha de Creación</th>
              <th>Denominación</th>
              <th>Ticket Secuencial</th>
              <th>Código de Barra</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in tickets" :key="index">
              <td>{{ ticket.registerDate }}</td>
              <td>{{ ticket.denomination }}</td>
              <td>{{ ticket.sequentialTicket }}</td>
              <td>{{ ticket.barcode }}</td>
              <td>
                <button class="edit-button">
                  <img :src="editIcon" alt="Edit Icon" class="icon"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>


<script>
import registerIcon from '../assets/register-svgrepo-com.svg';
import dashboardIcon from '../assets/dashboard-svgrepo-com.svg';
import deliveryIcon from '../assets/mail-svgrepo-com.svg';
import assignmentIcon from '../assets/document-report-svgrepo-com.svg';
import reportsIcon from '../assets/file-search-alt-svgrepo-com.svg';
import cancelIcon from '../assets/cancel-svgrepo-com.svg';
import logoutIcon from '../assets/logout-svgrepo-com.svg';
import editIcon from '../assets/edit-3-svgrepo-com.svg'; // Agrega el icono de edición aquí

export default {
  name: 'RegistrarTickets',
  data() {
    return {
      registerIcon,
      dashboardIcon,
      deliveryIcon,
      assignmentIcon,
      reportsIcon,
      cancelIcon,
      logoutIcon,
      editIcon, // Agrega el icono de edición aquí
      newTicket: {
        denomination: '',
        registerDate: '',
        sequentialTicket: '',
        barcode: ''
      },
      tickets: [
        {
          registerDate: '2023-10-10',
          denomination: '500',
          sequentialTicket: '123456',
          barcode: 'ABC123'
        },
        {
          registerDate: '2023-10-12',
          denomination: '1000',
          sequentialTicket: '654321',
          barcode: 'XYZ789'
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'SignUp' });
    },
    gocancelar() {
      this.$router.push({ name: 'CancelarTickets' });
    },
    goDeliveryTickets() {
      this.$router.push({ name: 'DeliveryTickets' });
    },
    goAssignmentTickets() {
      this.$router.push({ name: 'AssignmentTickets' });
    },
    addTicket() {
      if (this.newTicket.denomination && this.newTicket.registerDate && this.newTicket.sequentialTicket && this.newTicket.barcode) {
        this.tickets.push({ ...this.newTicket });
        this.clearForm();
      } else {
        alert("Por favor, completa todos los campos del formulario.");
      }
    },
    clearForm() {
      this.newTicket = {
        denomination: '',
        registerDate: '',
        sequentialTicket: '',
        barcode: ''
      };
    },
    finalizeTicket() {
      alert("Ticket finalizado.");
      // Añadir lógica para finalizar el ticket
    }
  }
}
</script>

  


 <style scoped>
/* Contenedor Principal */
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #FFEAE0, #F16564);
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.menu-item.active {
  background-color: rgba(255, 0, 0, 0.1);
}

/* Contenido Principal */
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content-box {
  width: 95%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
}

/* Contador Centrally Positioned */
.ticket-counter-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.counter-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #F16564;
  color: #F16564;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

/* Formulario */
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px; /* Ajusta la distancia para el centrado */
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input, .form-group select {
  padding: 10px;
  border: 1px solid #ff0000;
  border-radius: 5px;
}

.form-buttons {
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

.save-button, .cancel-button, .finalize-button {
  flex: 1;
  padding: 10px;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button { background-color: #c62828; }
.cancel-button { background-color: #c62828; }
.finalize-button { background-color: #c62828; }

/* Tabla */
.recent-tickets {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.recent-tickets th, .recent-tickets td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.recent-tickets tr:nth-child(even) {
  background-color: #fef4f4;
}

.edit-button {
  background: none;
  border: none;
  color: #ff0000;
  font-size: 16px;
  cursor: pointer;
}

.edit-button:hover {
  color: #d32f2f;
}

.icon {
  width: px;
  height: 50px;
  margin-right: 5px;
  vertical-align: middle;
  color: #d32f2f
}

</style>
