<template>
  
  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal"></div>

  
  <div v-if="isModalOpen" class="register-popup">
    <img class="logo" src="../assets/logo.png" alt="Logo">
    <h1>Registro de usuario</h1>
    <div class="form-group">
      <label for="email">Correo</label>
      <input type="email" id="email" placeholder="Correo" v-model="email" required>
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
    </div>
    <div class="form-group">
      <label for="role">Rol</label>
      <select id="role" v-model="role" required>
        <option disabled value="">Selecciona un rol</option>
        <option>Supervisor</option>
        <option>Administrador</option>
        <option>Chofer</option>
      </select>
    </div>
    <div class="buttons">
      <button @click="closeModal" class="cancel-button">Cancelar</button>
      <button @click="submitForm" class="register-button">Registrar cuenta</button>
    </div>
  </div>


  <button @click="openModal" class="open-popup-button">Abrir Registro</button>
</template>

<script>
export default {
  name: "RegistrarUsuario",
  data() {
    return {
      email: '',
      password: '',
      role: '',
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      console.log("Formulario enviado con:", this.email, this.password, this.role);
      this.closeModal();
    }
  }
};
</script>

<style>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Estilo del pop-up */
.register-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%; 
  max-width: 400px;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 2px solid red;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Estilos de los botones en el pop-up */
.buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-button,
.register-button {
  padding: 10px 20px;
  border: 2px solid red;
  background-color: white;
  color: red;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  width: 120px;
}

.register-button {
  background-color: red;
  color: white;
}

.cancel-button:hover {
  background-color: #f5f5f5;
}

.register-button:hover {
  background-color: darkred;
}

/* Botón para abrir el pop-up */
.open-popup-button {
  padding: 10px 20px;
  border: 2px solid red;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.open-popup-button:hover {
  background-color: darkred;
}
</style>
