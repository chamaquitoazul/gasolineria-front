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
        <router-link to="/cancelar-tickets" class="menu-item active">
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
    <h1>Cancelar Tickets</h1>
  </div>
  <div class="header-user" @click="goToUserProfile">
    <img src="../assets/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="User Icon" class="user-icon">
    <span>Usuario</span>
  </div>
</div>
    <main class="content">
      <div class="content-box">
        

        <div class="header">
          <div class="input-group">
            <label for="pedido">ID del pedido:</label>
            <input type="text" id="pedido" placeholder="Ingrese ID">
          </div>
          <div class="input-group">
            <label for="empleado">Empleado:</label>
            <input type="text" id="empleado" placeholder="Ingrese nombre">
          </div>
          <div class="input-group">
            <label for="filtro">Filtro:</label>
            <select id="filtro">
              <option>EmployeeNumber</option>
              <option>Ficha</option>
              <option>Vehículo ID</option>
            </select>
          </div>
        </div>
        <hr class="separator">
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

import { useToast } from 'vue-toastification'; 
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
      filterOption: 'EmployeeNumber', 
      tickets: [
        {
          DeliveryID: 'D1001',
          EmployeeNumber: 'E001',
          FullName: 'Juan Pérez',
          TravelDate: '2024-10-01',
          Amount: '100.00',
          TravelReason: 'Reunión de negocios',
          VehiclesID: 'V1234',
          Ficha: 'F001',
          Model: 'Toyota Corolla',
          Chasis: 'CH123456',
          VehiclePlate: 'ABC-1234',
          Status: 'Tomado',
          Action: 'Cancelar'
        },
        {
          DeliveryID: 'D1002',
          EmployeeNumber: 'E002',
          FullName: 'María López',
          TravelDate: '2024-10-02',
          Amount: '2000.00',
          TravelReason: 'Entrega de mercancía',
          VehiclesID: 'V5678',
          Ficha: 'F002',
          Model: 'Ford Ranger',
          Chasis: 'CH654321',
          VehiclePlate: 'DEF-5678',
          Status: 'Tomado',
          Action: 'Cancelar'
        },
        {
          DeliveryID: 'D1003',
          EmployeeNumber: 'E003',
          FullName: 'Carlos Ramírez',
          TravelDate: '2024-10-03',
          Amount: '200.00',
          TravelReason: 'Mantenimiento de sucursal',
          VehiclesID: 'V9101',
          Ficha: 'F003',
          Model: 'Chevrolet Cruze',
          Chasis: 'CH789012',
          VehiclePlate: 'GHI-9101',
          Status: 'Tomado',
          Action: 'Cancelar'
        },
        {
          DeliveryID: 'D1004',
          EmployeeNumber: 'E004',
          FullName: 'Ana Torres',
          TravelDate: '2024-10-04',
          Amount: '1200.00',
          TravelReason: 'Entrega urgente',
          VehiclesID: 'V1123',
          Ficha: 'F004',
          Model: 'Honda Civic',
          Chasis: 'CH345678',
          VehiclePlate: 'JKL-1123',
          Status: 'Tomado',
          Action: 'Cancelar'
        },
        {
          DeliveryID: 'D1005',
          EmployeeNumber: 'E005',
          FullName: 'Pedro García',
          TravelDate: '2024-10-05',
          Amount: '3000.00',
          TravelReason: 'Transporte de materiales',
          VehiclesID: 'V1456',
          Ficha: 'F005',
          Model: 'Hyundai Tucson',
          Chasis: 'CH901234',
          VehiclePlate: 'MNO-1456',
          Status: 'Tomado',
          Action: 'Cancelar'
        }
      ]
    };
  },
  setup() {
    const toast = useToast(); 
    return { toast };
  },
  computed: {
    
    filteredTickets() {
      return this.tickets.filter(ticket => {
        const searchValue = this.searchTerm.toLowerCase();
        return ticket[this.filterOption].toString().toLowerCase().includes(searchValue);
      });
    }
  },
  methods: { 

    goToUserProfile() {
      this.$router.push('/perfil-usuario'); 
    },

    logout() {
      this.$router.push({ name: 'SignUp' });
    },
    cancelTicket(ticket) {
      this.tickets = this.tickets.filter(t => t.DeliveryID !== ticket.DeliveryID);
      
      
      this.toast.success(`El ticket con ID ${ticket.DeliveryID} fue cancelado con éxito.`, {
        timeout: 3000, 
        position: 'top-right',
      });
    }
  }
};
</script>



    
 
 <style >

 
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
    background-color: rgba(255, 0, 0, 0.1); 
  }
  
  .logout {
    margin-top: 100px;
    margin-bottom: 20px;
    padding-top: 20px;
    color: #000000;
}

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow: hidden; 
  }
  
  .content-box {
    width: 95%;
    height: 86%;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
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
  background-color: #B22222; 
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

.notification {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50; 
  color: white;
  padding: 30px 30px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.top-rectangle {
  width: 100%;
  height: 53px;
  background: linear-gradient(to bottom, #FF5100, #992C2C, #14033C); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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
left: 90%;
font-size: 20px;
cursor: pointer;
font-weight: bold;
}

.user-icon{

  width: 50px; 
  height: 30px;

}

</style>
  