<template>
    <!-- Rectángulo superior -->
    <div class="top-rectangle"></div>
  
    <!-- Contenedor principal -->
    <div class="main-container">
      <!-- Contenedor del formulario de registro -->
      <div class="register-container">
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <h1>Registro de usuario</h1>
        <div class="iniciar">
          <input type="email" placeholder="Email" class="input-with-icon" v-model="email" required>
          <input type="password" placeholder="Contraseña" v-model="password" required>
          <button @click="submitForm">Registrar</button>
        </div>
      </div>
  
      <!-- Imagen de la gasolinera con superposición de color -->
      <div class="image-container">
        <img class="gasolinera" src="../assets/gasolinera.jpg" alt="gasolinera">
        <div class="overlay"></div>
      </div>
    </div>
  
    <!-- Rectángulo inferior -->
    <div class="bottom-rectangle"></div>
  </template>
  
  <script>
  export default {
    name: "RegistrarUsuario",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        console.log("Formulario enviado con:", this.email, this.password);
        // Lógica para enviar los datos de registro
      }
    }
  };
  </script>
  
  <style>
  /* Contenedor principal que divide la pantalla en dos */
  .main-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 100px); /* Altura total menos los rectángulos superior e inferior */
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  /* Estilos del contenedor principal */
  .register-container {
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 900px;
  }
  
  /* Imagen de fondo de la gasolinera */
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
  
  /* Superposición de color rojo con opacidad */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 143, 143, 0.5); /* Rojo con 50% de opacidad */
  }
  
  /* Estilo del botón */
  .iniciar button {
    width: 110px;
    height: 25px;
    color: white;
    border: 2px solid red;
    background: red;
    cursor: pointer;
    border-radius: 10px;
  }
  
  /* Estilo de los inputs */
  .iniciar input {
    width: 300px;
    height: 20px;
    padding: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid red;
    border-radius: 10px;
  }
  
  /* Estilo del logo */
  .logo {
    width: 250px;
  }
  
  /* Rectángulo superior */
  .top-rectangle {
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom, #FF5100, #992C2C, #14033C); /* Gradiente de arriba hacia abajo */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  /* Rectángulo inferior */
  .bottom-rectangle {
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom, #14033C, #992C2C, #FF5100); /* Gradiente de arriba hacia abajo */
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  </style>
  