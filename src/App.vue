<template>
  <div>
    <div class="top-rectangle"></div>

    <div class="container">
      <!-- Menú de Navegación Vertical -->
      <aside class="sidebar">
        <img class="logo" src="@/assets/fueltag-removebg-preview 2.png" alt="Logo">
        <nav class="menu">
          <a href="#" class="menu-item">
            <i class="icon">📄</i>
            Register Ticket
          </a>
          <a href="#" class="menu-item active">
            <i class="icon">📊</i>
            Dashboard
          </a>
          <a href="#" class="menu-item">
            <i class="icon">✉️</i>
            Delivery Ticket
          </a>
          <a href="#" class="menu-item">
            <i class="icon">📑</i>
            Assignment Ticket
          </a>
          <a href="#" class="menu-item">
            <i class="icon">📈</i>
            Reports
          </a>
          <a href="#" class="menu-item">
            <i class="icon">🚫</i>
            Cancel Ticket
          </a>
          <a href="#" class="menu-item logout" @click="logout">
            <i class="icon">🚪</i>
            Logout
          </a>
        </nav>
      </aside>

      <!-- Área de Contenido Principal -->
      <main class="content">
        <!-- Encabezado con "Dashboard" y usuario -->
        <div class="header">
          <h1>Dashboard</h1>
          <div class="user-info">
            <img src="@/assets/User.png" alt="User" class="user-img">
            <button class="user-button" @click="handleUserClick">Usuario</button>
          </div>
        </div>

        <div class="content-box">
          <!-- Cuatro rectángulos de colores con contenido dentro -->
          <div class="ticket red-ticket">
            <div class="white-box">
              <img class="ticket-img" src="@/assets/fueltag-removebg-preview 2.png" alt="Ticket">
              <label class="ticket-label">TICKET 200</label>
              <img class="bar-img" src="@/assets/bar.png" alt="Bar">
            </div>
            <!-- Labels debajo del rectángulo -->
            <div class="ticket-info">
              <label class="small-label">Disponibilidad: XX    Status: XXXXXXXXXX</label>
            </div>
          </div>

          <div class="ticket blue-ticket">
            <div class="white-box">
              <img class="ticket-img" src="@/assets/fueltag-removebg-preview 2.png" alt="Ticket">
              <label class="ticket-label">TICKET 500</label>
              <img class="bar-img" src="@/assets/bar.png" alt="Bar">
            </div>
            <!-- Labels debajo del rectángulo -->
            <div class="ticket-info">
              <label class="small-label">Disponibilidad: XX    Status: XXXXXXXXXX</label>
            </div>
          </div>

          <div class="ticket green-ticket">
            <div class="white-box">
              <img class="ticket-img" src="@/assets/fueltag-removebg-preview 2.png" alt="Ticket">
              <label class="ticket-label">TICKET 1000</label>
              <img class="bar-img" src="@/assets/bar.png" alt="Bar">
            </div>
            <!-- Labels debajo del rectángulo -->
            <div class="ticket-info">
              <label class="small-label">Disponibilidad: XX    Status: XXXXXXXXXX</label>
            </div>
          </div>

          <div class="ticket yellow-ticket">
            <div class="white-box">
              <img class="ticket-img" src="@/assets/fueltag-removebg-preview 2.png" alt="Ticket">
              <label class="ticket-label">TICKET 2000</label>
              <img class="bar-img" src="@/assets/bar.png" alt="Bar">
            </div>
            <!-- Labels debajo del rectángulo -->
            <div class="ticket-info">
              <label class="small-label">Disponibilidad: XX    Status: XXXXXXXXXX</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CancelarTickets',
  methods: {
    logout() {
      this.$router.push({ name: 'SignUp' });
    },
    handleUserClick() {
      alert("Usuario button clicked!");
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
  width: 150px;
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
  margin-top: auto; /* Empuja el botón hacia abajo */
  margin-bottom: 20px; /* Añade espacio adicional debajo */
  padding-top: 200px; /* Espacio adicional arriba del botón */
  color: #000000;
}

/* Header de Dashboard y Usuario */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 40px;
}

.header h1 {
  font-size: 24px;
  margin-left: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-info .user-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
}

.user-button:hover {
  text-decoration: underline;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

/* Estilos para los rectángulos de colores */
.ticket {
  width: 412px;
  height: 252px;
  border-radius: 15px;
  position: relative;
}

.red-ticket {
  background-color: #951f1f;
}

.blue-ticket {
  background-color: #2e3ae9;
}

.green-ticket {
  background-color: #1d9830;
}

.yellow-ticket {
  background-color: #e9a107;
}

/* Estilos para los rectángulos blancos internos */
.white-box {
  width: 323px;
  height: 167px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.ticket-img {
  width: 100px; /* Tamaño de la imagen */
  margin-bottom: 10px; /* Espacio entre la imagen y el label */
}

.ticket-label {
  font-size: 34px;
  font-weight: bold;
  text-align: center;
}

/* Estilos para la imagen "bar.png" en la parte inferior */
.bar-img {
  width: 200px; /* Ajusta el tamaño de la imagen de la barra */
  margin-top: auto;
}

/* Estilos para los labels debajo de cada rectángulo */
.ticket-info {
  margin-top: 10px; /* Espacio entre el rectángulo y los labels */
  text-align: center;
}

.small-label {
  display: block;
  font-size: 14px;
  color: #000000;
}
</style>
