<template>
  <div class="top-rectangle"></div>
  <div class="container">
    <aside class="sidebar">
      <img class="logo" src="../assets/logo.png" alt="Logo">
      <nav class="menu">
        <router-link to="/registrar-tickets" class="menu-item active">
          <img :src="registerIcon" alt="Register Ticket Icon" class="icon">
          Register Ticket
        </router-link>
        <router-link to="/Dashboard-view" class="menu-item">
          <img :src="dashboardIcon" alt="Dashboard Icon" class="icon">
          Dashboard
        </router-link>
        <router-link to="/delivery-tickets" class="menu-item">
          <img :src="deliveryIcon" alt="Delivery Ticket Icon" class="icon">
          Delivery Ticket
        </router-link>
        <router-link to="/assignment-tickets" class="menu-item">
          <img :src="assignmentIcon" alt="Assignment Ticket Icon" class="icon">
          Assignment Ticket
        </router-link>
        <router-link to="/reporte-componente" class="menu-item">
          <img :src="reportsIcon" alt="Reports Icon" class="icon">
          Reports
        </router-link>
        <router-link to="/cancelar-tickets" class="menu-item">
          <img :src="cancelIcon" alt="Cancel Ticket Icon" class="icon">
          Cancel Ticket
        </router-link>
        <a class="menu-item logout" @click="logout">
          <img :src="logoutIcon" alt="Logout Icon" class="icon">
          Logout
        </a>
      </nav>
    </aside>
    <div class="headerfuera">
  <div class="header-title">
    <h1>Registar Usuario</h1>
  </div>
  <div class="header-user" @click="goToUserProfile">
    <img src="../assets/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="User Icon" class="user-icon">
    <span>Usuario</span>
  </div>
</div>
    <main class="content">
      <div class="content-box">
      
        <div class="ticket-counter-centered">
          <div class="counter-circle">
            <span>{{ tickets.length }}</span>
          </div>
          <p>Tickets creados</p>
        </div>
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
                <button class="edit-button" @click="openEditModal(ticket)">
                  <img :src="editIcon" alt="Edit Icon" class="icon"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="isEditModalVisible" class="modal-overlay">
        <div class="modal">
          <h3>Editar Ticket</h3>
          <div class="form-group">
            <label for="editDenomination">Denomination</label>
            <select id="editDenomination" v-model="editTicket.denomination">
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editRegisterDate">Fecha de registro</label>
            <input type="date" id="editRegisterDate" v-model="editTicket.registerDate">
          </div>
          <div class="form-group">
            <label for="editSequentialTicket">Ticket Secuencial</label>
            <input type="text" id="editSequentialTicket" v-model="editTicket.sequentialTicket" placeholder="Ingrese ticket secuencial">
          </div>
          <div class="form-group">
            <label for="editBarcode">Barcode</label>
            <input type="text" id="editBarcode" v-model="editTicket.barcode" placeholder="Ingrese código de barras">
          </div>
          <div class="form-buttons">
            <button @click="saveEditedTicket" class="save-button">Guardar Cambios</button>
            <button @click="closeEditModal" class="cancel-button">Cancelar</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'; 
import registerIcon from '../assets/register-svgrepo-com.svg';
import dashboardIcon from '../assets/dashboard-svgrepo-com.svg';
import deliveryIcon from '../assets/mail-svgrepo-com.svg';
import assignmentIcon from '../assets/document-report-svgrepo-com.svg';
import reportsIcon from '../assets/file-search-alt-svgrepo-com.svg';
import cancelIcon from '../assets/cancel-svgrepo-com.svg';
import logoutIcon from '../assets/logout-svgrepo-com.svg';
import editIcon from '../assets/edit-3-svgrepo-com.svg';

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
      editIcon,
      newTicket: {
        denomination: '',
        registerDate: '',
        sequentialTicket: '',
        barcode: ''
      },
      tickets: [
        { denomination: '200', registerDate: '2023-10-01', sequentialTicket: 'A123', barcode: 'BC1234' },
        { denomination: '500', registerDate: '2023-10-02', sequentialTicket: 'B456', barcode: 'BC5678' },
        { denomination: '1000', registerDate: '2023-10-03', sequentialTicket: 'C789', barcode: 'BC91011' },
        { denomination: '2000', registerDate: '2023-10-04', sequentialTicket: 'D012', barcode: 'BC121314' },
        { denomination: '500', registerDate: '2023-10-05', sequentialTicket: 'E345', barcode: 'BC151617' }
      ],
      isEditModalVisible: false, 
      editTicket: {
        denomination: '',
        registerDate: '',
        sequentialTicket: '',
        barcode: ''
      }
    };
  },
  setup() {
    const toast = useToast(); 
    return { toast };
  },
  methods: {
    addTicket() {
      if (this.newTicket.denomination && this.newTicket.registerDate && this.newTicket.sequentialTicket && this.newTicket.barcode) {
        this.tickets.push({ ...this.newTicket });
        this.toast.success('El ticket fue creado con éxito'); 
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
    },
    logout() {
      this.$router.push({ name: 'SignUp' });
    },
    openEditModal(ticket) {
      this.editTicket = { ...ticket }; 
      this.isEditModalVisible = true;
    },

    goToUserProfile() {
      this.$router.push('/perfil-usuario'); 
    },
    closeEditModal() {
      this.isEditModalVisible = false;
    },
    saveEditedTicket() {
      const index = this.tickets.findIndex(t => t.sequentialTicket === this.editTicket.sequentialTicket);
      if (index !== -1) {
        this.tickets.splice(index, 1, this.editTicket); 
        this.toast.success('El ticket fue modificado con éxito'); 
      }
      this.closeEditModal();
    },
    goPerfilUsuario() {
      this.$router.push({ name: 'PerfilUsuario' });
    },
    goDashboard() {
      this.$router.push({ name: 'Dashboard' });
    }
  }
};
</script>





 <style scoped>


html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #FFEAE0, #F16564);
}


.sidebar {
    width: 250px;
    background-color: #ffffff;
    color: #ff0000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
  }

.logo {
  width: 200px;
  margin-bottom: 20px;
}

.menu-item.active {
  background-color: rgba(255, 0, 0, 0.1);
}

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


.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px; 
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


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}


.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.modal h3 {
  margin-bottom: 20px;
}

.modal .form-group {
  margin-bottom: 15px;
}

.modal .form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.modal .form-group input, .modal .form-group select {
  padding: 10px;
    width: auto;
    border: 1px solid #ff0000;
    border-radius: 5px;
}

.modal .form-buttons {
  display: flex;
  justify-content: space-between;
}

.modal .save-button, .modal .cancel-button {
  padding: 10px;
  width: 48%;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal .save-button:hover, .modal .cancel-button:hover {
  background-color: #c62828;
}


</style>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}


.logo {
    width: 200px;
    margin-bottom: 20px;
  }


  .header-title {
position: absolute;
top: 5%;
left: 15%;

}
.header-user {
position: absolute;
top: 7%;
left: 91%;
font-size: 20px;
cursor: pointer;
font-weight: bold;
}

.user-icon{

  width: 50px; 
  height: 30px;

}

</style>