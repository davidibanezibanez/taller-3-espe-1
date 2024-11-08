<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      
      
      <button @click="goToRegister">¿No tienes una cuenta? Regístrate aquí</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
          user => user.username === this.username && user.password === this.password
        );
        
        if (user) {
          
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          alert('Inicio de sesión exitoso');
          this.$router.push('/');
        } else {
          alert('Nombre de usuario o contraseña incorrectos');
        }
      },
      
      
      goToRegister() {
        this.$router.push('/register');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
  
  button {
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  