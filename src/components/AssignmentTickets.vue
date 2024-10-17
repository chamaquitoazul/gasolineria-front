<template>
    <div class="top-rectangle"></div>
    <div class="container">
      <!-- Sidebar Navigation -->
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
          <router-link to="/assignment-tickets" class="menu-item active">
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
  
      <!-- Main Content Area -->
      <main class="content">
        <div class="content-box">
          <div class="form">
  
            <!-- Actions Container -->
          <div class="actions-container">
            <button class="action-button new-button">
              <img :src="newIcon" alt="New Icon" class="icon">
              New
            </button>
            <button class="action-button edit-button">
              <img :src="editIcon" alt="Edit Icon" class="icon">
              Edit
            </button>
            <button class="action-button save-button">
              <img :src="saveIcon" alt="Save Icon" class="icon">
              Save
            </button>
            <button class="action-button delete-button">
              <img :src="deleteIcon" alt="Delete Icon" class="icon">
              Delete
            </button>
            <button class="action-button print-button">
              <img :src="printIcon" alt="Print Icon" class="icon">
              Print
            </button>
          </div>

  
            <!-- Year, Month, and Process -->
            <div class="assignment-process-container">
            <!-- Assignment Section -->
            <div class="assignment-container">
              <!-- Year Assignment -->
              <div class="form-group small-select">
                <label for="yearAssignment">Year Assignment:</label>
                <select id="yearAssignment" v-model="yearAssignment">
                  <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <!-- Month Assignment -->
              <div class="form-group small-select">
                <label for="monthAssignment">Month Assignment:</label>
                <select id="monthAssignment" v-model="monthAssignment">
                  <option v-for="(month, index) in months" :key="index" :value="month">{{ month }}</option>
                </select>
              </div>
  
              <!-- Assignment -->
              <div class="form-group assignment-list">
                <label for="assignment">Assignment:</label>
                <select id="assignment" v-model="selectedAssignment">
                  <option v-for="assignment in assignments" :key="assignment.id" :value="assignment">{{ assignment.name }}</option>
                </select>
              </div>
            </div>

            <!-- Process Button and Denominations -->
            <div class="process-denomination-container">
              <!-- Process Button -->
              <button @click="processTicket" class="process-button">
                <img :src="processIcon" alt="Process Icon" class="icon">
                Process
              </button>
  
              <!-- Denominations -->
              <div class="form-group denominations">
                <label>Denomination:</label>
                <div class="denominations-container">
                  <div v-for="(denomination, index) in denominations" :key="index" class="denomination-item">
                    <span>{{ denomination }}</span>
                    <input type="number" v-model="denominationValues[index]" class="small-input" />
                  </div>
                </div>
                <div>Total: {{ denominationTotal }}</div>
              </div>
            </div>
          </div>
          
          <!-- Ticket Details -->
          <div class="form-group ticket">
            <label for="ticketDetails">Ticket:</label>
            <textarea id="ticketDetails" v-model="ticketDetails"></textarea>
          </div>
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
  import newIcon from '../assets/new-icon.svg';
  import editIcon from '../assets/edit-icon.svg';
  import saveIcon from '../assets/save-icon.svg';
  import deleteIcon from '../assets/delete-icon.svg';
  import printIcon from '../assets/print-icon.svg';
  import processIcon from '../assets/process-icon.svg';

  
  export default {
    name: 'AssignmentTickets',
    data() {
      return {
        registerIcon,
        dashboardIcon,
        deliveryIcon,
        assignmentIcon,
        reportsIcon,
        cancelIcon,
        logoutIcon,
        newIcon,
        editIcon,
        saveIcon,
        deleteIcon,
        printIcon,
        processIcon,
        yearAssignment: 2024,
        monthAssignment: '',
        selectedAssignment: null,
        assignments: [], // Fetch your assignments here
        availableYears: [2024, 2023, 2022],
        months: [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        denominations: [200, 500, 1000, 2000],
        denominationValues: [0, 0, 0, 0],
        ticketDetails: ''
      };
    },
    computed: {
      denominationTotal() {
        return this.denominationValues.reduce((acc, val) => acc + val, 0);
      }
    },
    methods: {
      processTicket() {
        alert('Processing ticket with total denomination: ' + this.denominationTotal);
      },
      logout() {
      this.$router.push({ name: 'SignUp' });
    },
    }
  };
  </script>
  
  <style scoped>
  /* Container */
  .container {
    display: flex;  
  height: 100vh;
  
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
  
  /* Content */
  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .content-box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .icon {
  width: 16px;
  height: 16px;
  margin-right: 8px; /* Ajusta el espacio entre el ícono y el texto */
}
  
  .form {
    display: grid;
    gap: 15px;
  }
  
  /* Action buttons styling */
  .actions-container {
    display: flex;
    gap: 10px;
    justify-content: start;
  }
  
  .action-button {
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .action-button:hover {
    background-color: #45a049;
  }

  /* Asegura que las etiquetas y los selectores estén en columnas */
.form-group {
  display: flex;
  flex-direction: column;
}

/* Ajusta el ancho de los selectores para que se vean más uniformes */
.small-select select,
.assignment-list select {
  width: 250%;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* Ajusta el espacio entre las etiquetas y los selectores */
label {
  margin-bottom: 5px;
  font-weight: bold;
}
  
  .new-button { background-color: #2196F3; }
  .edit-button { background-color: #FFC107; }
  .save-button { background-color: #4CAF50; }
  .delete-button { background-color: #F44336; }
  .print-button { background-color: #607D8B; }
  
  /* Assignment container layout */
  .assignment-process-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* Assignment Container */
.assignment-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
}

/* Process and Denominations */
.process-denomination-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

/* Process Button */
.process-button {
  background-color: #FF5722;
  color: white;
  padding: 10px;
  width: 75px;
  height: 75px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.process-button:hover {
  background-color: #E64A19;
}

/* Denominations */
.denomination-item {
  display: flex;
  gap: 10px;
}

.denominations-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Small inputs for Denominations */
.small-input {
  width: 60px;
  padding: 4px;
  font-size: 12px;
  text-align: center;
}

/* Ticket textarea */
textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
  
  </style>