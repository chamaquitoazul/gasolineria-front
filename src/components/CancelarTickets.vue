<template>
  <div class="top-rectangle"></div>
  <div class="container">
    <!-- Menú de Navegación Vertical -->
    <aside class="sidebar">
      <img class="logo" src="../assets/logo.png" alt="Logo">
      <nav class="menu">
        <a href="#" class="menu-item" @click="gotickets">
          <img :src="registerIcon" alt="Register Ticket Icon" class="icon">
          Register Ticket
        </a>
        <a href="#" class="menu-item">
          <img :src="dashboardIcon" alt="Dashboard Icon" class="icon">
          Dashboard
        </a>
        <a href="#" class="menu-item">
          <img :src="deliveryIcon" alt="Delivery Ticket Icon" class="icon">
          Delivery Ticket
        </a>
        <a href="#" class="menu-item">
          <img :src="assignmentIcon" alt="Assignment Ticket Icon" class="icon">
          Assignment Ticket
        </a>
        <a href="#" class="menu-item">
          <img :src="reportsIcon" alt="Reports Icon" class="icon">
          Reports
        </a>
        <a href="#" class="menu-item active">
          <img :src="cancelIcon" alt="Cancel Ticket Icon" class="icon">
          Cancel Ticket
        </a>
        <a href="#" class="menu-item logout" @click="logout">
          <img :src="logoutIcon" alt="Logout Icon" class="icon">
          Logout
        </a>
      </nav>
    </aside>
   
    <!-- Área de Contenido Principal -->
    <main class="content">
      <div class="content-box">
        <!-- Tabla de Tickets -->
        <table class="ticket-table">
          <thead>
            <tr>
              <th>DeliveryID</th>
              <th>EmployeeNumber</th>
              <th>FullName</th>
              <th>TravelDate</th>
              <th>Amount</th>
              <th>TravelReason</th>
              <th>VehiclesID</th>
              <th>Ficha</th>
              <th>Model</th>
              <th>Chasis</th>
              <th>VehiclePlate</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in tickets" :key="index">
              <td>{{ ticket.DeliveryID }}</td>
              <td>{{ ticket.EmployeeNumber }}</td>
              <td>{{ ticket.FullName }}</td>
              <td>{{ ticket.TravelDate }}</td>
              <td>{{ ticket.Amount }}</td>
              <td>{{ ticket.TravelReason }}</td>
              <td>{{ ticket.VehiclesID }}</td>
              <td>{{ ticket.Ficha }}</td>
              <td>{{ ticket.Model }}</td>
              <td>{{ ticket.Chasis }}</td>
              <td>{{ ticket.VehiclePlate }}</td>
              <td>{{ ticket.Status }}</td>
              <td>
                <button class="cancel-button" @click="cancelTicket(ticket)">
                  <img :src="trashIcon" alt="Trash Icon" class="icon">
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
import trashIcon from '../assets/trash-bin-trash-svgrepo-com.svg';

export default {
  name: 'CancelarTickets',
  data() {
    return { 
      registerIcon,
      dashboardIcon,
      deliveryIcon,
      assignmentIcon,
      reportsIcon,
      cancelIcon,
      logoutIcon,
      trashIcon,
      tickets: [
        {
          DeliveryID: 'D123',
          EmployeeNumber: 'E001',
          FullName: 'John Doe',
          TravelDate: '2023-10-10',
          Amount: '100.00',
          TravelReason: 'Business',
          VehiclesID: 'V456',
          Ficha: 'F789',
          Model: 'Toyota',
          Chasis: 'CH12345',
          VehiclePlate: 'ABC123',
          Status: 'Pending'
        },
        {
          DeliveryID: 'D124',
          EmployeeNumber: 'E002',
          FullName: 'Jane Smith',
          TravelDate: '2023-10-12',
          Amount: '150.00',
          TravelReason: 'Training',
          VehiclesID: 'V457',
          Ficha: 'F790',
          Model: 'Honda',
          Chasis: 'CH67890',
          VehiclePlate: 'DEF456',
          Status: 'Approved'
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'SignUp' });
    },
    gotickets() {
      this.$router.push({ name: 'RegistrarTickets' });
    },
    cancelTicket(ticket) {
      alert(`Cancelando ticket para: ${ticket.FullName}`);
      // Lógica adicional para cancelar el ticket
    }
  }
}
</script>


  
  
  <style>
  /* Asegura que html y body ocupen toda la pantalla sin márgenes ni padding */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  /* Contenedor principal */
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, #FFEAE0, #F16564);
  }
  
  /* Sidebar de navegación */
  .sidebar {
    width: 250px;
    background-color: #ffffff;
    color: #ff0000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para un efecto de separación */
  }
  
  .logo {
    width: 250px;
    margin-bottom: 20px;
  }
  
  /* Menú de navegación */
  .menu {
    width: 100%;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: #000000;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .menu-item .icon {
    margin-right: 10px;
    font-size: 20px;
  }
  
  .menu-item:hover, .menu-item.active {
    background-color: rgba(255, 0, 0, 0.1); /* Fondo rojo claro para el hover */
  }
  
  .logout {
    margin-top: 100px;
    margin-bottom: 20px;
    padding-top: 20px;
    color: #000000;
}

  
  /* Área de contenido principal */
  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow: hidden; /* Previene el desplazamiento vertical */
  }
  
  .content-box {
    width: 95%;
    height: 86%;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* Permite el desplazamiento interno si el contenido es grande */
    padding: 20px;
  }

  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-group {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.input-group label {
  margin-right: 5px;
  font-weight: bold;
}

.input-group input, .input-group select {
  padding: 8px 10px;
    border-radius: 10px;
    border: 2px solid #ff0000;
    background-color: #ffffff;
}

.separator {
  margin-top: 10px;
  border: none;
  height: 8px;
  background-color: #B22222; /* Color rojo */
}

.ticket-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.ticket-table th, .ticket-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.ticket-table thead th {
  font-weight: bold;
  background-color: #f5f5f5;
}

.ticket-table tbody tr:nth-child(even) {
  background-color: #fef4f4;
}

.ticket-table .cancel-button {
  background: none;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s;
}

.ticket-table .cancel-button:hover {
  color: #d32f2f;
}

.icon {
  width: 35px;
  height: 50px;
  margin-right: 5px;
  vertical-align: middle;
  color: #d32f2f
}


  </style>
  