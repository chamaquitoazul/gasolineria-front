<template>
    <div class="reset-password-container">
      <div class="reset-box">
        <h2>Restablecer contraseña</h2>
        <p>Introduce tu correo y te enviaremos las instrucciones para restablecer tu contraseña.</p>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="email">User</label>
            <div class="input-icon">
              <i class="email-icon"></i>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="tuemail@ejemplo.com"
                required
              />
            </div>
          </div>
          <button type="submit" class="reset-button">Restablecer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .reset-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #ff5e3a, #cd2a93);
  }
  
  .reset-box {
    background-color: #f3f3f3;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-icon {
    position: relative;
  }
  
  .input-icon i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #cd2a93;
  }
  
  .email-icon::before {
    content: "✉️"; /* Puedes reemplazar este icono por otro o usar una librería de iconos */
  }
  
  input {
    width: 100%;
    padding: 10px;
    padding-left: 30px; /* Espacio para el icono */
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-size: 14px;
  }
  
  input:focus {
    outline: none;
    border-color: #cd2a93;
  }
  
  .reset-button {
    background-color: #ff5e3a;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .reset-button:hover {
    background-color: #cd2a93;
  }
  </style>
  