<template>
  <div class="top-rectangle"></div>
  <div class="container">
  <aside class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <nav class="menu">
          <router-link to="/registrar-tickets" class="menu-item">
            <img :src="registerIcon" alt="Register Ticket Icon" class="icon">
            Register Ticket
          </router-link>
          <router-link to="/Dashboard-view" class="menu-item">
            <img :src="dashboardIcon" alt="Dashboard Icon" class="icon">
            Dashboard
          </router-link>
          <router-link to="/delivery-tickets"  class="menu-item ">
            <img :src="deliveryIcon" alt="Delivery Ticket Icon" class="icon">
            Delivery Ticket  
          </router-link>
          <router-link to="/assignment-tickets" class="menu-item">
            <img :src="assignmentIcon" alt="Assignment Ticket Icon" class="icon">
            Assignment Ticket
          </router-link>
          <router-link to="/reporte-componente" class="menu-item active">
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
   <!--<div class="report-container">
       Barra lateral izquierda
      <aside class="sidebar">
        <div class="logo">
          <img src="C:\Users\mateo\OneDrive\Documentos\GitHub\gasolineria-front\src\assets\logo.png" alt="Logo" />
          <h1>FUELTAG</h1>
        </div>
        <ul class="sidebar-menu">
          <li>Register Ticket</li>
          <li>Dashboard</li>
          <li>Delivery Ticket</li>
          <li>Assignment Ticket</li>
          <li>Reports</li>
          <li>Cancel Ticket</li>
          <li>Logout</li>
        </ul>
      </aside>-->

      <!-- Tabla de reportes -->
      <main class="report-table">
        <div class="intr-group">
            <label for="empleado">Empleado:</label>
            <input type="text" id="empleado" placeholder="Ingrese nombre" class="search-bar">
            <button class="search-button" @click="search">Buscar</button>
        </div>
        <div class="intr-group">
            <label for="searchDate">Fecha de busqueda</label>
            <input type="date" id="searchDate" placeholder="dd/mm/yy" class="search-bar">
          <button class="search-button" @click="search">Buscar</button>
          </div>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Vehículo</th>
              <th>Conductor</th>
              <th>Razón</th>
              <th>Despacho</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(report, index) in reports" :key="index">
              <td>{{ report.fecha }}</td>
              <td>{{ report.vehiculo }}</td>
              <td>{{ report.conductor }}</td>
              <td>{{ report.razon }}</td>
              <td>{{ report.despacho }}</td>
            </tr>
          </tbody>
        </table>
        <!-- Botón de descarga -->
        <div class="download-button">
          <button @click="downloadReport">Descargar</button>
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
  name: 'ReporteComponente',
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
        searchDate: '',
        travelDate: '',
        amount: '',
        details: ''
      },
      reports: [
        {
          fecha: "12/08/2022",
          vehiculo: "Toyota-Hilux",
          conductor: "Ramon Augusto a",
          razon: "Viaje a Santiago",
          despacho: "2,000"
        },
        {
          fecha: "12/08/2022",
          vehiculo: "Nissan-Frontier",
          conductor: "David Villanueva",
          razon: "Entrega",
          despacho: "5,000"
        },
        {
          fecha: "12/08/2022",
          vehiculo: "Nissan-Urvan",
          conductor: "aaaaaaa",
          razon: "Otra entrega",
          despacho: "2,500"
        }
      ]
    };
  },
  methods: {
    downloadReport() {
      
      alert("Downloading report...");
    },
    logout() {
      this.$router.push({ name: 'Logout' });
    }
  } 
};
</script>
  
  <style scoped>
  /* Diseño general de la pantalla */
  .report-container {
    display: flex;
    height: 100vh;
    background-color: #f8dada;
  }

  /* Barra lateral */
  .sidebar {
    background-color: #ffffff;
    width: 250px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo img {
    width: 100px;
    height: auto;
  }
  
  .logo h1 {
    margin: 10px 0;
  }
  
  .sidebar-menu {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
  
  .sidebar-menu li {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    text-align: left;
  }
  
  .sidebar-menu li:hover {
    background-color: #e35c5c;
  }

  
  /*.intr-group {
  display: flex;
  align-items: center;
  margin-right: 20px;
  }*/

  .intr-group {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.intr-group label {
  margin-right: 5px;
  font-weight: bold;
}

.intr-group input, .intr-group select {
  padding: 8px 10px;
    border-radius: 10px;
    border: 2px solid #ff0000;
    background-color: #ffffff;
}


.search-bar {
  width: 100%;
  max-width: 400px; /* Tamaño máximo */
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 25px; /* Bordes redondeados */
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;
}
.search-button {
  background-color: #980e0e;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 0 25px 25px 0; /* Bordes redondeados solo en el lado derecho */
  font-size: 16px;
  outline: none;
  transition: background-color 0.3s ease;
}
  
  /* Tabla de reportes */
  .report-table {
    flex-grow: 1;
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    margin: 20px;
    overflow: hidden;
    position: relative;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #f8dada;
  }
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  /* Botón de descarga */
  .download-button {
    text-align: right;
    margin-top: 20px;
  }
  
  button {
    background-color: #f16a6a;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d85a5a;
  }
  </style>
  