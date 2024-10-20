<template>
  <div class="top-rectangle"></div>
  <div v-if="successMessage" class="notification">
    {{ successMessage }}
  </div>
  <div class="main-container">
    <div class="login-container">
      <img class="logo" src="../assets/logo.png" alt="Logo">
      <h1>Recuperar Contraseña</h1>
      <p class="info-text">
        Inserta tu correo asociado con tu cuenta para enviar el formulario de recuperación de contraseña.
      </p>
      <div class="iniciar">
        <input v-model="username" type="text" placeholder="Email de usuario" class="input-with-icon">
        <button @click="sendRecoveryForm">Enviar</button> 
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p class="volver-inicio">
           <router-link to="/">¿volver al inicio?</router-link>
        </p>
      </div>
    </div>
    <div class="image-container">
      <img class="gasolinera" src="../assets/gasolinera.jpg" alt="gasolinera">
      <div class="overlay"></div>
    </div>
  </div>
  <div class="bottom-rectangle"></div>
</template>
  
<script>
export default {
  data() {
    return {
      username: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    sendRecoveryForm() {
      if (this.username === '') {
        this.errorMessage = 'Por favor, ingresa tu correo electrónico.';
        this.successMessage = ''; 
      } else {
        this.successMessage = 'El formulario fue enviado con éxito.';
        this.errorMessage = ''; 

        
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }
    }
  }
};
</script>
  
  <style scoped>

.main-container {
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 50px;
  margin-bottom: 50px;
}


.login-container {
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 900px;
}


.image-container {
  flex: 2;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(238, 143, 143, 0.5); 
}


.iniciar button {
  width: 110px;
  height: 25px;
  color: white;
  border: 2px solid red;
  background: red;
  cursor: pointer;
  border-radius: 10px;
}

.iniciar input {
  width: 300px;
  height: 20px;
  padding: 20px;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid red;
  border-radius: 10px;
}


.logo {
  width: 250px;
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

.bottom-rectangle {
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #14033C, #992C2C, #FF5100); 
  bottom: 0;
  left: 0;
  z-index: 1;
}


.info-text {
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
  text-align: justify;
  max-width: 300px; 
  margin-left: auto;
  margin-right: auto; 
}
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4CAF50; 
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 14px;
}

.error {
  color: red;
  font-size: 14px;
}

.volver-inicio {
  margin-top: 10px;
  color: #555;
  font-size: 14px;
  text-align: center;
}

.volver-inicio a {
  color: #ff0000; 
  text-decoration: none;
}

.volver-inicio a:hover {
  text-decoration: underline;
}

</style>