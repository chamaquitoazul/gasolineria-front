<template>
  <div>
    <div class="top-rectangle"></div>
    <div class="container">
   
      <aside class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <nav class="menu">
          <router-link to="/dashboard-chofer" class="menu-item active">
            <img :src="dashboardIcon" alt="Dashboard Icon" class="icon">
            Dashboard
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

      >
      <main class="content">
        <div class="content-box">
          <!-- Tabla de Pending Tickets -->
          <h2>Tickets Pendientes</h2>
          <table class="ticket-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Estimated Completion Date</th> <!-- Nueva columna -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="ticket in pendingTickets" :key="ticket.id">
                <td>{{ ticket.id }}</td>
                <td>{{ ticket.destination }}</td>
                <td :class="{'in-progress': ticket.status === 'In Progress', 'pending': ticket.status === 'Pending'}">{{ ticket.status }}</td>
                <td>{{ ticket.estimatedCompletionDate }}</td> <!-- Fecha estimada -->
              </tr>
            </tbody>
          </table>

          <!-- Tabla de Completed Tickets -->
          <h2>Tickets Completados</h2>
          <table class="ticket-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Destination</th>
                <th>Completion Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ticket in completedTickets" :key="ticket.id">
                <td>{{ ticket.id }}</td>
                <td>{{ ticket.destination }}</td>
                <td>{{ ticket.completionDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

import dashboardIcon from '../assets/dashboard-svgrepo-com.svg';
import logoutIcon from '../assets/logout-svgrepo-com.svg';
import userIcon from '../assets/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'; 

export default {
  name: "DashboardChofer",
  data() {
    return {
      dashboardIcon, 
      logoutIcon, 
      userIcon,
      pendingTickets: [
        { id: 'T001', destination: 'New York City', status: 'In Progress', estimatedCompletionDate: '2023-10-25' },
        { id: 'T002', destination: 'Los Angeles', status: 'Pending', estimatedCompletionDate: '2023-10-26' },
        { id: 'T003', destination: 'Chicago', status: 'In Progress', estimatedCompletionDate: '2023-10-27' },
        { id: 'T004', destination: 'Houston', status: 'Pending', estimatedCompletionDate: '2023-10-28' },
        { id: 'T005', destination: 'Dallas', status: 'In Progress', estimatedCompletionDate: '2023-10-29' }
      ],
      completedTickets: [
        { id: 'T006', destination: 'Phoenix', completionDate: '2023-10-17' },
        { id: 'T007', destination: 'Miami', completionDate: '2023-10-18' },
        { id: 'T008', destination: 'San Francisco', completionDate: '2023-10-19' }
      ]
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'SignUp' }); 
    },
    goToUserProfile() {
      this.$router.push('/perfil-usuario');
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
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

.user-icon {
  width: 50px; 
  height: 30px;
}

.content-box {
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.ticket-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.ticket-table th, .ticket-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.ticket-table th {
  background-color: #f1f1f1;
}


</style>
