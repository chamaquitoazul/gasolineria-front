<template>
    <div class="top-rectangle"></div>
    <div class="container">
      <!-- Menú de Navegación Vertical -->
      <aside class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <nav class="menu">
          <router-link to="/registrar-tickets" class="menu-item">
            <img :src="registerIcon" alt="Register Ticket Icon" class="icon">
            Register Ticket
          </router-link>
          <router-link to="/" class="menu-item">
            <img :src="dashboardIcon" alt="Dashboard Icon" class="icon">
            Dashboard
          </router-link>
          <router-link to="/delivery-tickets"  class="menu-item active">
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
    
      <!-- Área de Contenido Principal -->
      <main class="content">
        <div class="content-box">
          <div class="form">
            <div class="form-group">
              <label for="deliveryId">Delivery ID:</label>
              <input type="text" id="deliveryId" v-model="deliveryTicket.deliveryId" />
            </div>
            <div class="form-group">
              <label for="driver">Driver:</label>
              <select id="driver" v-model="deliveryTicket.driver">
                <option value="" disabled>Select driver</option>
                <option v-for="driver in drivers" :key="driver.id" :value="driver.name">{{ driver.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="vehicle">Vehicle:</label>
              <select id="vehicle" v-model="deliveryTicket.vehicle">
                <option value="" disabled>Select vehicle</option>
                <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.name">{{ vehicle.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="department">Department:</label>
              <select id="department" v-model="deliveryTicket.department">
                <option value="" disabled>Select department</option>
                <option v-for="department in departments" :key="department.id" :value="department.name">{{ department.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="province">Province:</label>
              <select id="province" v-model="deliveryTicket.province">
                <option value="" disabled>Select province</option>
                <option v-for="province in provinces" :key="province.id" :value="province.name">{{ province.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="municipality">Municipality:</label>
              <select id="municipality" v-model="deliveryTicket.municipality">
                <option value="" disabled>Select municipality</option>
                <option v-for="municipality in municipalities" :key="municipality.id" :value="municipality.name">{{ municipality.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="reason">Reason:</label>
              <input type="text" id="reason" v-model="deliveryTicket.reason" />
            </div>
            <div class="form-group">
              <label for="registerDate">Register Date:</label>
              <input type="date" id="registerDate" v-model="deliveryTicket.registerDate" />
            </div>
            <div class="form-group">
              <label for="travelDate">Travel Date:</label>
              <input type="date" id="travelDate" v-model="deliveryTicket.travelDate" />
            </div>
            <div class="form-group">
              <label for="amount">Amount:</label>
              <input type="number" id="amount" v-model="deliveryTicket.amount" />
            </div>
          </div>
    
          <!-- Denomination & Availability -->
          <div class="denomination-availability">
            <div class="denomination">
              <h4>Denomination</h4>
              <div v-for="(denomination, index) in denominations" :key="index">
                <span>{{ denomination }}</span>
                <input type="number" v-model="denominationValues[index]" />
              </div>
              <div>Total: {{ denominationTotal }}</div>
            </div>
            <div class="availability">
              <h4>Availability</h4>
              <div v-for="(availability, index) in availabilities" :key="index">
                <span>{{ availability }}</span>
                <input type="number" v-model="availabilityValues[index]" />
              </div>
              <div>Total: {{ availabilityTotal }}</div>
            </div>
          </div>
    
          <!-- Botones -->
          <div class="form-buttons">
            <button @click="saveTicket" class="save-button">Save</button>
            <button @click="clearForm" class="cancel-button">Cancel</button>
            <button @click="printTicket" class="print-button">Print</button>
          </div>
    
          <!-- Detalle de Ticket -->
          <div class="details-ticket">
            <h3>Details Ticket</h3>
            <textarea v-model="deliveryTicket.details"></textarea>
          </div>
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
  import editIcon from '../assets/edit-3-svgrepo-com.svg';
  
  export default {
    name: 'DeliveryTickets',
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
        deliveryTicket: {
          deliveryId: '',
          driver: '',
          vehicle: '',
          department: '',
          province: '',
          municipality: '',
          reason: '',
          registerDate: '',
          travelDate: '',
          amount: '',
          details: ''
        },
        drivers: [], // Aquí agregarías los datos reales de los conductores
        vehicles: [], // Lista de vehículos
        departments: [], // Lista de departamentos
        provinces: [], // Lista de provincias
        municipalities: [], // Lista de municipios
        denominations: [200, 500, 1000, 2000],
        denominationValues: [0, 0, 0, 0],
        availabilities: [200, 500, 1000, 2000],
        availabilityValues: [0, 0, 0, 0]
      };
    },
    computed: {
      denominationTotal() {
        return this.denominationValues.reduce((acc, val) => acc + val, 0);
      },
      availabilityTotal() {
        return this.availabilityValues.reduce((acc, val) => acc + val, 0);
      }
    },
    methods: {
      saveTicket() {
        alert('Ticket saved!');
      },
      logout() {
      this.$router.push({ name: 'SignUp' });
    },
      clearForm() {
        this.deliveryTicket = {
          deliveryId: '',
          driver: '',
          vehicle: '',
          department: '',
          province: '',
          municipality: '',
          reason: '',
          registerDate: '',
          travelDate: '',
          amount: '',
          details: ''
        };
        this.denominationValues = [0, 0, 0, 0];
        this.availabilityValues = [0, 0, 0, 0];
      },
      printTicket() {
        alert('Printing ticket...');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #ffffff;
    padding: 20px;
  }
  
  .logo {
    width: 150px;
    margin-bottom: 20px;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    background-color: #f7f7f7;
  }
  
  .content-box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    font-weight: bold;
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .save-button, .cancel-button, .print-button {
    padding: 10px;
    color: white;
    background-color: #d32f2f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .denomination-availability {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
  
  .denomination h4, .availability h4 {
    margin-bottom: 10px;
  }
  
  .details-ticket {
    margin-top: 20px;
  }
  
  .details-ticket textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
  }
  </style>
  