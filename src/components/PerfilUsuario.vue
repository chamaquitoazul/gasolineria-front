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
        <a href="#" class="menu-item" @click.prevent="logout">
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
          <button class="add-user-btn" @click="goRegistrarUsuario">+ Registrar cuenta</button>
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

        <!-- Pop-up de registro -->
        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <h2>Registrar Usuario</h2>
            <!-- Formulario de registro -->
            <form @submit.prevent="registerUser">
              <input type="email" placeholder="Correo" v-model="email" required>
              <input type="password" placeholder="Password" v-model="password" required>
              <select v-model="role" required>
                <option disabled value="">Seleccionar rol</option>
                <option>Supervisor</option>
                <option>Administrador</option>
                <option>Chofer</option>
              </select>
              <button type="submit">Registrar cuenta</button>
              <button type="button" @click="closeModal">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PerfilUsuario',
  data() {
    return {
      users: [], // Eliminar datos de prueba
      showModal: false, 
      email: '',
      password: '',
      role: '',
      nextId: 1, // Para asignar un ID único a los nuevos usuarios
    };
  },
  methods: {
    goRegistrarUsuario() {
      this.showModal = true; 
    },
    closeModal() {
      this.showModal = false; 
      this.resetForm(); // Limpiar el formulario al cerrar el modal
    },
    registerUser() {
      // Agregar el nuevo usuario a la lista
      this.users.push({
        id: this.nextId++, // Asignar un ID único
        email: this.email,
        role: this.role,
      });

      console.log(`Registrando usuario con correo: ${this.email}, rol: ${this.role}`);
      this.closeModal(); 
    },
    editUser(id) {
      console.log("Editar usuario", id);
    },
    deleteUser(id) {
      console.log("Eliminar usuario", id);
      this.users = this.users.filter(user => user.id !== id); // Eliminar usuario de la lista
    }, 
    logout() {
    this.$router.push({ name: 'SignUp' }); // Cambia 'SignUp' a la ruta que quieras redirigir para el logout
  },



    resetForm() {
      this.email = '';
      this.password = '';
      this.role = '';
    }
    
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

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 20px;
}

.modal-content form {
  display: flex;
  flex-direction: column;
}

.modal-content input, .modal-content select {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.modal-content button {
  background-color: #ff0000;
  border: none;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button:last-of-type {
  background-color: #aaa;
}
</style>
