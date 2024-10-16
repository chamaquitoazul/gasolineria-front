<template>
    <div class="top-rectangle"></div>
    
    <div class="container">
      <!-- Menú de Navegación Vertical -->
      <aside class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <nav class="menu">
          <a href="#" class="menu-item">
            <i class="icon">👤</i>
            Perfil
          </a>
          <a href="#" class="menu-item active">
            <i class="icon">👥</i>
            Gestión de Usuarios
          </a>
          <a href="#" class="menu-item">
            <i class="icon">🔒</i>
            Cambiar Contraseña
          </a>
          <a href="#" class="menu-item">
            <i class="icon">🚪</i>
            Logout
          </a>
        </nav>
      </aside>
  
      <!-- Área de Contenido Principal -->
      <main class="content">
        <div class="content-box">
          <header class="content-header">
            <h1>Gestión de Usuarios</h1>
            <button class="add-user-btn">+ Registrar cuenta</button>
          </header>
  
          <!-- Tabla de Usuarios -->
          <table class="user-table">
            <thead>
              <tr>
                <th>ID Empleado</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>#{{ user.id }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>
                  <button @click="editUser(user.id)" class="action-btn edit-btn">✏️</button>
                  <button @click="deleteUser(user.id)" class="action-btn delete-btn">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script>
export default {
  name: 'PerfilUsuario',
  data() {
    return {
      users: [
        { id: 20462, email: "Ejemplo02@hotmail.com", role: "Administrador" },
        { id: 18933, email: "Ejemplo02@hotmail.com", role: "Administrador" },
        { id: 45169, email: "Ejemplo02@hotmail.com", role: "Chofer" },
        { id: 34304, email: "Ejemplo02@hotmail.com", role: "Chofer" },
        { id: 17188, email: "Ejemplo02@hotmail.com", role: "Chofer" },
        { id: 73003, email: "Ejemplo02@hotmail.com", role: "Supervisor" },
        { id: 58825, email: "Ejemplo02@hotmail.com", role: "Administrador" },
        { id: 44122, email: "Ejemplo02@hotmail.com", role: "Supervisor" },
        { id: 89094, email: "Ejemplo02@hotmail.com", role: "Administrador" },
        { id: 85252, email: "Ejemplo02@hotmail.com", role: "Supervisor" },
      ],
    };
  },
  methods: {
    gocambiarContrasena() {
      this.$router.push({ name: 'CambiarContrasena' });
    },
    editUser(id) {
      console.log("Editar usuario", id);
    },
    deleteUser(id) {
      console.log("Eliminar usuario", id);
    },
  },
};
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
  
  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 5px;
    transition: background-color 0.3s;
  }
  
  .menu-item:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
  
  .menu-item.active {
    background-color: rgba(255, 0, 0, 0.1);
  }
  
  /* Contenido Principal */
  .content {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content-box {
    width: 95%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .add-user-btn {
    background-color: #ff0000;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-user-btn:hover {
    background-color: #c62828; /* Color de fondo al pasar el ratón */
  }
  
  /* Tabla de Usuarios */
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .user-table th,
  .user-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .user-table th {
    background-color: #f9f9f9;
  }
  
  .user-table tr:nth-child(even) {
    background-color: #fef4f4;
  }
  
  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .edit-btn {
    color: #ff9800;
  }
  
  .delete-btn {
    color: #f44336;
  }
  </style>
  