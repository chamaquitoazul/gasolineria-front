<template>
  <div class="top-rectangle"></div>
  <div class="main-container">
    <div class="login-container">
      <img class="logo" src="../assets/logo.png" alt="Logo">
      <h1>Inicio de sesión</h1>
      <div class="iniciar">
        <input v-model="username" type="text" placeholder="Email de usuario" class="input-with-icon">
        <input v-model="password" type="password" placeholder="Contraseña de usuario">
        <button @click="login">Acceder</button> <!-- Evento @click -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p class="forgot-password">
          ¿Olvidaste tu contraseña? <router-link to="/recuperar-contrasena">Recupérala</router-link>
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
  name: "SignUp",
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      
      users: [
        {
          email: 'admin@ejemplo.com',
          password: '123456',
          role: 'admin', 
          redirectRoute: 'RegistrarTickets' 
        },
      
        {
          email: 'chofer@ejemplo.com',
          password: '123456',
          role: 'chofer',
          redirectRoute: 'dashboard-chofer' 
        }
      ]
    };
  },
  methods: {
    login() {
      const foundUser = this.users.find(user => user.email === this.username && user.password === this.password);
      if (foundUser) {
        this.$router.push({ name: foundUser.redirectRoute }); 
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
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





.top-rectangle {
  width: 100%;
  height: 53px;
  background: linear-gradient(to bottom, #FF5100, #992C2C, #14033C); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Rectángulo inferior */
.bottom-rectangle {
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #14033C, #992C2C, #FF5100); 
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
}


.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}


.forgot-password {
  margin-top: 10px;
  color: #555;
  font-size: 14px;
  text-align: center;
}

.forgot-password a {
  color: #ff0000; 
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>

<style scoped>
.logo {
  width: 350px;
}
</style>



